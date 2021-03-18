import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Colors from '../constants/Colors';
import { GilroyBold, GilroyRegular } from '../components/StyledText';
import { BlurView } from "@react-native-community/blur";

import { format } from 'date-fns';
import { it } from 'date-fns/locale';

const styles = StyleSheet.create({
    card: {
        height: 171,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: "white"
    },
    image: {
        width: 125,
        height: 171,
        backgroundColor: "black"
        // borderTopLeftRadius: 8,
        // borderBottomLeftRadius: 8,
    },
    boxed: {
        flexDirection: "column",
        alignContent: "flex-start",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginLeft: 10,
        marginTop: 20
    },
    date: {
        color: Colors.lightgreen,
        fontSize: 16,
    },
    title: {
        marginTop: 5,
        maxWidth: 180,
        fontSize: 16,
        lineHeight: 20,
        color: Colors.black
    },
    scopri: {
        color: Colors.grey,
        position: "absolute",
        bottom: 10,
        right: 10
    }
})

const CardNews = ({
    params
}) => {
    const { id, title, image, date, url, museoID } = params;
    const handleNewsPressed = async (url) => {
        await Linking.openURL(
            url
        );
    }
    return (
        <TouchableOpacity onPress={() => handleNewsPressed(url)}>
            <BlurView style={styles.card} blurRadius={20} blurAmount={100} blurType="light">
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.boxed}>
                    <GilroyRegular style={styles.date}>{format(new Date(String(date)), "d MMMM, y", { locale: it })}</GilroyRegular>
                    <GilroyBold style={styles.title}>{title}</GilroyBold>
                </View>
                <GilroyRegular style={styles.scopri}>{"Scopri di più"}</GilroyRegular>
            </BlurView>
        </TouchableOpacity>
    )
}


export default CardNews

