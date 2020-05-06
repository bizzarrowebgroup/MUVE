import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { GilroyBold, GilroyRegular } from '../components/StyledText';
import Icon from '../components/Icon'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    image: {
        height: 126,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20,
        resizeMode: "cover"
    },
    card: {
        marginHorizontal: 17,
        flex: 1,
    },
    cardContainer: {
        height: 254,
        marginHorizontal: 20,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: Colors.purewhite
    },
})
const Card = ({
    params,
    isMap,
    colore,
}) => {
    const navigation = useNavigation();
    const { titolo, indirizzo, mainimage } = params;
    let cardContainer = styles.cardContainer;
    let imageContainer = styles.image;
    if (colore) {
        // used to test the borders into the card or image but it's fucking disgusting.. tbt
        // cardContainer = [styles.cardContainer, { borderWidth: 0.6, borderColor: colore }]
        // imageContainer = [styles.image, { borderWidth: 0.8, borderColor: colore }]
    }
    const handlePress = () => {
        navigation.navigate('Modal', { params }, true);
    }
    return (
        <TouchableOpacity onPress={handlePress} style={[cardContainer, isMap ? { width: 300 } : {}]}>
            <View style={styles.card}>
                <Image source={{ uri: mainimage }} style={imageContainer} />
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", alignContent: "flex-start", alignItems: "flex-start" }}>
                    <GilroyBold style={{ fontSize: 16, color: colore }}>{titolo}</GilroyBold>
                    <View style={{ flexDirection: "row", maxWidth: 200, alignContent: "center", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                        <Icon name="location-pin" size={20} color={Colors.black} type="entypo" />
                        <GilroyRegular style={{ marginLeft: 5, fontSize: 13, color: Colors.black }}>{indirizzo}</GilroyRegular>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default Card;
