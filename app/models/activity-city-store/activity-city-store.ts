import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ActivityCityModel, ActivityCitySnapshot } from "../activity-city/activity-city"
import { ActivityCityApi } from "../../services/api/activity-city-api"
import { withEnvironment } from "../extensions/with-environment"


export const ActivityCityStoreModel = types
  .model("ActivityCityStore")
  .props({
    activityCities: types.optional(types.array(ActivityCityModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveActivities: (activityCitySnapshots: ActivityCitySnapshot[]) => {
      self.activityCities.replace(activityCitySnapshots)
    },
  }))
  .actions((self) => ({
    getActivitiesCities: async () => {
      const activityCityApi = new ActivityCityApi(self.environment.api)
      const result = await activityCityApi.getActivitiesCities()

      // __DEV__ && console.log(result)

      if (result.kind === "ok") {
      // __DEV__ && console.log(result.activitiesCities)
        self.saveActivities(result.activitiesCities)
      } else {
        __DEV__ && console.log(result.kind)
      }
    },

  }))


type ActivityCityStoreType = Instance<typeof ActivityCityStoreModel>
export interface ActivityCityStore extends ActivityCityStoreType {}
type ActivityCityStoreSnapshotType = SnapshotOut<typeof ActivityCityStoreModel>
export interface ActivityCityStoreSnapshot extends ActivityCityStoreSnapshotType {}
export const createActivityCityStoreDefaultModel = () => types.optional(ActivityCityStoreModel, {})
