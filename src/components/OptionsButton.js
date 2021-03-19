import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from './Icon';
import { GilroyRegular } from './StyledText';
import { Colors } from '../constants';

const styles = StyleSheet.create({
    optionIconContainer: {
        marginRight: 15,
        backgroundColor: Colors.secondwhite,
        borderRadius: 10,
        width: 50,
        height: 50,
        justifyContent: "center"
    },
    option: {
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    optionText: {
        letterSpacing: 0.4,
        alignSelf: 'flex-start',
        color: Colors.black
    },
});

const OptionsButton = ({ icon, label, onPress, iconColor }) => {
    return (
        <RectButton style={[styles.option]} onPress={onPress}>
            <View style={{ flexDirection: 'row', alignContent: "center", alignItems: "center", justifyContent: "flex-start" }}>
                <View style={styles.optionIconContainer}>
                    <Ionicons style={{ alignSelf: 'center' }} name={icon} size={25} color={iconColor ? iconColor : "rgba(0,0,0,0.35)"} />
                </View>
                <View style={styles.optionTextContainer}>
                    <GilroyRegular variant="normal" style={styles.optionText}>{label}</GilroyRegular>
                </View>
                <View style={{ position: "absolute", right: 5 }}>
                    <Icon type="SimpleLineIcons" name={"arrow-right"} size={20} color={"black"} />
                </View>
            </View>
        </RectButton>
    )
};
export default OptionsButton