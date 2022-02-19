import * as React from "react"
import {
  ImageStyle, Linking,
  ScrollView,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import moment from "moment"
import { AutoImage as Image } from "../auto-image/auto-image"
import RenderHtml from 'react-native-render-html';

const noPictureLogo = require("../screens/welcome/no-picture.png")

const FULL: ViewStyle = {
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  margin:10
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
const DATE_TEXT: TextStyle = {
  color: 'grey',
  fontWeight: 'normal',
  fontSize: 18,
  textAlign: 'center',
  alignItems:'center',
  flexDirection:'row',
  marginVertical:5,
}
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
  height:50,
  margin:5
}

export interface DetailProps {
  style?: StyleProp<ViewStyle>
  onPressDetail?:any
  activity?:any
}
/**
 * Describe your component here
 */
export const Detail = observer(function Detail(props: DetailProps) {
  const {activity} = props
  const { width } = useWindowDimensions();

  return (
        <View style={FULL}>
          {activity === null?
            <Text style={HEADER_TEXT}>Detay Bulunamadı</Text>
            :
            <View style={FULL}>
              <Image source={noPictureLogo} style={PICTURE} />
              <ScrollView contentContainerStyle={{alignItems:"center"}}>
                <Text style={HEADER_TEXT}>{activity.name}</Text>
                <Text style={DATE_TEXT}>{moment(activity.start).format('MMMM Do YYYY, h:mm')}</Text>
                <Text style={PLACE_TEXT}>{activity.venue.city.name}</Text>
                <Text style={PLACE_TEXT}>{activity.format.name}</Text>
                <RenderHtml contentWidth={width} source={{html: activity.content}}/>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL(activity.ticket_url)}} style={BUTTON}>
                  <Text>
                    Bilet Al
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          }
      </View>

  )
})
