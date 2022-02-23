import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, FlatList } from "react-native"
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
}


export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const nextScreen2 = (activityId) => {
      navigation.navigate("activityDetail", {activityId: activityId})
    }

    const[filtersCityItem,setFiltersCityItem] = useState([])
    const[filtersCatItem,setFiltersCatItem] = useState([])
    const { activityStore } = useStores()
    const { activities } = activityStore


    const fetchData = async () => {
      await activityStore.getActivities(filtersCityItem,filtersCatItem)
    }

    useEffect(() => {
      fetchData().then(()=>{console.log("getActivities çağırıldı.")})
    }, [filtersCityItem,filtersCatItem,activityStore])


    const { activityCityStore } = useStores()
    const { activityCategoryStore } = useStores()


    useEffect(()=>{
      activityCityStore.getActivitiesCities()
        .then()
          .catch(reason => {
            __DEV__ && console.log(reason)
        })
    },[activityCityStore.activityCities])

    useEffect(()=>{
      activityCategoryStore.getActivitiesCategories()
        .then(()=>{console.log("kategoriler çağırıldı.")}).catch()
    },[activityCategoryStore])

    const onFiltersCityChange = (fCityItem) => {
      const tmpCity = filtersCityItem
      tmpCity.push(fCityItem[0])
      __DEV__ && console.log(filtersCityItem)
      setFiltersCityItem(tmpCity);
      fetchData().then()
    };

    const onFiltersCatChange = (fCatItem) => {
      const tmpCat = filtersCatItem
      tmpCat.push(fCatItem[0])
      __DEV__ && console.log(filtersCatItem)
      setFiltersCatItem(tmpCat);
      fetchData().then()
    };

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} backgroundColor={color.transparent}>
          <Header headerTx="welcomeScreen.activity" leftIcon={"bars"}
                  style={HEADER} titleStyle={HEADER_TITLE} />
          <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <Filters activityCity={activityCityStore.activityCities} activityCategory={activityCategoryStore.activityCategories} onFilterCityChange={onFiltersCityChange} onFilterCatChange={onFiltersCatChange} />
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
          </View>

        </Screen>
      </View>
    )
  },
)
