import React, { useEffect, useState, useRef } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Colors } from './src/constants';
import { MusemModal } from './src/components';

import { BottomTabNavigator, useLinking } from './src/navigation';

import MuseiMapScreen from './src/screens/MuseiMapScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import { linking } from './src/navigation/useLinking';

const Stack = createStackNavigator();

const App = ({ }) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  const loadResourcesAndDataAsync = async () => {
    try {
      // SplashScreen.preventAutoHide();
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingComplete(true);
      // SplashScreen.hide();
    }
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <NavigationContainer
          ref={containerRef}
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
              ...TransitionPresets.ModalSlideFromBottomIOS,
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
              ...TransitionPresets.ModalPresentationIOS,
              headerShown: false
            }} />
            <Stack.Screen name="Modal" component={MusemModal} options={{
              ...TransitionPresets.ModalPresentationIOS,
              header: undefined,
              cardOverlayEnabled: true,
              gestureEnabled: true,
              headerStatusBarHeight: 0,
              headerShown: false
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
  },
});

export default App;