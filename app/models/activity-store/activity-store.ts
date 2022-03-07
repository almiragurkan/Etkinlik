import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { ActivityModel, ActivitySnapshot } from "../activity/activity"
import { ActivityApi } from "../../services/api/activity-api"
import { withEnvironment } from "../extensions/with-environment"


export const ActivityStoreModel = types
  .model("ActivityStore")
  .props({
    activities: types.optional(types.array(ActivityModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveActivities: flow(function* (activitySnapshots: ActivitySnapshot[]) {
      self.activities.replace(activitySnapshots)
    })
  }))
  .actions((self) => ({
    getActivities: flow (function* (cityIds:any[], catIds:any[]) {
      const activityApi = new ActivityApi(self.environment.api)
      try {
        const result = yield activityApi.getActivities(cityIds, catIds)

        if (result.kind === "ok") {
          self.saveActivities(result.activities)
          // __DEV__ && console.log(result.kind)
        } else {
          __DEV__ && console.log(result.kind)
        }
      } catch (e) {
        __DEV__ && console.log(e.message)
      }
    })

  }))
  .actions((self) => ({
    findActivity: flow(function* (id: any){
      if (id===null){
        return null
      }
      for(let i=0; i<self.activities.length; i++){
        if (self.activities[i].id===id){
          return self.activities[i]
        }
      }
      return null
    })
  }))


type ActivityStoreType = Instance<typeof ActivityStoreModel>
export interface ActivityStore extends ActivityStoreType {}
type ActivityStoreSnapshotType = SnapshotOut<typeof ActivityStoreModel>
export interface ActivityStoreSnapshot extends ActivityStoreSnapshotType {}
export const createActivityStoreDefaultModel = () => types.optional(ActivityStoreModel, {})
