import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import { GilroyBold, GilroyRegular } from '../components/StyledText'
import Icon from './Icon'
import * as WebBrowser from 'expo-web-browser';
const styles = StyleSheet.create({
    card: {
        width: 205,
        height: 245,
        backgroundColor: Colors.purewhite,
        marginRight: 15,
        borderRadius: 10,
    },
    boxed: {
        alignSelf: "center",
        marginTop: 15,
        flex: 1,
    },
    image: {
        width: 174,
        height: 113,
        borderRadius: 8
    },
    titolo: {
        marginTop: 15,
        fontSize: 16,
        maxWidth: 150,
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
                <View style={{ flex: 1, marginLeft: 15, flexDirection: "column", justifyContent: "space-evenly", alignContent: "flex-start", alignItems: "flex-start" }}>
                    <GilroyBold style={styles.titolo}>{params.titolo}</GilroyBold>
                    <View style={{ flexDirection: "row", maxWidth: 150, alignContent: "center", alignItems: "center", justifyContent: "center", }}>
                        <Icon name="location-pin" size={20} color={Colors.black} type="entypo" />
                        <GilroyRegular style={{ marginLeft: 5, fontSize: 13 }}>{params.indirizzo}</GilroyRegular>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default CardTopVisited

