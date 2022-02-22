import { GeneralApiProblem } from "./api-problem"
import { Character } from "../../models/character/character"
import { Activity } from "../../models/activity/activity"
import { ActivityCategory, ActivityCity } from "../../models"

export interface User {
  id: number
  name: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem

export type GetActivitiesResult = { kind: "ok"; activities: Activity[] } | GeneralApiProblem
export type GetActivityResult = { kind: "ok"; activity: Activity } | GeneralApiProblem

export type GetActivitiesCitiesResult = { kind: "ok"; activitiesCities: ActivityCity[] } | GeneralApiProblem
export type GetActivityCityResult = { kind: "ok"; activityCity: ActivityCity } | GeneralApiProblem

export type GetActivitiesCategoriesResult = { kind: "ok"; activitiesCategories: ActivityCategory[] } | GeneralApiProblem
export type GetActivityCategoryResult = { kind: "ok"; activityCategory: ActivityCategory } | GeneralApiProblem