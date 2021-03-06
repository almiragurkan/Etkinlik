import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const ActivityCategoryModel = types.model("ActivityCategory").props({
  id: types.maybe(types.number),
  name: types.maybe(types.string),
  slug: types.optional(types.string, "", [null, undefined]),
})
export const ActivityFormatModel = types.model("ActivityFormat").props({
  id: types.maybe(types.number),
  name: types.maybe(types.string),
  slug: types.optional(types.string, "", [null, undefined]),
})
export const ActivityCityModel = types.model("ActivityVenueCity").props({
  id: types.maybe(types.number),
  name: types.maybe(types.string),
  slug: types.optional(types.string, "", [null, undefined]),
})
export const ActivityVenueModel = types.model("ActivityVenue").props({
  city:types.optional(ActivityCityModel, {}),
})


export const ActivityModel = types.model("Activity").props({
  id: types.identifierNumber,
  name: types.maybe(types.string),
  slug: types.optional(types.string, "", [null, undefined]),
  url: types.optional(types.string, "", [null, undefined]),
  content: types.optional(types.string, "", [null, undefined]),
  start: types.optional(types.string, "", [null, undefined]),
  end: types.optional(types.string, "", [null, undefined]),
  is_free: types.optional(types.boolean, false, [null, undefined]),
  poster_url: types.optional(types.string, "aaa", [null, undefined]),
  ticket_url: types.optional(types.string, "", [null, undefined]),
  phone: types.optional(types.string, "", [null, undefined]),
  email: types.optional(types.string, "", [null, undefined]),
  facebook_url: types.optional(types.string, "", [null, undefined]),
  twitter_url: types.optional(types.string, "", [null, undefined]),
  hashtag: types.optional(types.string, "", [null, undefined]),
  web_url: types.optional(types.string, "", [null, undefined]),
  live_url: types.optional(types.string, "", [null, undefined]),
  android_url: types.optional(types.string, "", [null, undefined]),
  ios_url: types.optional(types.string, "", [null, undefined]),
  category: types.optional(ActivityCategoryModel, {}, [null, undefined]),
  format: types.optional(ActivityFormatModel, {}, [null, undefined]),
  venue: types.optional(ActivityVenueModel, {}, [null, undefined]),
})


type ActivityType = Instance<typeof ActivityModel>
export interface Activity extends ActivityType {}

type ActivitySnapshotType = SnapshotOut<typeof ActivityModel>

export interface ActivitySnapshot extends ActivitySnapshotType {
}

export const createActivityDefaultModel = () => types.optional(ActivityModel, {})