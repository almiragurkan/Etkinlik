import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { Detail, Header, Screen } from "../../components"
import { color } from "../../theme"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { useStores } from "../../models"


const ROOT: ViewStyle = {
  backgroundColor: color.palette.lighterGrey,
  flex: 1,
  flexDirection: "column",
  alignItems:"center",
}
const FULL: ViewStyle = { flex: 1 }


const HEADER: TextStyle = {
  paddingBottom: 5,
  paddingHorizontal: 5,
}
const HEADER_TITLE: TextStyle = {
  fontSize: 14,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
  color: 'black',
  fontWeight: 'bold',
  textTransform:"uppercase"
}


export const ActivityDetailScreen:FC<StackScreenProps<NavigatorParamList, "activityDetail">> = observer(
  ({ route, navigation }) => {
  const goBack = () => navigation.goBack()

    const [activityDetail,setActivityDetail] = useState(null)
    const { activityStore } = useStores()

    useEffect(()=>{
      if(route.params.activityId)
        activityStore.findActivity(route.params.activityId)
          .then(value => setActivityDetail(value))
    },[activityStore])

    return (
    <View testID="ActivityDetailScreen" style={FULL}>
    <Screen style={ROOT}>
      <Header
        leftIcon="back"
        onLeftPress={goBack}
        style={HEADER}
        titleStyle={HEADER_TITLE}
      />
      <View style={FULL}>
        <Detail activity={activityDetail}/>
      </View>
    </Screen>
    </View>
  )
})
