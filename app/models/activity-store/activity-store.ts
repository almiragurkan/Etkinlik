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
    saveActivities: (activitySnapshots: ActivitySnapshot[]) => {
      self.activities.replace(activitySnapshots)
    },
  }))
  .actions((self) => ({
    getActivities: async () => {
      const activityApi = new ActivityApi(self.environment.api)
      const result = await activityApi.getActivities()

      if (result.kind === "ok") {
        self.saveActivities(result.activities)
        // __DEV__ && console.log(result.activities[0].category)
      } else {
        //__DEV__ && console.tron.log(result.kind)
      }
    },

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
  .actions((self) => ({
    findActivityByFilters: flow(function* (id: any){
      if (id===null){
        return null
      }
      for(let i=0; i<self.activities.length; i++){
        if (self.activities[i].venue.city.id===id || self.activities[i].category.id){
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
