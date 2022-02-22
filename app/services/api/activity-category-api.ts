import { ApiResponse } from "apisauce"
import { Api } from "./api"
import { GetActivitiesCategoriesResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"

export class ActivityCategoryApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getActivitiesCategories(): Promise<GetActivitiesCategoriesResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.get(
        "https://backend.etkinlik.io/api/v2/categories",
      )
      // __DEV__ && console.log(response.data)

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const activitiesCategories = response.data
      return { kind: "ok", activitiesCategories: activitiesCategories }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
