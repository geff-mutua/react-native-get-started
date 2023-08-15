import { StyleSheet, StatusBar, Text, View, Image,TextInput,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Colors, Fonts,Images } from "../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import Separator from "../components/Separator";
import Display from "../utils/Display";
import Feather from "react-native-vector-icons/Feather";
const ForgotPassword = ({navigation}) => {
    const [isPasswordShow,setIsPasswordShown]=useState(false);
  return (
    <View style={styles.container}>
           <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Forgot Password</Text>
      </View>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.content}>
        Enter your email so that we can help you recover your password.
      </Text>

      <Separator height={15} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="mail"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <Separator height={15} />

      <TouchableOpacity style={styles.signInButton} activeOpacity={0.8}>
        <Text style={styles.signInButtonText}>Reset Password</Text>
      </TouchableOpacity>

    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
      },
      headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      headerTitle: {
        fontFamily: Fonts.FONT_FAMILY,
        fontWeight: Fonts.BOLD,
        fontSize: 20,
        width: Display.setWidth(80),
        lineHeight: 20 * 1.4,
        textAlign: "center",
      },
      title: {
        fontSize: 20,
        fontFamily: Fonts.FONT_FAMILY,
        fontWeight: Fonts.BOLD,
        marginHorizontal: 20,
        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
      },
      content: {
        fontFamily: Fonts.FONT_FAMILY,
        fontWeight: Fonts.SEMI_BOLD,
        fontSize: 15,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        width:300
      },
      inputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: "center",
      },
      inputSubContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      inputText:{
          fontSize:18,
          textAlignVertical:'center',
          padding:0,
          height:Display.setHeight(6),
          color:Colors.DEFAULT_BLACK,
          flex:1
      },
      signInButton:{
        backgroundColor:Colors.DEFAULT_GREEN,
        marginHorizontal:20,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        height:Display.setHeight(6),
        marginTop:20,
    },
    signInButtonText:{
        color:Colors.DEFAULT_WHITE,
        fontSize:15,
        fontWeight:Fonts.SEMI_BOLD,
        fontFamily:Fonts.FONT_FAMILY
    },


})