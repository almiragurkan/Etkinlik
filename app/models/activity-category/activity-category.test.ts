import { ActivityCategoryModel } from "./activity-category"

test("can be created", () => {
  const instance = ActivityCategoryModel.create({})

  expect(instance).toBeTruthy()
})
