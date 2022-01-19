import React, { FC } from "react"
import { View, ViewStyle, TextStyle, SafeAreaView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Button,
  Header,
  Screen,
  GradientBackground,
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
const BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  backgroundColor: color.palette.deepPurple,
  marginLeft:5,
  flex:1
}
const BUTTON_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const FOOTER: ViewStyle = { backgroundColor: "#20162D" }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[4],
  flexDirection:"row",
}



export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("demo")

    var myloop = [];

    for (let i = 0; i < 10; i++) {
      myloop.push(
          <Card key={i}></Card>
      );
    }

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header headerTx="welcomeScreen.etkinlik" rightIcon="profile"
                  onRightPress={nextScreen} style={HEADER} titleStyle={HEADER_TITLE} />
          <View style={{flex:1, alignItems:"center"}}>
            {myloop}
          </View>

        </Screen>
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}>
            <Button
              testID="next-screen-button"
              style={BUTTON}
              textStyle={BUTTON_TEXT}
              tx="welcomeScreen.place"
              onPress={nextScreen}
            />
            <Button
              testID="next-screen-button"
              style={BUTTON}
              textStyle={BUTTON_TEXT}
              tx="welcomeScreen.related"
              onPress={nextScreen}
            />
            <Button
              testID="next-screen-button"
              style={BUTTON}
              textStyle={BUTTON_TEXT}
              tx="welcomeScreen.type"
              onPress={nextScreen}
            />
          </View>
        </SafeAreaView>
      </View>
    )
  },
)
