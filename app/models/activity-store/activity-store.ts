import { Instance, SnapshotOut, types } from "mobx-state-tree"
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

      console.log(result)

      if (result.kind === "ok") {
        self.saveActivities(result.activities)

      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
  }))

type ActivityStoreType = Instance<typeof ActivityStoreModel>
export interface ActivityStore extends ActivityStoreType {}
type ActivityStoreSnapshotType = SnapshotOut<typeof ActivityStoreModel>
export interface ActivityStoreSnapshot extends ActivityStoreSnapshotType {}
export const createActivityStoreDefaultModel = () => types.optional(ActivityStoreModel, {})
