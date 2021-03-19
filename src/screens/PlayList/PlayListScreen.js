import React, { useLayoutEffect } from 'react'
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native'
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

    return (
        <SceneContainer forceInset={outerInset} style={containerStyle}>
            <View style={styles.container}>
                <Cover cover={album.cover} offsetY={offsetY} />
                <Content
                    artist={album.artist}
                    tracks={album.tracks}
                    offsetY={offsetY}
                    onScroll={onScroll}
                />

                <View style = {style.coupon}>
                    <TouchableOpacity onPress = {() => navigation.navigate("CouponScreen")}>
                        <Text style = {style.couponText}>
                            {"Coupons"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <BottomTab />
            </View>

        </SceneContainer>
    )
}

const style = StyleSheet.create({
    coupon:
    {
        backgroundColor: 'rgba(255,255,255, 1)', 
        justifyContent:'center', 
        alignSelf:'center', 
        position:'absolute', 
        bottom:180,
        width:'80%',
        padding:20,
        borderRadius: 5,
    },
    couponText:
    {
        color:'black',
        fontSize: 20,
        textAlign:'center'
    }
})

export default PlayListScreen