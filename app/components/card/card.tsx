import React, { useState } from "react"
import { FlatList, ImageStyle, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { AutoImage as Image } from "../../components"
import { observer } from "mobx-react-lite"
import moment from "moment"
/* import { IconTypes } from "../../components/icon/icons/index" */


const noPictureLogo = require("../screens/welcome/no-picture.png")

const CARD: ViewStyle ={
  flex:1,
  backgroundColor: 'white',
  borderWidth: 3,
  borderColor: 'lightgrey',
  borderRadius: 10,
  flexDirection: "column",
  alignItems:"center",
  padding:30,
  marginBottom:10,
}
const PICTURE: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
}
const HEADER_TEXT: TextStyle = {
  color: 'black',
  fontWeight: 'bold',
  fontSize: 25,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
  marginBottom:5,

}

const DATE_TEXT: TextStyle = {
  /* flex:0.15, */
  color: 'grey',
  fontWeight: 'normal',
  fontSize: 18,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
  margin:5,
}
const PLACE_TEXT: TextStyle = {
  /* flex:0.15, */
  color: 'dimgrey',
  fontWeight: 'normal',
  fontSize: 15,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
  margin:5,
}
const TYPE_TEXT: TextStyle = {
  /* flex:0.15, */
  color: 'black',
  fontWeight: '400',
  fontSize: 15,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
  margin:5,
}

const BUTTON: ViewStyle = {
  /* flex:0.15, */
  padding:3,
  margin:5,
  borderWidth: 1,
  borderColor: 'grey',
  borderRadius: 7,
  flexDirection: "row",
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'lightgrey',
  width:200,
}

export interface CardProps {
  style?: StyleProp<ViewStyle>
  onPressDetail?:any
  id?:any
  activityName?:any
  date?:any
  category?:any
  format?:any
  venue?:any
  poster?:any
}


export const Card  = observer(function Card(props: CardProps) {
  const {style, onPressDetail, id, activityName, date, category, format, venue, poster} = props

  const formattedDate=moment(date).format('MMMM Do YYYY, h:mm')

  return (
    <View style={CARD}>
      <Image source={noPictureLogo} style={PICTURE} />
      <TouchableOpacity  onPress={onPressDetail}>
        <Text style={HEADER_TEXT}>{activityName}</Text>
      </TouchableOpacity>
      <Text style={DATE_TEXT}>{formattedDate}</Text>
      <Text style={PLACE_TEXT}>{venue.city.name}</Text>
      <Text style={TYPE_TEXT}>{format.name}</Text>
      <TouchableOpacity style={BUTTON}>
        <Text>
          {category.name}
        </Text>
      </TouchableOpacity>

    </View>
  );
})
