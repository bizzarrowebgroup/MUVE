import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

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
export const Track = ({ track, artist, index }) => (
    <View style={styles.row}>
        <Image style={styles.image} source={{ uri: "https://media.izi.travel/ab5d2ab4-1a11-45bb-9470-550d170c59db/6a2b1271-003c-4845-a3d6-11746cab1543_800x600.jpg" }} />
        {/* <View style={styles.cell}>
            <Text style={styles.index}>{index}</Text>
        </View> */}
        <View style={[styles.cell, styles.flexible]}>
            <Text style={styles.name}>{track.name}</Text>
            <Text style={styles.artist}>{track.artist || artist}</Text>
        </View>
        {/* <View style={styles.cell}>
            <Text>{"Ciao!"}</Text>
        </View> */}
    </View>
)