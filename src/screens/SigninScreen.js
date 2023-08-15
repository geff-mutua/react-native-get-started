import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Separator from "../components/Separator";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { Colors, Fonts, Images } from "../constants";
import Display from "../utils/Display";
import { ToggleButton } from "../components";
const SigninScreen = ({ navigation }) => {
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
        <Text style={styles.headerTitle}>Sign In</Text>
      </View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.content}>
        Enter your username and password, for sign in. Enjoy your food.
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="user"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <Separator height={15} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="lock"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            secureTextEntry={isPasswordShow ? false:true}
            placeholder="Password"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
          <Feather
          onPress={()=>setIsPasswordShown(!isPasswordShow)}
            name={isPasswordShow ? 'eye' : 'eye-off'}
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
        </View>
      </View>
      <Text></Text>
      <View style={styles.forgotPasswordContainer}>
        <View style={styles.toggleContainer} >
            <ToggleButton size={0.5} />
          <Text style={styles.remembermeText}>Remember me</Text>
        </View>
        <Text style={styles.forgotPasswordtext} onPress={() =>  navigation.navigate('Forgotpassword')}>Forgot Password?</Text>
      </View>
      <TouchableOpacity style={styles.signInButton} activeOpacity={0.8}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.accounttext}>Don`t have an account?</Text>
        <Text style={styles.signupText} onPress={()=>navigation.navigate('Signup')}>Sign Up</Text>
      </View>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.facebookButton} activeOpacity={0.8}>
      <View style={styles.socialContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.imagelogo} source={Images.FACEBOOK} resizeMode="contain" />
          </View>
          <Text style={styles.logoText}>Connect with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
        <View style={styles.socialContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.imagelogo} source={Images.GOOGLE} resizeMode="contain"/>
          </View>
          <Text style={styles.logoText}>Connect with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;

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
  forgotPasswordContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:20

  },
  toggleContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  remembermeText:{
      marginLeft:10,
      fontSize:12,
      color:Colors.DEFAULT_GREY,
      fontFamily:Fonts.FONT_FAMILY
  },
  forgotPasswordtext:{
    marginLeft:10,
    fontSize:12,
    color:Colors.DEFAULT_GREEN,
    fontFamily:Fonts.FONT_FAMILY,
    fontWeight:Fonts.BOLD
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
        fontSize:18,
        fontWeight:Fonts.BOLD,
        fontFamily:Fonts.FONT_FAMILY
    },
    signupContainer:{
        marginHorizontal:20,
        paddingVertical:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    accounttext:{
        color:Colors.DEFAULT_BLACK,
        fontSize:13,
        fontWeight:Fonts.BOLD,
        fontFamily:Fonts.FONT_FAMILY
    },
    signupText:{
        color:Colors.DEFAULT_GREEN,
        fontSize:13,
        fontWeight:Fonts.BOLD,
        fontFamily:Fonts.FONT_FAMILY ,
        marginLeft:10,
    },
    orText:{
        color:Colors.DEFAULT_BLACK,
        fontSize:15,
        fontWeight:Fonts.BOLD,
        fontFamily:Fonts.FONT_FAMILY,
        alignSelf:'center'
    },
    facebookButton:{
        backgroundColor:Colors.FABEBOOK_BLUE,
        borderRadius:8,
        paddingVertical:15,
        marginVertical:20,
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'center'
    },
    googleButton:{
        backgroundColor:Colors.GOOGLE_BLUE,
        borderRadius:8,
        paddingVertical:15,
        marginVertical:20,
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'center'
    },
    imagelogo:{
        width:18,
        height:18
    },
    logoContainer:{
        backgroundColor:Colors.DEFAULT_WHITE,
        padding:2,
        borderRadius:3,
        position:"absolute",
        left:25
    },
    socialContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    logoText:{
        color:Colors.DEFAULT_WHITE,
        fontSize:15,
        fontFamily:Fonts.FONT_FAMILY,
        fontWeight:Fonts.SEMI_BOLD
    }
});
