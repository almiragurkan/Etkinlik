import React, { useState } from "react"
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {MaterialIcons} from '@expo/vector-icons'

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

export const Filters = () => {

  const [selectedItems, setSelectedItems] = useState([])

  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems([{ selectedItems }]);
    __DEV__ && console.log(selectedItems.id)
  };

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


}