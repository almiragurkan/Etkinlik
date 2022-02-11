import React, { useEffect, FC } from "react"
import { FlatList, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Header, Screen, Text, GradientBackground } from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import { NavigatorParamList } from "../../navigators"

const FULL: ViewStyle = {
  flex: 1,
}
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}
const HEADER: TextStyle = {
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: spacing[4],
  paddingTop: spacing[3],
}
const HEADER_TITLE: TextStyle = {
  fontSize: 12,
  fontWeight: "bold",
  letterSpacing: 1.5,
  lineHeight: 15,
  textAlign: "center",
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

export const ActivityListScreen: FC<StackScreenProps<NavigatorParamList, "activityList">> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.goBack()

    const { activityStore } = useStores()
    const { activities } = activityStore

    useEffect(() => {
      async function fetchData() {

        await activityStore.getActivities()
      }

      fetchData().then((value) => console.log(value))
    }, [])

    return (
      <View testID="ActivityListScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
          <Header
            headerTx="activityListScreen.title"
            leftIcon="back"
            onLeftPress={goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
          <FlatList
            contentContainerStyle={FLAT_LIST}
            data={[...activities]}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <View style={LIST_CONTAINER}>
                <Text style={LIST_TEXT}>
                  {item.name} ({item.id} {item.start})
                </Text>
              </View>
            )}
          />
        </Screen>
      </View>
    )
  },
)
