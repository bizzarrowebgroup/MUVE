import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { window } from '../constants/Layout';
import Colors from '../constants/Colors';
import { GTSuper, GilroyBold, GilroyRegular } from '../components/StyledText';
import Button from '../components/Button';
import Icon from '../components/Icon';

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.purewhite,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: 500,
    },
    content: {
        marginHorizontal: 40,
        marginVertical: 40
    },
    button: {
        backgroundColor: Colors.black,
        marginVertical: 20,
        width: 155,
        flexDirection: "row",
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: "space-evenly"
    }
})

const LoginScreen = ({
    params,
    navigation
}) => {
    const onPressed = () => {
        navigation.navigate("Root")
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={["#316c60", "#316c60", "#5b8f85", "#316c60", "#316c60"]}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: window.height,
                    zIndex: -1
                }}
            />
            <View style={styles.container}>
                <View style={styles.content}>
                    <GTSuper style={{ fontSize: 38 }}>Entra in MUVE</GTSuper>
                    <View style={{ marginTop: 20, flexDirection: "row", alignContent: "center", alignItems: 'center', justifyContent: 'space-between', }}>
                        <Button style={styles.button}>
                            <Icon name="apple" color={Colors.purewhite} size={27}/>
                            <GilroyBold style={{ color: Colors.purewhite, top: 3 }}>Apple</GilroyBold>
                        </Button>
                        <Button style={styles.button}>
                            <Icon name="google" color={Colors.purewhite} size={25}/>
                            <GilroyBold style={{ color: Colors.purewhite, top: 3 }}>Google</GilroyBold>
                        </Button>
                    </View>
                    <Button style={{ backgroundColor: Colors.rose }} onPress={onPressed}>
                        <GilroyRegular style={{ fontSize: 22 }}>Accedi</GilroyRegular>
                    </Button>
                    <GilroyBold style={{ alignSelf: 'center', marginVertical: 10 }}>oppure</GilroyBold>
                    <Button style={{ marginBottom: 20 }} onPress={onPressed}>
                        <GilroyRegular style={{ fontSize: 22 }}>Crea un nuovo account</GilroyRegular>
                    </Button>
                    <GilroyRegular style={{ marginHorizontal: 40, color: Colors.secondwhite, textAlign: "center" }}>Continuando, accetti ai nostri <GilroyRegular style={{ color: Colors.grey }}>Termini del Servizo e Privacy Policy</GilroyRegular></GilroyRegular>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default LoginScreen;
