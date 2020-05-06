import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Icon from '../components/Icon';
import { BlurView } from 'expo-blur';
import { GTSuper } from '../components/StyledText';
// import { useRoute } from '@react-navigation/native';

const Header = ({
    navigation,
    title,
    route
}) => {
    const [isOnMusei, setisOnMusei] = useState(false)
    useEffect(() => {
        if (title === "MUVE") {
            setisOnMusei(true);
        } else {
            setisOnMusei(false);
        }
    });
    const navigate = () => {
        if (isOnMusei) {
            navigation.navigate('Musei');
        } else {
            navigation.navigate('Mappa'); // bring the user to the map section
        }
    }
    return (
        <BlurView intensity={100} tint="light" style={[styles.container]}>
            <GTSuper style={styles.headerText}>{title}</GTSuper>
            <TouchableOpacity onPress={navigate}>
                <Icon color={Colors.grey} type="SimpleLineIcons" name="map" size={30} style={{ bottom: 10, paddingRight: 20 }} />
            </TouchableOpacity>
        </BlurView>
    )
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 95,
        position: "absolute",
        left: 0,
        right: 0,
        // borderRadius: 20,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 37,
        color: Colors.green,
        marginLeft: 35,
        paddingBottom: 20
    },
});
export default Header;
