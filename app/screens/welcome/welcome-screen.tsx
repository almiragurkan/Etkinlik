import React, { FC } from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Header,
  Screen,
  GradientBackground, Filters,
} from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import Card from "../../components/card/card"


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



export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("filter")
    const nextScreen2 = () => navigation.navigate("activityDetail")

    var myloop = [];

    for (let i = 0; i < 10; i++) {
      myloop.push(
          <Card key={i} /* onTarget={nextScreen1()} */></Card>
      );
    }

    /* const onTarget=(screen) => navigation.navigate(screen) */

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header headerTx="welcomeScreen.activity" rightIcon="profile" leftIcon={"bars"} onLeftPress={nextScreen}
                  onRightPress={nextScreen2} style={HEADER} titleStyle={HEADER_TITLE} />
          <View style={{flex:1, alignItems:"center"}}>
            {myloop}
          </View>

        </Screen>
        <Filters></Filters>
      </View>
    )
  },
)
