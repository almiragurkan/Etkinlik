import React, { useRef, useState } from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import MultiSelect from "react-native-multiple-select"
import { color } from "../../theme"

/* const FILTER: ViewStyle = {
  backgroundColor: "pink",
  marginHorizontal: spacing[4],
  marginVertical: spacing[4],
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"row",
  borderRadius:15,
  flex:1
} */

export interface FilterProps {
  style?: StyleProp<ViewStyle>
  onPressDetail?: any
  activityCity?: any
  activityCategory?: any
  onFilterCityChange?: any
  onFilterCatChange?: any
}

export const Filters = observer(function Detail(props: FilterProps) {
  const { activityCity, activityCategory, onFilterCityChange, onFilterCatChange } = props
  const [selectedCityItems, setSelectedCityItems] = useState([])
  const [selectedCatItems, setSelectedCatItems] = useState([])

  const onSelectedCityItemsChange = selectedCityItems => {
    setSelectedCityItems(selectedCityItems)
    onFilterCityChange(selectedCityItems)
  }
  const onSelectedCatItemsChange = selectedCatItems => {
    setSelectedCatItems(selectedCatItems)
    onFilterCatChange(selectedCatItems)
  }


  const refCity = useRef<MultiSelect>(null)
  const refCat = useRef<MultiSelect>(null)
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={activityCity}
          uniqueKey="id"
          ref={refCity}
          onSelectedItemsChange={onSelectedCityItemsChange}
          selectedItems={selectedCityItems}
          selectText="Şehirler"
          searchInputPlaceholderText="Şehir ara..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="#CCC"
          submitButtonText="Tamam"
          styleMainWrapper={{ width: 170, height: 200, marginRight: 5, flex: 1 }}
          styleItemsContainer={{ height: 200 }}
        />
        <View style={{backgroundColor: color.palette.orangeDarker}}>
          {refCity.current  && refCity.current.getSelectedItemsExt(selectedCityItems) ? refCity.current.getSelectedItemsExt(selectedCityItems) : null}
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={activityCategory}
          uniqueKey="id"
          ref={refCat}
          onSelectedItemsChange={onSelectedCatItemsChange}
          selectedItems={selectedCatItems}
          selectText="Kategoriler"
          searchInputPlaceholderText="Kategori Ara..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="#CCC"
          submitButtonText="Tamam"
          styleMainWrapper={{ width: 170, height: 200, marginLeft: 5, flex: 1 }}
          styleItemsContainer={{ height: 200 }}
        />
        <View style={{backgroundColor: color.palette.orangeDarker}}>
          {refCat.current  && refCat.current.getSelectedItemsExt(selectedCatItems) ? refCat.current.getSelectedItemsExt(selectedCatItems) : null}
        </View>
      </View>


    </View>

  )


})