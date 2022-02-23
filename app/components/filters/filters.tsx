import React, { useState } from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {MaterialIcons} from '@expo/vector-icons'
import { observer } from "mobx-react-lite"


export interface FilterProps {
  style?: StyleProp<ViewStyle>
  onPressDetail?:any
  activityCity?:any
  activityCategory?:any
  onFilterCityChange?: any
  onFilterCatChange?: any
}

export const Filters = observer(function Detail(props: FilterProps) {
  const {activityCity, activityCategory, onFilterCityChange, onFilterCatChange} = props
  const [selectedItems] = useState([])

  const items = [
    {
      name: 'Şehirler',
      id: 0,
      children: activityCity
    },
  ];
  const catItems = [
    {
      name: 'Kategoriler',
      id: 1,
      children: activityCategory,

    }
  ]

    return (
      <View style={{alignItems:"center", flexDirection:"row"}}>
        <SectionedMultiSelect
          items={items}
          IconRenderer={MaterialIcons}
          uniqueKey="id"
          subKey="children"
          selectText="Filtrele"
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={onFilterCityChange}
          selectedItems={selectedItems}
        />
        <SectionedMultiSelect
          items={catItems}
          IconRenderer={MaterialIcons}
          uniqueKey="id"
          subKey="children"
          selectText="Filtrele"
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={onFilterCatChange}
          selectedItems={selectedItems}
        />
      </View>

    );


})