import React from 'react'
import { StyleSheet, View } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "black"
    },
})
const SceneContainer = ({
    forceInset,
    style,
    children,
}) => {
    return (
        <View
            style={[styles.container, style]}
            forceInset={forceInset}
        >
            {children}
        </View>
    )
}
export default SceneContainer