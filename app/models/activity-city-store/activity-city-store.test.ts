import { ActivityCityStoreModel } from "./activity-city-store"

test("can be created", () => {
  const instance = ActivityCityStoreModel.create({})

  expect(instance).toBeTruthy()
})
