import { ActivityCityModel } from "./activity-city"

test("can be created", () => {
  const instance = ActivityCityModel.create({})

  expect(instance).toBeTruthy()
})
