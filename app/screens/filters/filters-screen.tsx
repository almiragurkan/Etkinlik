import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Filters, Header, Screen } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { useStores } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.lighterGrey,
  flex: 1,
}

export const FiltersScreen: FC<StackScreenProps<NavigatorParamList, "filter">> = observer(
  ({ route, navigation }) => {
    const goBack = () => navigation.goBack()
    const { activityStore } = useStores()


  return (
    <Screen style={ROOT} preset="scroll">
      <Header
        leftIcon="back"
        onLeftPress={goBack}
      />
      <Filters activity={activityStore}></Filters>
    </Screen>
  )
})
