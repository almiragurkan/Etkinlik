import React, { FC, useEffect } from "react"
import { View, ViewStyle, TextStyle, Text, FlatList } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Header,
  Screen,
  GradientBackground,
  Card
} from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { useStores } from "../../models"



const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const LIST_CONTAINER: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  padding: 10,
}

const LIST_TEXT: TextStyle = {
  marginLeft: 10,
}
const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[4],
}



export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("filter")
    const nextScreen2 = () => navigation.navigate("activityDetail")
    const nextScreen3 = () => navigation.navigate("activityList")



    const { activityStore } = useStores()
    const { activities } = activityStore

    useEffect(() => {
      async function fetchData() {

        await activityStore.getActivities()
      }

      fetchData()
    }, [])

    /* const onTarget=(screen) => navigation.navigate(screen) */

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header headerTx="welcomeScreen.activity" rightIcon="profile" leftIcon={"bars"} onLeftPress={nextScreen}
                  onRightPress={nextScreen2} style={HEADER} titleStyle={HEADER_TITLE} />
          <View style={{flex:1, alignItems:"center", backgroundColor:"pink", justifyContent:"center"}}>
            <FlatList
              contentContainerStyle={FLAT_LIST}
              data={[...activities]}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <Card id={item.id} onPressDetail={nextScreen3} activityName={item.name} date={item.start} category={item.category}></Card>
              )}
            />
          </View>

        </Screen>
      </View>
    )
  },
)
