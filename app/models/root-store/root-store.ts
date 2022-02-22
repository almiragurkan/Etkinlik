import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CharacterStoreModel } from "../character-store/character-store"
import { ActivityStoreModel } from "../activity-store/activity-store"
import { ActivityCityStoreModel } from "../activity-city-store/activity-city-store"
import { ActivityCategoryStoreModel } from "../activity-category-store/activity-category-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  characterStore: types.optional(CharacterStoreModel, {} as any),
  activityStore: types.optional(ActivityStoreModel, {} as any ),
  activityCityStore: types.optional(ActivityCityStoreModel, {} as any ),
  activityCategoryStore: types.optional(ActivityCategoryStoreModel, {} as any )
})



/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
