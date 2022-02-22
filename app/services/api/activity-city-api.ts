import { ApiResponse } from "apisauce"
import { Api } from "./api"
import { GetActivitiesCitiesResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"

export class ActivityCityApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getActivitiesCities(): Promise<GetActivitiesCitiesResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.get(
        "https://backend.etkinlik.io/api/v2/cities",
      )
      // __DEV__ && console.log(response.data)

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const activitiesCities = response.data
      return { kind: "ok", activitiesCities: activitiesCities }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
