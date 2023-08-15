import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from "react-native";
import React, { useRef,useState } from "react";
import Display from "../utils/Display";
import { Colors, Fonts, Images } from "../constants";
import Separator from "../components/Separator";
import Ionicons from "react-native-vector-icons/Ionicons";

const VerificationScreen = ({
    navigation,
  route: {
    params: { phoneNumber },
  },
}) => {
    const firstInput=useRef();
    const secondInput=useRef();
    const thirdInput=useRef();
    const fourthInput=useRef();
    const [Opt, setOpt] = useState({1:'',2:'',3:'',4:''});
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
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>
      <Text style={styles.title}>Verify Phone Number</Text>
      <Text style={styles.content}>
        Enter the OPT number sent to you at {""}
        <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
      </Text>
      <Text style={styles.infoText}>Did you Enter The Correct Number?</Text>
      <View style={styles.optContainer}>
        <View style={styles.optBox}>
          <TextInput style={styles.optText}
          keyboardType="number-pad"
          maxLength={1}
         ref={firstInput}
         onChangeText={e=>{
             setOpt({...Opt,1:e})
            e && secondInput.current.focus();
         }}
         
          ></TextInput>
        </View>
        <View style={styles.optBox}>
          <TextInput style={styles.optText}
          keyboardType="number-pad"
          maxLength={1}
          ref={secondInput}
          onChangeText={e=>{
            setOpt({...Opt,2:e})
            e ?  thirdInput.current.focus() : firstInput.current.focus();
         }}
          ></TextInput>
        </View>
        <View style={styles.optBox}>
          <TextInput style={styles.optText}
          keyboardType="number-pad"
          maxLength={1}
          ref={thirdInput}
          onChangeText={e=>{
            setOpt({...Opt,3:e})
            e ? fourthInput.current.focus() : thirdInput.current.focus();
         }}
          >
          </TextInput>
        </View>
        <View style={styles.optBox}>
          <TextInput style={styles.optText}keyboardType="number-pad"
          maxLength={1}
          ref={fourthInput}
          onChangeText={e=>{
            setOpt({...Opt,4:e})
            !e && thirdInput.current.focus();
         }}
          >
          </TextInput>
        </View>
      </View>
      <Text style={styles.content}>Didn`t receive SMS?
      {'  '}
      <Text style={styles.resendTextCode}>Resend Code</Text>
      </Text>
      <TouchableOpacity style={styles.signInButton} activeOpacity={0.8}
      onPress={()=>console.log(Opt)}
      >
        <Text style={styles.signInButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationScreen;

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
    width: 300,
  },
  phoneNumberText: {
    fontFamily: Fonts.FONT_FAMILY,
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.DEFAULT_YELLOW,
  },
  infoText: {
    marginHorizontal: 20,
    fontFamily: Fonts.FONT_FAMILY,
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 30,
  },
  optContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  optBox: {
    borderRadius: 5,
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 0.5,
  },
  optText: {
    fontSize: 25,
    color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
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
resendTextCode:{
    color:Colors.DEFAULT_GREEN,
    fontWeight:'bold'
}
});
