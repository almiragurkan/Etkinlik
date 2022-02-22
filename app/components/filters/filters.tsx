import React, { useState } from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {MaterialIcons} from '@expo/vector-icons'
import { observer } from "mobx-react-lite"
import { DetailProps } from "../detail/detail"

const items = [
  {
    name: 'Fruits',
    id: 0,
    children: [
      {
        name: 'Apple',
        id: 10,
      },
      {
        name: 'Strawberry',
        id: 17,
      },
      {
        name: 'Pineapple',
        id: 13,
      },
      {
        name: 'Banana',
        id: 14,
      },
      {
        name: 'Watermelon',
        id: 15,
      },
      {
        name: 'Kiwi fruit',
        id: 16,
      },
    ],

  },
  {
    name: 'Vegetables',
    id: 1,
    children: [
      {
        name: 'Apple',
        id: 96,
      },
      {
        name: 'Strawberry',
        id: 77,
      },

    ],

  },

];
export interface FilterProps {
  style?: StyleProp<ViewStyle>
  onPressDetail?:any
  activity?:any
}

export const Filters = observer(function Detail(props: FilterProps) {
  const {activity} = props
  const [selectedItems, setSelectedItems] = useState([])

  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems([{ selectedItems }]);
    __DEV__ && console.log(selectedItems.id)
  };

  __DEV__ && console.log(activity)

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
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
        />
      </View>

    );


})