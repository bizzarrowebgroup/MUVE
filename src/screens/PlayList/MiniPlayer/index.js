import React from 'react'
import { Image, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
import Animated, {
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated'
import PlayIcon from '../../../assets/images/Play.svg'
import StopIcon from '../../../assets/images/Stop.svg'
import { GilroyBold, GilroyRegular } from '../../../components/StyledText'

import { MINIMIZED_PLAYER_HEIGHT, SNAP_BOTTOM } from '../utils'

const styles = StyleSheet.create({
    artistName: {
        color: 'white',
        fontWeight: '600',
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#272829',
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: "white",
    },
    image: {
        height: 65,
        width: 65,
    },
    imageContainer: {
        flex: 1,
    },
    playContainer: {
        alignItems: 'flex-end',
        flex: 1,
        paddingHorizontal: 20,
    },
    songInfoContainer: {
        flex: 3,
    },
    songName: {
        color: 'white',
    },
})

export const MiniPlayer = ({
    onPress = () => { },
    translateY = Animated.SharedValue(0),
    currentSong = {
        image: "https://media.izi.travel/ab5d2ab4-1a11-45bb-9470-550d170c59db/6a2b1271-003c-4845-a3d6-11746cab1543_800x600.jpg",
        album: "Album name",
        artist: "Artist name"
    },
    onTogglePlayback,
    middleButtonState,// Play / Pause
}) => {

    const animatedMinimizedPlayerStyle = useAnimatedStyle(() => ({
        height: MINIMIZED_PLAYER_HEIGHT,
        left: 0,
        opacity: interpolate(
            translateY.value,
            [SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT, SNAP_BOTTOM],
            [0, 1],
        ),
        position: 'absolute',
        right: 0,
        top: 0,
    }))

    return (
        <Animated.View style={animatedMinimizedPlayerStyle}>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: currentSong.image }} />
                    </View>
                    <View style={styles.songInfoContainer}>
                        <GilroyBold style={styles.songName}>{currentSong.album}</GilroyBold>
                        <GilroyRegular style={styles.artistName}>{currentSong.artist}</GilroyRegular>
                    </View>
                    <TouchableOpacity style={styles.playContainer} onPress={onTogglePlayback}>
                        {middleButtonState === "Play" && (<PlayIcon color={'white'} width={24} height={24} />)}
                        {middleButtonState === "Pause" && (<StopIcon color={'white'} width={24} height={24} />)}
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </Animated.View>
    )
}