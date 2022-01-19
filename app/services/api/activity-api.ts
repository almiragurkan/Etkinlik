import { ApiResponse } from "apisauce"
import { Api } from "./api"
import { GetActivitiesResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"

const API_PAGE_SIZE = 50

export class ActivityApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getActivities(): Promise<GetActivitiesResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.get(
        "https://raw.githubusercontent.com/almiragurkan/Etkinlik/Etkinlik/app/data/etkinlik.json",
        { amount: API_PAGE_SIZE },
      )
      console.log("============================================================================================")
console.log(response)
      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const activities = response.data.results

      return { kind: "ok", activities }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
