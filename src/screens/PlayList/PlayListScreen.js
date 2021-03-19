import React, { useLayoutEffect, useEffect } from 'react'
import { View, Text } from 'react-native'
import {
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated'

import { SceneContainer } from '../../components'

import { album } from './album'
import { BottomTab } from './BottomTab/BottomTab'
import { Content } from './Content'
import { Cover } from './Cover'
import { Header } from './Header'
import { useSetContainerStyle } from './hooks/useSetContainerStyle'
import { outerInset } from './sceneConfig'
import { styles } from './styles'

//Audio Player
import { usePlaybackState } from "react-native-track-player";
import { setup, togglePlayback, playNext, playPrevious, playStatus } from "../../components/AudioPlayer/PlayerConfig";

const PlayListScreen = ({ navigation }) => {
    const { containerStyle } = useSetContainerStyle()

    const offsetY = useSharedValue(0)

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => <Header artist={album.artist} offsetY={offsetY} />,
        })
    }, [navigation, offsetY])

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            offsetY.value = event.contentOffset.y
        },
    })

    const playbackState = usePlaybackState();
    useEffect(() => {
        setup();
    }, []);

    return (
        <SceneContainer forceInset={outerInset} style={containerStyle}>
            <View style={styles.container}>
                <Cover cover={album.cover} offsetY={offsetY} />
                <Content
                    artist={album.artist}
                    tracks={album.tracks}
                    offsetY={offsetY}
                    onScroll={onScroll}
                    onTogglePlayback={(track) => togglePlayback(playbackState, track)}
                />
                {/* <View style={{ position: "absolute", bottom: 100 }}>
                    <Text style={{ color: "white" }}>Audio Status: {playStatus(playbackState)}</Text>
                </View> */}
                <BottomTab
                    onNext={playNext}
                    onPrevious={playPrevious}
                    onTogglePlayback={() => togglePlayback(playbackState, album.tracks)}
                />
            </View>
        </SceneContainer>
    )
}

export default PlayListScreen