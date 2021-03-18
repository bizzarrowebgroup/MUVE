import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated'

import { MAX_HEADER_HEIGHT } from '../utils'

const { height } = Dimensions.get('window')

export const Cover = ({ cover = undefined, offsetY = Animated.SharedValue(0) }) => {
    const animatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            offsetY.value,
            [0, MAX_HEADER_HEIGHT / 2],
            [1, 0],
            Extrapolate.CLAMP,
        ),
        transform: [
            {
                scale: interpolate(
                    offsetY.value,
                    [-height, 0],
                    [6, 1],
                    Extrapolate.CLAMP,
                ),
            },
        ],
    }))

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <Image style={styles.image} source={cover} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: MAX_HEADER_HEIGHT,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        height: undefined,
        width: undefined,
    },
})