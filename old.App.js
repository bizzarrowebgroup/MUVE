import React, { useEffect, useState, useRef } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

// import { MaterialCommunityIcons, Entypo, SimpleLineIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Colors } from './constants';
import { MusemModal } from './components';

import { BottomTabNavigator, useLinking } from './navigation';

import MuseiMapScreen from './screens/MuseiMapScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();
const IS_PROD = false;

const App = ({ }) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();
  const containerRef = useRef();
  const { getInitialState } = useLinking(containerRef);

  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  const loadResourcesAndDataAsync = async () => {
    try {
      // SplashScreen.preventAutoHide();
      setInitialNavigationState(await getInitialState());
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
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator initialRouteName="Welcome">
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
        {IS_PROD && <Text style={{ fontSize: 8, left: 20, bottom: 15, fontWeight: "700", position: "absolute" }}>made with<Text style={{ fontSize: 10, }}> ❤ </Text>by bwg</Text>}
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

export default App