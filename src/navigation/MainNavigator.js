import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';


import MuseiMapScreen from '../screens/MuseiMapScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import OfflineScreen from '../screens/OfflineScreen';
import { linking } from './useLinking';
import { MusemModal } from '../components';
import NetInfo from "@react-native-community/netinfo";


const Stack = createStackNavigator();
const MainNavigator = () => {
    const navigationRef = useRef();

    useEffect(() => {
        unsubscribe()
        return () => unsubscribe()
    }, [])

    const unsubscribe = NetInfo.addEventListener(state => {
        // console.log("Connection type", state.type);
        // console.log("Is connected?", state.isConnected);
        if (state.type === 'none') {
            navigationRef.current?.navigate('Offline');
        }
        if (state.isConnected) {
            navigationRef.current?.navigate('Welcome');
        }
    });
    return (
        <NavigationContainer
            ref={navigationRef}
            linking={linking}
        >
            <Stack.Navigator
                initialRouteName="Welcome"
            >
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
                    headerShown: false,
                    gestureEnabled: false,
                }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{
                    ...TransitionPresets.ModalPresentationIOS,
                    header: undefined,
                    cardOverlayEnabled: true,
                    gestureEnabled: false,
                    headerStatusBarHeight: 0,
                    headerShown: false
                }} />
                <Stack.Screen name="Root" component={BottomTabNavigator} options={{
                    headerShown: false,
                    gestureEnabled: false,
                }} />
                <Stack.Screen name="Mappa" component={MuseiMapScreen} options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                    cardOverlayEnabled: true,
                    gestureEnabled: true,
                    headerStatusBarHeight: 0,
                    headerShown: false
                }} />
                <Stack.Screen name="Modal" component={MusemModal} options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                    cardOverlayEnabled: true,
                    gestureEnabled: true,
                    headerStatusBarHeight: 0,
                    headerShown: false
                }} />
                <Stack.Screen name="Offline" component={OfflineScreen} options={{
                    cardOverlayEnabled: true,
                    gestureEnabled: false,
                    headerStatusBarHeight: 0,
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MainNavigator