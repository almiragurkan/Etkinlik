import React, { FC, useEffect, useState } from "react"
import { ActivityIndicator, View, ViewStyle, TextStyle, FlatList } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Header,
  Screen,
  GradientBackground,
  Card, Filters,
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
const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[4],
  paddingVertical: spacing[4]
}


export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const nextScreen2 = (activityId) => {
      navigation.navigate("activityDetail", { activityId: activityId})

    }

    const [filtersCityItem, setFiltersCityItem] = useState([])
    const [filtersCatItem, setFiltersCatItem] = useState([])
    const { activityStore } = useStores()
    const { activities } = activityStore


    const fetchData = async () => {
      await activityStore.getActivities(filtersCityItem, filtersCatItem)
    }

    useEffect(() => {
      fetchData().then(() => {
        console.log("getActivities çağırıldı.")
      })
    }, [filtersCityItem, filtersCatItem, activityStore])

    const filterCityFunction=(city)=>{
      setFiltersCityItem(city)
      console.log(filtersCityItem)
    }
    const filterCategoryFunction=(category)=>{
      setFiltersCatItem(category)
    }

    const openMenu = () => {
      navigation.openDrawer()
    }

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <Screen style={CONTAINER} backgroundColor={color.palette.lighterGrey}>
          <Header headerTx="welcomeScreen.activity" leftIcon={"bars2"}
                  style={HEADER} titleStyle={HEADER_TITLE} onLeftPress={openMenu} />
          <View style={{ flex: 1 }}>
            {/* <ActivityIndicator size="small" color="darkgrey" /> */}
            {/* {
              isFilters ?
                <Filters activityCity={activityCityStore.activityCities}
                         activityCategory={activityCategoryStore.activityCategories} onFilterCityChange={filterCityFunction} onFilterCatChange={filterCategoryFunction} />
                :
                <View style={{ flex: 1 }}> */}
                    <FlatList
                      contentContainerStyle={FLAT_LIST}
                      data={[...activities]}
                      keyExtractor={(item) => String(item.id)}
                      renderItem={({ item }) => (
                          <Card id={item.id} onPressDetail={nextScreen2}
                                activityName={item.name}
                                date={item.start}
                                category={item.category}
                                format={item.format}
                                venue={item.venue}
                                poster={item.poster_url}
                          />
                      )}
                    />
                {/* </View>
            } */}
          </View>
        </Screen>
      </View>
    )
  },
)
