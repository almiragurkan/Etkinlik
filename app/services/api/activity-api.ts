import { ApiResponse } from "apisauce"
import { Api } from "./api"
import { GetActivitiesResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"

const API_PAGE_SIZE = 20

export class ActivityApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getActivities(API_CITY_ID:any[], API_CAT_ID:any[]): Promise<GetActivitiesResult> {
    let params = ""
    params += "take="+ API_PAGE_SIZE
    if(API_CITY_ID !== []){
      params += "&city_ids=" + encodeURIComponent(API_CITY_ID.toString())
    }
    if(API_CAT_ID !== []){
      params += "&category_ids=" + encodeURIComponent(API_CAT_ID.toString())
    }
    // __DEV__ && console.log(encodeURIComponent(params))

    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.get(
        // "https://raw.githubusercontent.com/almiragurkan/Etkinlik/Etkinlik/app/data/etkinlik.json",
        "https://backend.etkinlik.io/api/v2/events?",
        {params: {city_ids: API_CITY_ID, category_ids: API_CAT_ID} }
         /* {take: API_PAGE_SIZE, encoded, city_ids: API_CITY_ID.toString(), encoded1, category_ids: API_CAT_ID.toString()}, */
      )

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const activities = response.data.items

      return { kind: "ok", activities }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
