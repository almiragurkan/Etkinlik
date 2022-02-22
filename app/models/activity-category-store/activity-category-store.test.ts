import { ActivityCategoryStoreModel } from "./activity-category-store"

test("can be created", () => {
  const instance = ActivityCategoryStoreModel.create({})

  expect(instance).toBeTruthy()
})
