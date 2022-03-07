import React, { useEffect, useRef, useState } from "react"
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import MultiSelect from "react-native-multiple-select"
import { Header } from "../header/header"
import { color, spacing, typography } from "../../theme"
import { goBack } from "../../navigators"
import { Button } from "../../components/button/button"
import { useStores } from "../../models"

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
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.orangeDarker,
  justifyContent:"flex-end",
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export interface FilterProps {
  style?: StyleProp<ViewStyle>

}

export const Filters = observer(function Filter(props: FilterProps) {
  const [selectedCityItems, setSelectedCityItems] = useState([])
  const [selectedCatItems, setSelectedCatItems] = useState([])

  const { activityStore } = useStores()

  const onSelectedCityItemsChange = selectedCityItems => {
    setSelectedCityItems(selectedCityItems)
    console.log(selectedCityItems)
    // onFilterCityChange(selectedCityItems)
  }
  const onSelectedCatItemsChange = selectedCatItems => {
    setSelectedCatItems(selectedCatItems)
    // onFilterCatChange(selectedCatItems)
  }

  const { activityCityStore } = useStores()
  const { activityCategoryStore } = useStores()

  useEffect(() => {
    if(activityCityStore.activityCities===null){
      activityCityStore.getActivitiesCities()
        .then(() => {
          __DEV__ && console.log("şehirler çağırıldı.")
        })
    }
  }, [activityCityStore.activityCities])

  useEffect(() => {
    if(activityCategoryStore.activityCategories===null) {
      activityCategoryStore.getActivitiesCategories()
        .then(() => {
          __DEV__ && console.log("kategoriler çağırıldı.")
        })
    }
  }, [activityCategoryStore])

  const getActivitiesFunc = () => {
    activityStore.getActivities(selectedCityItems,selectedCatItems)
    goBack()
  }

  const refCity = useRef<MultiSelect>(null)
  const refCat = useRef<MultiSelect>(null)
  return (
    <View style={{ flexDirection: "column", flex: 1, backgroundColor:"lightgrey", padding:5 }}>
      <Header headerTx="filters.title"
              style={HEADER} titleStyle={HEADER_TITLE} />
      <View>
        <MultiSelect
          hideTags
          items={activityCityStore.activityCities===undefined ? [] : activityCityStore.activityCities}
          uniqueKey="id"
          ref={refCity}
          onSelectedItemsChange={onSelectedCityItemsChange}
          selectedItems={selectedCityItems}
          selectText="Şehirler"
          searchInputPlaceholderText="Şehir ara..."
          noItemsText="Şehir bulunamadı"
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="orange"
          tagBorderColor="orange"
          tagTextColor="grey"
          tagContainerStyle={{backgroundColor: "white", margin:5}}
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="#CCC"
          submitButtonText="Tamam"
          styleMainWrapper={{ width: 260, marginLeft: 5 }}
          styleItemsContainer={{ height: 200 }}
          styleTextDropdown={{ paddingLeft: 10 }}
          styleTextDropdownSelected={{ paddingLeft: 10 }}

        />
        <View>
          {refCity.current===null ?
            <View style={{paddingLeft:15, paddingBottom:50}}>
              <Text style={{color:"white"}}>
                Şehir seçimi yapılmadı.
              </Text>
            </View>
            :
            refCity.current.getSelectedItemsExt(selectedCityItems)
          }
        </View>
      </View>
      <View>
        <MultiSelect
          hideTags
          items={activityCategoryStore.activityCategories===undefined ? [] : activityCategoryStore.activityCategories}
          uniqueKey="id"
          ref={refCat}
          onSelectedItemsChange={onSelectedCatItemsChange}
          selectedItems={selectedCatItems}
          selectText="Kategoriler"
          searchInputPlaceholderText="Kategori Ara..."
          noItemsText="Kategori bulunamadı"
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="orange"
          tagBorderColor="orange"
          tagTextColor="grey"
          tagContainerStyle={{backgroundColor: "white"}}
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="#CCC"
          submitButtonText="Tamam"
          styleMainWrapper={{ width: 260, marginLeft: 5, marginTop:10 }}
          styleItemsContainer={{ height: 200 }}
          styleTextDropdown={{ paddingLeft: 10 }}
          styleTextDropdownSelected={{ paddingLeft: 10 }}
        />
        <View>
          {refCat.current && refCat.current.getSelectedItemsExt(selectedCatItems) ? refCat.current.getSelectedItemsExt(selectedCatItems)
            :
            <View style={{paddingLeft:15, paddingBottom:50}}>
              <Text style={{color:"white"}}>
                Kategori seçimi yapılmadı.
              </Text>
            </View>
          }
        </View>
      </View>
        <View style={CONTENT}>
          <Button
            testID="next-screen-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            tx="filters.filter"
            onPress={getActivitiesFunc}
          />
        </View>
    </View>
  )
})