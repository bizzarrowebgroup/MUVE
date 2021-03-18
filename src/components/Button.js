import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.yellow,
        height: 70,
        borderRadius: 10
    }
})

const Button = ({
    style,
    children,
    onPress
}) => {
    return (
        <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
};

export default Button;
