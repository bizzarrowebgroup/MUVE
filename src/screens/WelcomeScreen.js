import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Animated, Image, View, SafeAreaView } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { window } from '../constants/Layout';
import { GilroyRegular, GilroyBold } from '../components/StyledText';
import Swiper from 'react-native-swiper'

const WelcomeScreen = ({
    params,
    navigation
}) => {
    const [scrollX, setscrollX] = useState(0);
    const dataSource = [
        {
            "id": 1,
            "image": require("../assets/images/intro_first.png"),
            "text": "Scopri nuovi interessanti musei"
        },
        {
            "id": 2,
            "image": require("../assets/images/intro_second.png"),
            "text": "Compra biglietti per i musei in poco tempo"
        },
        {
            "id": 3,
            "image": require("../assets/images/intro_third.png"),
            "text": "Rimani aggiornato con tutte le informazioni sulle esposizioni"
        },
    ]
    const pressEdSalta = () => {
        // console.log("pressed")
        // navigation.navigate('Login');
        navigation.navigate('Playlist');
    }
    return (
        <>
            {/* <LinearGradient
                colors={["#316c60", "#316c60", "#5b8f85", "#316c60", "#316c60"]}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: window.height,
                    zIndex: -1
                }}
            /> */}
            <SafeAreaView style={{ flex: 1, backgroundColor: "#316c60" }}>
                <Swiper
                    dotStyle={{ backgroundColor: Colors.black, borderRadius: 0, width: 10, height: 10, top: 3, marginLeft: 9 }}
                    autoplay={true}
                    activeDot={
                        <View style={{
                        }}>
                            <View
                                style={{
                                    backgroundColor: Colors.purewhite,
                                    width: 10,
                                    height: 10,
                                    borderRadius: 2,
                                    marginLeft: 7,
                                    marginRight: 7,
                                    left: 3.3,
                                    top: 3.3
                                }}
                            />
                            <View
                                style={{
                                    backgroundColor: 'transparent',
                                    borderWidth: 1,
                                    borderColor: "white",
                                    width: 17,
                                    height: 17,
                                    borderRadius: 2,
                                    marginLeft: 7,
                                    marginRight: 7,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                }}
                            />
                        </View>
                    }
                    showsButtons={false}
                    loop={false}
                    showsPagination={true}
                    paginationStyle={{ bottom: 170 }}>
                    {dataSource.map((source, i) => {
                        return (
                            <View style={{ paddingTop: 200 }} key={i}>
                                <Image
                                    style={{ height: 270, resizeMode: "contain", alignSelf: "center" }}
                                    source={source.image}
                                />
                                <View style={{ alignSelf: "center", marginVertical: 40, paddingHorizontal: 80 }}>
                                    <GilroyRegular style={{ fontSize: 22, color: Colors.purewhite, textAlign: "center" }}>
                                        {source.text}
                                    </GilroyRegular>
                                </View>
                            </View>
                        );
                    })}
                </Swiper>
            </SafeAreaView>
            <TouchableOpacity style={{ position: "absolute", bottom: 80, alignSelf: "center" }} onPress={pressEdSalta}>
                <GilroyBold style={{ fontSize: 18, color: Colors.purewhite }}>Salta</GilroyBold>
            </TouchableOpacity>
        </>
    )
};

export default WelcomeScreen;
