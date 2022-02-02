import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
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
  padding:30,
}
const FULL: ViewStyle = { flex: 1 }

const PICTURE: ImageStyle = {
  alignSelf: "center",
  marginTop:0,
  maxWidth: "100%",
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
const EXPLANATION: TextStyle = {
  flex:1,
  color: 'grey',
  fontWeight: 'normal',
  fontSize: 18,
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
  flex:1,
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 7,
  flexDirection: "row",
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'green',
  width:200,
}
/* const LIKE_BUTTON: ViewStyle = {
  borderWidth: 1,
  borderColor: 'grey',
  borderRadius: 7,
  justifyContent:'flex-end',
  alignItems:'center',
  backgroundColor:'lightgrey',
  width:25,
  height:25,
  alignSelf:'flex-end',
  flexGrow: 0.01,
} */
const HEADER: TextStyle = {
  flex:1,
  paddingTop: 1,
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

/*   const [state, setState] = useState("♡")


  const _onPress = () => {
    setState("♥")
  } */
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
      {/* <TouchableOpacity style={LIKE_BUTTON} onPress={_onPress}>
        <Text style={TYPE_TEXT}>{state}</Text>
      </TouchableOpacity> */}
      <Image source={noPictureLogo} style={PICTURE} />
      <Text style={DATE_TEXT}>Tarih Saat</Text>
      <Text style={PLACE_TEXT}>Yer</Text>
      <Text style={EXPLANATION}>Açıklama</Text>
      <TouchableOpacity style={BUTTON}>
        <Text>
          Bilet Al
        </Text>
      </TouchableOpacity>

    </Screen>
    </View>
  )
})
