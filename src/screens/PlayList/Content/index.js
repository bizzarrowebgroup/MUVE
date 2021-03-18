import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated'

import { Track } from '../Track'
import { MAX_HEADER_HEIGHT } from '../utils'

export const styles = StyleSheet.create({
    artist: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: "Gilroy-Bold"
    },
    artistContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    container: {
        flex: 1,
    },
    gradient: {
        alignItems: 'center',
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
    },
    header: {
        height: MAX_HEADER_HEIGHT,
    },
    tracks: {
        backgroundColor: 'black',
        paddingTop: 32,
    },
})
export const Content = ({
    artist = undefined,
    tracks = undefined,
    onScroll = () => { },
    offsetY = Animated.SharedValue(0),
}) => {
    const animatedOpacity = useAnimatedStyle(() => ({
        opacity: interpolate(
            offsetY.value,
            [-MAX_HEADER_HEIGHT / 2, 0],
            [0, 1],
            Extrapolate.CLAMP,
        ),
    }))

    const animatedHeight = useAnimatedStyle(() => ({
        height: interpolate(
            offsetY.value,
            [-MAX_HEADER_HEIGHT, 0],
            [0, MAX_HEADER_HEIGHT],
            Extrapolate.CLAMP,
        ),
    }))

    return (
        <Animated.ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={1}
            contentContainerStyle={{ paddingBottom: 200 }}>
            <>
                <Animated.View style={[styles.header, animatedOpacity]}>
                    <Animated.View style={[styles.gradient, animatedHeight]}>
                        <LinearGradient
                            style={StyleSheet.absoluteFill}
                            start={{ x: 0, y: 0.7 }}
                            end={{ x: 0, y: 1 }}
                            colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'transparent']}
                        />
                    </Animated.View>
                    <View style={styles.artistContainer}>
                        <Text style={styles.artist}>{artist}</Text>
                    </View>
                </Animated.View>
                <View style={styles.tracks}>
                    {tracks.map((track, key) => (
                        <Track index={key + 1} {...{ artist, key, track }} />
                    ))}
                </View>
            </>
        </Animated.ScrollView>
    )
}