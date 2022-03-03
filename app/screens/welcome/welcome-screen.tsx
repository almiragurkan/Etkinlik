import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, FlatList, Text, ScrollView } from "react-native"
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
  flex:1
}
/* const VIEW_FILTER: ViewStyle = {
  flexDirection:"row",
  margin:5,
}
const FILTER_TEXT: TextStyle = {
  backgroundColor: "lightgrey",
  marginHorizontal: spacing[4],
  paddingVertical: spacing[4],
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"row",
  borderRadius:15,
  paddingLeft:5,
  flex:1,
  flexShrink: 1
} */


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
        .then(()=>{__DEV__ && console.log("şehirler çağırıldı.")})
    },[activityCityStore.activityCities])

    useEffect(()=>{
      activityCategoryStore.getActivitiesCategories()
        .then(()=>{__DEV__ && console.log("kategoriler çağırıldı.")})
    },[activityCategoryStore])



    return (
      <View testID="WelcomeScreen" style={FULL}>
        <GradientBackground colors={["#422443", "#281b34"]} />
        <Screen style={CONTAINER} backgroundColor={color.transparent}>
          <Header headerTx="welcomeScreen.activity" leftIcon={"bars"}
                  style={HEADER} titleStyle={HEADER_TITLE} />
          <View style={{flex:1}}>
            <Filters activityCity={activityCityStore.activityCities} activityCategory={activityCategoryStore.activityCategories} />
            <ScrollView style={{flex:1, }}>
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
            </ScrollView>



          </View>

        </Screen>
      </View>
    )
  },
)
