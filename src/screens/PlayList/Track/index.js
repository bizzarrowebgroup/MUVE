import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import HTML from "react-native-render-html";
import PlayIcon from '../../../assets/images/Play.svg'
import { GilroyBold, GilroyRegular } from '../../../components/StyledText';

export const styles = StyleSheet.create({
    artist: {
        color: '#b2b3b4',
    },
    cell: {
        justifyContent: 'center',
        padding: 16,
    },
    flexible: {
        flex: 1,
    },
    index: {
        color: '#b2b3b4',
    },
    name: {
        color: 'white',
    },
    row: {
        backgroundColor: 'black',
        marginVertical: 5,
        marginHorizontal: 5,
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 60
    },
})
export const Track = ({ track, artist, index, onTogglePlayback }) => {
    return (
        <>
            <View style={styles.row}>
                {/* 
                <View style={styles.cell}>
                    <Text style={styles.index}>{index}</Text>
                </View> */}

                <Image style={styles.image} source={{ uri: track.artwork }} />
                <View style={[styles.cell, styles.flexible]}>
                    <GilroyBold style={styles.name}>{track.title}</GilroyBold>
                    <GilroyRegular style={styles.artist}>{track.artist || artist}</GilroyRegular>
                </View>
                <TouchableOpacity style={styles.cell} onPress={() => onTogglePlayback(track)}>
                    <PlayIcon color={'white'} width={24} height={24} />
                </TouchableOpacity>
            </View>
            {/* <HTML
                source={{ html: track.description }}
                // contentWidth={contentWidth}
                containerStyle={{
                    paddingHorizontal: 20,
                }}
                baseFontStyle={{
                    color: "white",
                    fontFamily: "Gilroy-Regular"
                }}
            /> */}
        </>
    )
}