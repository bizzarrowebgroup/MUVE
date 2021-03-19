import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Image, Flatlist } from 'react-native';

const CouponScreen = (props) =>
{


const {navigation} = props

    return (
        <View style={styles.containerView}>
            <Text style={styles.text}>CouponScreen</Text>
        </View>
        );
};

const styles = StyleSheet.create({
    containerView:
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: 
    {
        fontSize: 30,
    },
});

export default CouponScreen;