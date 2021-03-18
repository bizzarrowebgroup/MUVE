import React from 'react'
import { Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated'

import { HEADER_DELTA, MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT } from '../utils'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgb(74, 67, 56)',
        height: MIN_HEADER_HEIGHT,
        justifyContent: 'center',
        left: 0,
        paddingTop: 20,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
    },
})

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

export const Header = ({ artist = undefined, offsetY = Animated.SharedValue(0) }) => {
    const animatedOpacity = useAnimatedStyle(() => ({
        opacity: interpolate(
            offsetY.value,
            [0, MAX_HEADER_HEIGHT / 2],
            [0, 1],
            Extrapolate.CLAMP,
        ),
        transform: [
            {
                translateY: interpolate(
                    offsetY.value,
                    [0, MAX_HEADER_HEIGHT / 10],
                    [-100, 0],
                    Extrapolate.CLAMP,
                ),
            },
        ],
    }))

    const animatedGradient = useAnimatedStyle(() => ({
        opacity: interpolate(
            offsetY.value,
            [0, MAX_HEADER_HEIGHT / 1.5],
            [1, 0],
            Extrapolate.CLAMP,
        ),
    }))

    const animatedTitle = useAnimatedStyle(() => ({
        opacity: interpolate(
            offsetY.value,
            [HEADER_DELTA - 8, HEADER_DELTA - 4],
            [0, 1],
            Extrapolate.CLAMP,
        ),
        transform: [
            {
                translateY: interpolate(
                    offsetY.value,
                    [0, MAX_HEADER_HEIGHT],
                    [50, 0],
                    Extrapolate.CLAMP,
                ),
            },
        ],
    }))

    return (
        <Animated.View style={[styles.container, animatedOpacity]}>
            <AnimatedLinearGradient
                style={[styles.container, animatedGradient]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['rgb(74, 67, 56)', 'rgb(48, 44, 37)', 'transparent']}
            />
            <Animated.View style={[styles.titleContainer, animatedTitle]}>
                <Text style={styles.title}>{artist}</Text>
            </Animated.View>
        </Animated.View>
    )
}