import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ActivityCategoryModel, ActivityCategorySnapshot } from "../activity-category/activity-category"
import { withEnvironment } from "../extensions/with-environment"
import { ActivityCategoryApi } from "../../services/api/activity-category-api"

/**
 * Model description here for TypeScript hints.
 */
export const ActivityCategoryStoreModel = types
  .model("ActivityCategoryStore")
  .props({
    activityCategories: types.optional(types.array(ActivityCategoryModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveActivities: (activityCategorySnapshots: ActivityCategorySnapshot[]) => {
      self.activityCategories.replace(activityCategorySnapshots)
    },
  }))
  .actions((self) => ({
    getActivitiesCategories: async () => {
      const activityCategoryApi = new ActivityCategoryApi(self.environment.api)
      const result = await activityCategoryApi.getActivitiesCategories()

      // __DEV__ && console.log(result)

      if (result.kind === "ok") {
        // __DEV__ && console.log(result.activitiesCities)
        self.saveActivities(result.activitiesCategories)
      } else {
        __DEV__ && console.log(result.kind)
      }
    },

  }))

type ActivityCategoryStoreType = Instance<typeof ActivityCategoryStoreModel>
export interface ActivityCategoryStore extends ActivityCategoryStoreType {}
type ActivityCategoryStoreSnapshotType = SnapshotOut<typeof ActivityCategoryStoreModel>
export interface ActivityCategoryStoreSnapshot extends ActivityCategoryStoreSnapshotType {}
export const createActivityCategoryStoreDefaultModel = () => types.optional(ActivityCategoryStoreModel, {})
