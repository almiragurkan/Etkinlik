
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import {
  WelcomeScreen,
  ActivityDetailScreen,

} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { Filters } from "../components"
import { color } from "../theme"

export type NavigatorParamList = {
  welcome: undefined
  demo: undefined
  activityList: undefined
  demoList: undefined
  activityDetail: { activityId }
  profile: undefined
  filter: undefined
  filters: undefined
}

const Drawer = createDrawerNavigator<NavigatorParamList>()


const AppDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerTitle: "ETKİNLİKLER",
        headerStyle: { backgroundColor: color.palette.lighterGrey },
        headerTitleAlign: "center",
      }}
      initialRouteName="welcome"
      drawerContent={ props => <Filters/>}
    >
      <Drawer.Screen name="welcome" component={WelcomeScreen} />
      <Drawer.Screen name="filter" component={Filters} />
      <Drawer.Screen name="activityDetail" component={ActivityDetailScreen} />
    </Drawer.Navigator>
  )
}


interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {
}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  // const routeName = getActiveRouteName(navigationRef.getRootState())
  console.log(navigationRef.getRootState())
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
    <AppDrawer />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
