import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ActivityCategoryModel = types.model("ActivityCategory").props({
  id: types.identifierNumber,
  name: types.maybe(types.string),
  slug: types.optional(types.string, "", [null, undefined]),
})

type ActivityCategoryType = Instance<typeof ActivityCategoryModel>
export interface ActivityCategory extends ActivityCategoryType {}
type ActivityCategorySnapshotType = SnapshotOut<typeof ActivityCategoryModel>
export interface ActivityCategorySnapshot extends ActivityCategorySnapshotType {}
export const createActivityCategoryDefaultModel = () => types.optional(ActivityCategoryModel, {})
