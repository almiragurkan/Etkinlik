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
  onFilterChange?: any
}

export const Filters = observer(function Detail(props: FilterProps) {
  const {activityCity, activityCategory, onFilterChange} = props
  const [selectedItems, setSelectedItems] = useState([])

  const items = [
    {
      name: 'Şehirler',
      id: 0,
      children: activityCity
    },
    {
      name: 'Kategoriler',
      id: 1,
      children: activityCategory,

    },

  ];

  /* const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems([{ selectedItems }]);
    __DEV__ && console.log(selectedItems[1])
  }; */

    return (
      <View>
        <SectionedMultiSelect
          items={items}
          IconRenderer={MaterialIcons}
          uniqueKey="id"
          subKey="children"
          selectText="Filtrele"
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={onFilterChange}
          selectedItems={selectedItems}
        />
      </View>

    );


})