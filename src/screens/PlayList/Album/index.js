import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Content } from '../Content'
import { Cover } from '../Cover'
import { ShufflePlay, BUTTON_HEIGHT } from '../ShufflePlay'

import { MIN_HEADER_HEIGHT } from '../utils'
const styles = StyleSheet.create({
    SuffleContainer: {
        left: 0,
        position: 'absolute',
        right: 0,
        top: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export const Album = ({ artist, cover, tracks }) => {
    return (
        <View style={styles.container}>
            <Cover cover={cover} />
            <Content artist={artist} tracks={tracks} />
            <View style={styles.SuffleContainer}>
                <ShufflePlay />
            </View>
        </View>
    )
}