import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Filters, Header, Screen } from "../../components"
import { color } from "../../theme"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { useStores } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.lighterGrey,
  flex: 1,
}

export const FiltersScreen: FC<StackScreenProps<NavigatorParamList, "filter">> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.goBack()
    const { activityCityStore } = useStores()
    const { activityCategoryStore } = useStores()

    useEffect(()=>{
      activityCityStore.getActivitiesCities().then()
      __DEV__&&console.log("")
    },[activityCityStore])

    useEffect(()=>{
      activityCategoryStore.getActivitiesCategories().then()
      __DEV__&&console.log("")
    },[activityCategoryStore])

  return (
    <Screen style={ROOT} preset="scroll">
      <Header
        leftIcon="back"
        onLeftPress={goBack}
      />
      <Filters activityCity={activityCityStore.activityCities} activityCategory={activityCategoryStore.activityCategories} />
    </Screen>
  )
})
