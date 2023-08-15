import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  FlatList
} from "react-native";
import React, { useState } from "react";
import Separator from "../components/Separator";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors, Fonts, Images, CountryCode } from "../constants";
import Display from "../utils/Display";
import { StaticImageService } from "../services";
import FlagItem from "../components/FlagItem";

const RegisterPhoneScreen = ({ navigation }) => {
    const getDropdownStyle = y => ({...styles.countryDropdown, top: y + 60});
  const [selectedCountry, setSelectedcountry] = useState(
    CountryCode.find((country) => country.name == "Kenya")
  );
  const [inputContainerY,setInputContainerY]=useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [phoneNumber,setPhoneNumber]=useState("");
  return (
    <View>
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
        <Text style={styles.headerTitle}>Register Phone</Text>
      </View>
      <Text style={styles.title}>Verify Mobile Number</Text>
      <Text style={styles.content}>
        Enter your registered phone number to login
      </Text>
      <View
            style={styles.inputContainer}
            onLayout={({
                nativeEvent: {
                layout: {y},
                },
            }) => setInputContainerY(y)}>
        <TouchableOpacity style={styles.countryListContainer}
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
        >

          <Text style={styles.countryCodeText}>{selectedCountry.dial_code}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={18} />
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
          <TextInput
                placeholder="Phone Number"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                keyboardType="number-pad"
                onFocus={()=>setIsDropdownOpen(false)}
                style={styles.inputText}
                maxLength={9}
                
                onChangeText={(text)=>setPhoneNumber(selectedCountry ?.dial_code+text)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        activeOpacity={0.8}
        onPress={()=>{
          console.log(phoneNumber);
           navigation.navigate('Verification',{phoneNumber})
        }}
       >
        <Text style={styles.signinButtonText}>Contiue</Text>
      </TouchableOpacity>
      {isDropdownOpen && (
      <View style={getDropdownStyle(inputContainerY)}>
              <FlatList
            data={CountryCode}
            keyExtractor={item => item.code}
            renderItem={({item}) => (
              <FlagItem
                {...item}
                onPress={country => {
                    setSelectedcountry(country);
                  setIsDropdownOpen(false);
                }}
              />
            )}
          />
      </View>
      )}
    </View>
  );
};

export default RegisterPhoneScreen;

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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 50,
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    width: Display.setWidth(22),
    marginRight: 10,
    borderRadius: 8,
    height: Display.setHeight(6),
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    flexDirection: "row",
  },
  phoneInputContainer: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GREY,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    height: Display.setHeight(6),
  },
  flagIcon: {
    width: 20,
    height: 20,
  },
  countryCodeText:{
      fontSize:14,
      fontWeight:Fonts.BOLD,
      color:Colors.DEFAULT_BLACK
  },
  inputText:{
    fontSize:18,
    textAlignVertical:'center',
    padding:0,
    height:Display.setHeight(6),
    color:Colors.DEFAULT_BLACK,
    
    },
    countryDropdown:{
        backgroundColor:Colors.LIGHT_GREY,
        position:'absolute',
        width:Display.setWidth(80),
        height:Display.setHeight(50),
        marginLeft:20,
        borderRadius:10,
        borderWidth:0.5,
        borderColor:Colors.LIGHT_GREY2,
        zIndex:3,
    },
    signinButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
      },
      signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.FONT_FAMILY,
      },
});
