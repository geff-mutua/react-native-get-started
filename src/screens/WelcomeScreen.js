import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { React, useState, useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Colors, General, Fonts } from '../constants'
import { WelcomeCard, Separator } from '../components'
import { Display } from '../utils'

const pageStyle = isActive =>
    isActive
        ? styles.page
        : { ...styles.page, backgroundColor: Colors.DEFAULT_GREY };
const Pagination = ({ index }) => {
    return (
        <View style={styles.pageContainer}>
            {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
                i === index ? (
                    <View style={pageStyle(true)} key={i} />
                ) : (
                    <View style={pageStyle(false)} key={i} />
                ),
            )}
        </View>
    );
};
const WelcomeScreen = ({navigation}) => {
    const [welcomeListIndex, setWelcomeListIndex] = useState(0);
    const welcomeList = useRef();
    const onViewRef = useRef(({ changed }) => {
        setWelcomeListIndex(changed[0].index);
    });
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
    const pageScroll = () => {
        welcomeList.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
        });
    }
    return (
        <View style={styles.container}>
            <StatusBar
                StatusBar='dark-content'
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            <Separator height={StatusBar.currentHeight} />
            <Separator height={Display.setHeight(8)} />
            <View style={styles.welcomeListContainer}>
                <FlatList
                    ref={welcomeList}
                    data={General.WELCOME_CONTENTS}
                    keyExtractor={item => item.title}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    viewabilityConfig={viewConfigRef.current}
                    onViewableItemsChanged={onViewRef.current}
                    overScrollMode='never'
                    renderItem={({ item }) => <WelcomeCard {...item} />}
                />
            </View>
            <Separator height={Display.setHeight(8)} />
            <Pagination index={welcomeListIndex} />
            <Separator height={Display.setHeight(8)} />
            {welcomeListIndex === 2 ? (
        <TouchableOpacity
          style={styles.gettingStartedButton}
          activeOpacity={0.8}
          onPress={()=>navigation.navigate("Signin")}
         >
          <Text style={styles.gettingStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginLeft: 10}}
            onPress={() => welcomeList.current.scrollToEnd()}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => pageScroll()}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      )}
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE

    },
    welcomeListContainer: {
        height: Display.setHeight(60)
    },
    pageContainer: {
        flexDirection: 'row'
    },
    page: {
        height: 8,
        width: 15,
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 32,
        marginHorizontal: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Display.setWidth(90),
    },
    buttonText: {
        fontFamily: Fonts.FONT_FAMILY,
        fontWeight: Fonts.BOLD,
        lineHeight: 16 * 1.4,
        fontSize: 16
    },
    button: {
        backgroundColor: Colors.LIGHT_GREEN,
        paddingVertical: 20,
        paddingHorizontal: 11,
        borderRadius: 32,
    },
    gettingStartedButton:{
        backgroundColor:Colors.DEFAULT_GREEN,
        paddingHorizontal:45,
        paddingVertical:8,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        elevation:8
    },
    gettingStartedButtonText: {
        fontSize: 18,
        color: Colors.DEFAULT_WHITE,
        lineHeight: 20 * 1.4,
        fontFamily: Fonts.FONT_FAMILY,
        fontWeight:Fonts.SEMI_BOLD,
      },
})