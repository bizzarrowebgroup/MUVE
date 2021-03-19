import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import { GilroyBold, GilroyRegular } from '../components/StyledText'
import Icon from './Icon'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import * as WebBrowser from 'expo-web-browser';
const styles = StyleSheet.create({
    card: {
        // width: wp(35), // 205
        // height: hp(24.5), // 245
        backgroundColor: Colors.purewhite,
        marginRight: 15,
        borderRadius: 10,
        width: wp(50),
    },
    boxed: {
        margin: 10,
    },
    image: {
        borderRadius: 8,
        width: "100%",
        height: 95
    },
    titolo: {
        marginTop: 15,
    }
})

const CardTopVisited = ({
    params,
    navigation
}) => {
    const handleCardPressed = (params) => {
        navigation.navigate('Modal', { params })
    }
    return (
        <TouchableOpacity onPress={() => handleCardPressed(params)}>
            <View style={styles.card}>
                <View style={styles.boxed}>
                    <Image source={{ uri: params.mainimage }} style={styles.image} />
                </View>
                <View style={{
                    // backgroundColor: "red",
                    margin: 10,
                }}>
                    <GilroyBold style={styles.titolo}>{params.titolo}</GilroyBold>
                    <View style={{
                        flexDirection: "row",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "pink"
                    }}>
                        <Icon name="location-pin" size={20} color={Colors.black} type="entypo" />
                        <GilroyRegular variant="small" style={{ marginLeft: 5, }}>{params.indirizzo}</GilroyRegular>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardTopVisited

