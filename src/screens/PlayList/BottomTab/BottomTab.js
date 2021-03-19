import React, { useCallback, useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import {
    PanGestureHandler,
} from 'react-native-gesture-handler'

import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated'

import { clamp, snapPoint } from 'react-native-redash'

// import Home from '../../../assets/images/home.svg'
// import Search from '../../../assets/images/search.svg'
// import Library from '../../../assets/images/Library.svg'
// import TabIcon from '../TabIcon'

import TrackPlayer, { usePlaybackState } from "react-native-track-player";
import { trackChanged } from "../../../components/AudioPlayer/PlayerConfig";

import { MiniPlayer } from '../MiniPlayer'
import Player from '../Player'
import { PlayerOverlay } from '../PlayerOverlay'
import { SNAP_BOTTOM, SNAP_TOP, TABBAR_HEIGHT } from '../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#272829',
        borderTopColor: 'black',
        borderWidth: 1,
        bottom: 0,
        flexDirection: 'row',
        height: TABBAR_HEIGHT,
        left: 0,
        position: 'absolute',
        right: 0,
    },
    playerSheet: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'cyan',
    },
})

export const BottomTab = ({ onNext, onPrevious, onTogglePlayback }) => {
    const translateY = useSharedValue(SNAP_BOTTOM)
    const snapPoints = [SNAP_TOP, SNAP_BOTTOM]

    const gestureHandler = useAnimatedGestureHandler({
        onActive: ({ translationY }, context) => {
            translateY.value = clamp(
                context.offsetY + translationY,
                SNAP_TOP,
                SNAP_BOTTOM,
            )
        },
        onEnd: ({ velocityY }) => {
            const destination = snapPoint(translateY.value, velocityY, snapPoints)
            translateY.value = withTiming(destination)
        },
        onStart: (_event, context) => {
            context.offsetY = translateY.value
        },
    })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }))

    // const animatedBottomBarStyle = useAnimatedStyle(() => ({
    //     transform: [
    //         {
    //             translateY: interpolate(
    //                 translateY.value,
    //                 [SNAP_BOTTOM - TABBAR_HEIGHT, SNAP_BOTTOM],
    //                 [TABBAR_HEIGHT, 0],
    //                 Extrapolate.CLAMP,
    //             ),
    //         },
    //     ],
    // }))

    const goUp = useCallback(() => {
        translateY.value = withTiming(SNAP_TOP)
    }, [translateY])

    const goDown = useCallback(() => {
        translateY.value = withTiming(SNAP_BOTTOM)
    }, [translateY])

    const playbackState = usePlaybackState();
    const [trackTitle, setTrackTitle] = useState("");
    const [trackArtwork, setTrackArtwork] = useState();
    const [trackArtist, setTrackArtist] = useState("");
    const [middleButtonState, setMiddle] = useState("Play")
    trackChanged(setTrackTitle, setTrackArtist, setTrackArtwork)

    useEffect(() => {
        if (playbackState === TrackPlayer.STATE_PLAYING || playbackState === TrackPlayer.STATE_BUFFERING) {
            setMiddle("Pause")
        } else setMiddle("Play")
    }, [playbackState])

    return (
        <>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.playerSheet, animatedStyle]}>
                    <Player
                        onPress={goDown}
                        onTogglePlayback={onTogglePlayback}
                        middleButtonState={middleButtonState}
                        currentSong={{
                            image: trackArtwork,
                            album: trackTitle,
                            artist: trackArtist
                        }}
                        onNext={onNext}
                        onPrevious={onPrevious}
                    />
                    <PlayerOverlay translateY={translateY} />
                    <MiniPlayer
                        onPress={goUp}
                        translateY={translateY}
                        onTogglePlayback={onTogglePlayback}
                        middleButtonState={middleButtonState}
                        currentSong={{
                            image: trackArtwork,
                            album: trackTitle,
                            artist: trackArtist
                        }}
                    />
                </Animated.View>
            </PanGestureHandler>
            {/* <Animated.View style={animatedBottomBarStyle}>
                <View style={styles.container}>
                    <TabIcon label="Home">
                        <Home stroke={'white'} />
                    </TabIcon>
                    <TabIcon label="Search">
                        <Search stroke={'white'} />
                    </TabIcon>
                    <TabIcon label="Library">
                        <Library stroke={'white'} />
                    </TabIcon>
                </View>
            </Animated.View> */}
        </>
    )
}