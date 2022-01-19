import React, { useState } from "react"
import { ImageStyle, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { AutoImage as Image } from "../../components"
/* import { IconTypes } from "../../components/icon/icons/index" */


const bowserLogo = require("../screens/welcome/bowser.png")

const CARD: ViewStyle ={
  flex:1,
  backgroundColor: 'white',
  borderWidth: 3,
  borderColor: 'lightgrey',
  borderRadius: 10,
  flexDirection: "column",
  maxWidth: "90%",
  alignItems:"center",
  padding:10,
  marginBottom:10
}
const PICTURE: ImageStyle = {
  alignSelf: "center",
  marginTop:0,
  maxWidth: "100%",
}
const HEADER_TEXT: TextStyle = {
  flex:1,
  color: 'black',
  fontWeight: 'bold',
  fontSize: 30,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',

}

const DATE_TEXT: TextStyle = {
  flex:1,
  color: 'grey',
  fontWeight: 'normal',
  fontSize: 18,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
}
const PLACE_TEXT: TextStyle = {
  flex:1,
  color: 'dimgrey',
  fontWeight: 'normal',
  fontSize: 15,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
}
const TYPE_TEXT: TextStyle = {
  flex:1,
  color: 'black',
  fontWeight: '400',
  fontSize: 15,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
}

const BUTTON: ViewStyle = {
  flex:1,
  borderWidth: 1,
  borderColor: 'grey',
  borderRadius: 7,
  flexDirection: "row",
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'lightgrey',
  width:200,
}

const LIKE_BUTTON: ViewStyle = {
  flex:1,
  borderWidth: 1,
  borderColor: 'grey',
  borderRadius: 7,
  justifyContent:'flex-end',
  alignItems:'center',
  backgroundColor:'lightgrey',
  width:25,
  height:25,
  alignSelf:'flex-end',
  flexGrow: 1,
}




const Card = () => {

  const [state, setState] = useState("♡")


  const _onPress = () => {
    setState("♥")
  }


  return (
    <View style={CARD}>
      <TouchableOpacity style={LIKE_BUTTON} /* rightIcon="heart" */ onPress={_onPress}>
        {/* <Text style={TYPE_TEXT}>♥</Text> */}
        <Text style={TYPE_TEXT}>{state}</Text>
      </TouchableOpacity>
      <Image source={bowserLogo} style={PICTURE} />
      <Text style={HEADER_TEXT}>Etkinlik Başlığı</Text>
      <Text style={DATE_TEXT}>Tarih Saat</Text>
      <Text style={PLACE_TEXT}>Yer</Text>
      <Text style={TYPE_TEXT}>Tür</Text>
      <TouchableOpacity style={BUTTON}>
        <Text>
          İlgi Alanı
        </Text>
      </TouchableOpacity>

    </View>
  );
}


export default Card;
