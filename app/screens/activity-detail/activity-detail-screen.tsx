import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, ScrollView, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { AutoImage as Image, Header, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"

const noPictureLogo = require("../screens/welcome/no-picture.png")

const ROOT: ViewStyle = {
  backgroundColor: color.palette.lighterGrey,
  flex: 1,
  flexDirection: "column",
  alignItems:"center",
}
const FULL: ViewStyle = { flex: 1 }

const PICTURE: ImageStyle = {
}
const PLACE_TEXT: TextStyle = {
  color: 'dimgrey',
  fontWeight: 'normal',
  fontSize: 15,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
  marginVertical:5,
}
const EXPLANATION_TEXT: TextStyle = {
  color: 'grey',
  fontWeight: 'normal',
  fontSize: 18,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
  marginHorizontal:15,
  marginVertical:5,
}
const DATE_TEXT: TextStyle = {
  color: 'grey',
  fontWeight: 'normal',
  fontSize: 18,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
  marginVertical:5,
}
/* const TYPE_TEXT: TextStyle = {
  color: 'black',
  fontWeight: '400',
  fontSize: 15,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
  padding:0.1
} */
const BUTTON: ViewStyle = {
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 7,
  flexDirection: "row",
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'green',
  width:200,
  height:50,
  margin:5
}

const HEADER: TextStyle = {
  paddingTop: 50,
  paddingBottom: 5,
  paddingHorizontal: 5,
}
const HEADER_TITLE: TextStyle = {
  fontSize: 14,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
  color: 'black',
  fontWeight: 'bold',
  textTransform:"uppercase"
}


export const ActivityDetailScreen:FC<StackScreenProps<NavigatorParamList, "activityDetail">> = observer(
  ({ navigation }) => {

  const goBack = () => navigation.goBack()

  return (
    <View testID="ActivityDetailScreen" style={FULL}>
    <Screen style={ROOT} preset="scroll">
      <Header
        headerTx="activityDetailScreen.activity"
        leftIcon="back"
        onLeftPress={goBack}
        style={HEADER}
        titleStyle={HEADER_TITLE}
      />

      <Image source={noPictureLogo} style={PICTURE} />
      <ScrollView>
      <Text style={DATE_TEXT}>Tarih Saat</Text>
      <Text style={PLACE_TEXT}>Yer</Text>
      <Text style={PLACE_TEXT}>Ücret</Text>
      <Text style={EXPLANATION_TEXT}>AçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıkAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklamaAçıklama</Text>
      </ScrollView>
      <TouchableOpacity style={BUTTON}>
        <Text>
          Bilet Al
        </Text>
      </TouchableOpacity>
    </Screen>
    </View>
  )
})
