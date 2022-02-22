import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ActivityCityModel = types.model("ActivityCity").props({
  id: types.identifierNumber,
  name: types.maybe(types.string),
  slug: types.optional(types.string, "", [null, undefined]),
})

type ActivityCityType = Instance<typeof ActivityCityModel>
export interface ActivityCity extends ActivityCityType {}
type ActivityCitySnapshotType = SnapshotOut<typeof ActivityCityModel>
export interface ActivityCitySnapshot extends ActivityCitySnapshotType {}
export const createActivityCityDefaultModel = () => types.optional(ActivityCityModel, {})
