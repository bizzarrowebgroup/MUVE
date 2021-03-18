import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 5,
    },
    label: {
        color: 'white',
        fontSize: 12,
        marginTop: 6,
        textAlign: 'center',
    },
})

const TabIcon = ({ onPress = () => { }, label = "", children }) => {
    return (
        <RectButton {...{ onPress }} style={styles.container}>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                {children}
            </View>
            <Text style={styles.label}>{label}</Text>
        </RectButton>
    )
}
export default TabIcon