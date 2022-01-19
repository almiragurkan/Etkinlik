import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Rick and Morty character model.
 */
export const ActivityModel = types.model("Activity").props({
  id: types.identifierNumber,
  name: types.maybe(types.string),
  slug: types.maybe(types.string),
  url: types.maybe(types.string),
  content: types.maybe(types.string),
  start: types.maybe(types.string),
  end: types.maybe(types.string),
  is_free: types.maybe(types.string),
  phone: types.maybe(types.string),
  email: types.maybe(types.string),
  facebook_url: types.maybe(types.string),
  twitter_url: types.maybe(types.string),
  hashtag: types.maybe(types.string),
  web_url: types.maybe(types.string),
  live_url: types.maybe(types.string),
  android_url: types.maybe(types.string),
  ios_url: types.maybe(types.string),
})

type ActivityType = Instance<typeof ActivityModel>
export interface Activity extends ActivityType {}
type ActivitySnapshotType = SnapshotOut<typeof ActivityModel>
export interface ActivitySnapshot extends ActivitySnapshotType {}
export const createActivityDefaultModel = () => types.optional(ActivityModel, {})