import { StyleSheet, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images, CountryCode } from "../constants";
import { StaticImageService } from "../services";
import { View } from 'react-native-web';
const FlagItem = ({code, name, dial_code, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress({code, name, dial_code})}>
         
          <Image
        style={styles.flagImage}
        source={{uri: StaticImageService.getFlagIcon(name)}}
      />
      <Text style={styles.flagText}>{dial_code}</Text>
      <Text style={styles.flagText}>{name}</Text>
          
    </TouchableOpacity>
  )
}

export default FlagItem

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      
    },
    flagImage: {
      height: 15,
      width: 15,
      marginRight: 10,
      marginBottom:10,
      marginBottom:10,
    },
    flagText: {
      fontSize: 14,
      lineHeight: 14 * 1.4,
      fontWeight:'700',
      color: Colors.DEFAULT_BLACK,
      fontFamily: Fonts.FONT_FAMILY,
      marginRight: 10,
      marginLeft:10,
      marginBottom:10,
    },
  });