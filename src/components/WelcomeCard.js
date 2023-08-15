import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Display} from '../utils'
import {Fonts,Images} from '../constants'

const WelcomeCard = ({title,content,image}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={Images[image]} resizeMode='contain'/>
        <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contenttext}>{content}</Text>
    </View>
  )
}

export default WelcomeCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:Display.setWidth(100),
    },
    image:{
        height:Display.setHeight(30),
        width:Display.setWidth(60),
    },
    titleText:{
        fontFamily:Fonts.FONT_FAMILY,
        fontWeight:Fonts.BOLD,
        fontSize:22,
        
    },
    contenttext:{
        fontFamily:Fonts.FONT_FAMILY,
        fontWeight:Fonts.NORMAL,
        fontSize:18,
        textAlign:'center',
        marginHorizontal:20,
    }
})