import React, { useRef, useState } from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import MultiSelect from "react-native-multiple-select"

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
  const { activityCity, activityCategory } = props
  const [selectedCityItems, setSelectedCityItems] = useState([])
  const [selectedCatItems, setSelectedCatItems] = useState([])
  /*  const [Buttons, setButtons] = useState([])

   const cityNames=[]
   const categoryNames=[]

   const deleteCity=()=>{
     return null
   }


   const cityButtons=()=>{
     const tmpButtons = []
     for(let i=0; i<cityNames.length; i++){
       tmpButtons.push(<Button title={cityNames[i]} onPress={deleteCity} key={i}/>)
     }
     setButtons(tmpButtons)
   }

   function getCityName(selectedCityItems){
     if(selectedCityItems.length<0){
       return null
     }
     for (let i = 0; i < activityCity.length; i++) {
       for (let x=0; x<selectedCityItems.length ; x++){
         if (selectedCityItems[x]===activityCity[i].id){
           cityNames.push(activityCity[i].name)
         }
       }
     }
   }

   function getCatName(selectedCatItems){
     if(selectedCatItems.length<0){
       return null
     }
     for (let i = 0; i < activityCategory.length; i++) {
       for (let x=0; x<selectedCatItems.length ; x++){
         if (selectedCatItems[x]===activityCategory[i].id){
           categoryNames.push(activityCategory[i].name)
         }
       }
     }
   } */

  const onSelectedCityItemsChange = selectedCityItems => {
    setSelectedCityItems(selectedCityItems)
    /* getCityName(selectedCityItems)
    console.log("City Names: " + cityNames)
    cityButtons() */
  }
  const onSelectedCatItemsChange = selectedCatItems => {
    setSelectedCatItems(selectedCatItems)
    /*  getCatName(selectedCatItems)
     console.log("Category Names: " + categoryNames) */
  }


  const ref = useRef(null)
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={activityCity}
          uniqueKey="id"
          ref={ref}
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
        {/* <View style={{flex:1, backgroundColor: color.palette.orangeDarker}}> */}
        {/*   {MultiSelect.getSelectedItemsExt(selectedCityItems)} */}
        {/* </View> */}
      </View>


      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={activityCategory}
          uniqueKey="id"
          ref={ref}
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
          styleMainWrapper={{ width: 170, height: 200, marginLeft: 5, justifyContent: "flex-start" }}
          styleItemsContainer={{ height: 200 }}
        />
        {/*      <View>
            <Text style={{color:"white"}}>
              {getCatName(selectedCatItems)}
            </Text>
          </View> */}

      </View>


    </View>

  )


})