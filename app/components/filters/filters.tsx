import React, { useRef, useState } from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import MultiSelect from "react-native-multiple-select"


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
          noItemsText="Şehir bulunamadı"
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
          styleMainWrapper={{ width: 170, marginLeft: 5 }}
          styleItemsContainer={{ height: 200}}
          styleTextDropdown={{paddingLeft:10}}
          styleTextDropdownSelected={{paddingLeft:10}}
        />
        <View>
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
          noItemsText="Kategori bulunamadı"
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
          styleMainWrapper={{ width: 170, marginLeft: 5}}
          styleItemsContainer={{ height: 200}}
          styleTextDropdown={{paddingLeft:10}}
          styleTextDropdownSelected={{paddingLeft:10}}
        />
        <View>
          {refCat.current  && refCat.current.getSelectedItemsExt(selectedCatItems) ? refCat.current.getSelectedItemsExt(selectedCatItems) : null}
        </View>
      </View>
    </View>
  )
})