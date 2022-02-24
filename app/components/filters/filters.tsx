import React, { useState } from "react"
import { StyleProp, Text, View, ViewStyle } from "react-native"
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {MaterialIcons} from '@expo/vector-icons'
import { observer } from "mobx-react-lite"
import { spacing } from "../../theme"

const FILTER: ViewStyle = {
  backgroundColor: "pink",
  marginHorizontal: spacing[4],
  marginVertical: spacing[4],
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"row",
  borderRadius:15,
  flex:1
}

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

  const cityItems = [
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

/*
  const customChipsRenderer = (props) => {
    console.log('props', props)
    return (
      <View style={{ backgroundColor: 'yellow', padding: 15 }}>
        <Text>Selected:</Text>
        {props.selectedItems.map((singleSelectedItem) => {
          const item = SectionedMultiSelect._findItem(singleSelectedItem)

          if (!item || !item[props.displayKey]) return null

          return (
            <View
              key={item[props.uniqueKey]}
              style={{
                flex: 0,
                marginRight: 5,
                padding: 10,
                backgroundColor: 'orange'
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  SectionedMultiSelect._removeItem(item)
                }}
              >
                <Text>{item[props.displayKey]}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }
*/

    return (
      <View style={{alignItems:"center", flexDirection:"row"}}>
        <View style={FILTER}>
          <Text>{catItems[0].name}:</Text>
        <SectionedMultiSelect
          items={cityItems}
          IconRenderer={MaterialIcons}
          uniqueKey="id"
          subKey="children"
          displayKey="name"
          selectText="Filtrele"
          showDropDowns={true}
          expandDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={onFilterCityChange}
          selectedItems={selectedItems}
          showCancelButton={true}
          confirmText={"Tamam"}
          searchPlaceholderText={"Şehir Ara"}
          showChips={true}
          alwaysShowSelectText={true}
          showRemoveAll={true}
          parentChipsRemoveChildren={true}
          removeAllText={"Seçilenleri Kaldır"}


        />
        </View>
        <View style={FILTER}>
          <Text>{catItems[0].name}:</Text>
        <SectionedMultiSelect
          items={catItems}
          IconRenderer={MaterialIcons}
          uniqueKey="id"
          subKey="children"
          selectText="Filtrele"
          showDropDowns={true}
          expandDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={onFilterCatChange}
          selectedItems={selectedItems}
          showCancelButton={true}
          confirmText={"Tamam"}
          searchPlaceholderText={"Kategori Ara"}
        />
        </View>
      </View>

    );


})