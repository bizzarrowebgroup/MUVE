import React from 'react'
import {
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import ChevronDown from '../../../assets/images/ChevronDown.svg'
import MoreIcon from '../../../assets/images/More.svg'
import RepeatIcon from '../../../assets/images/Repeat.svg'
import ShuffleIcon from '../../../assets/images/Shuffle.svg'
import StepBackwardIcon from '../../../assets/images/StepBackwards.svg'
import StepForwardIcon from '../../../assets/images/StepForward.svg'
import { Icon } from '../../../components'
import { GilroyRegular } from '../../../components/StyledText'
const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    artist: {
        color: 'white',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    container: {
        margin: 16,
    },
    controls: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    cover: {
        height: width - 32,
        marginVertical: 36,
        width: width - 32,
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    metadata: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    root: {
        flex: 1,
    },
    slider: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 2,
        height: 4,
        marginVertical: 16,
        width: width - 32,
    },
    song: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },
    title: {
        color: 'white',
        padding: 16,
    },
})
const Player = ({
    onPress,
    onTogglePlayback,
    middleButtonState,
    currentSong = {
        image: "https://media.izi.travel/ab5d2ab4-1a11-45bb-9470-550d170c59db/6a2b1271-003c-4845-a3d6-11746cab1543_800x600.jpg",
        album: "Album name",
        artist: "Artist name"
    },
    onPrevious,
    onNext
}) => {
    const examplePress = () => console.log("pressed")
    return (
        <SafeAreaView style={styles.root}>
            <LinearGradient
                colors={['#2B5058', '#051c30']}
                style={StyleSheet.absoluteFill}
            />
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPress}
                        hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}>
                        <ChevronDown />
                    </TouchableOpacity>
                    <GilroyRegular style={styles.title}>{currentSong.artist}</GilroyRegular>
                    <TouchableOpacity style={styles.button}>
                        <MoreIcon />
                    </TouchableOpacity>
                </View>
                <Image source={{ uri: currentSong.image }} style={styles.cover} />
                <View style={styles.metadata}>
                    <View>
                        <GilroyRegular style={styles.song}>{currentSong.album}</GilroyRegular>
                        <GilroyRegular style={styles.artist}>{currentSong.artist}</GilroyRegular>
                    </View>
                </View>
                <View style={styles.slider} />
                <View style={styles.controls}>
                    {/* <TouchableOpacity onPress={examplePress}>
                        <ShuffleIcon />
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={onPrevious}>
                        <StepBackwardIcon />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onTogglePlayback} style={{}}>
                        {middleButtonState === "Play" && (<Icon name="controller-play" type="entypo" color="white" size={40} />)}
                        {middleButtonState === "Pause" && (<Icon name="controller-stop" type="entypo" color="white" size={40} />)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onNext}>
                        <StepForwardIcon />
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={examplePress}>
                        <RepeatIcon />
                    </TouchableOpacity> */}
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Player