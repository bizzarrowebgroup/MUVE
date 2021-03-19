import * as React from 'react';

import { TabBarIcon } from '../components';

import HomeScreen from '../screens/HomeScreen';
import MuseiScreen from '../screens/MuseiScreen';
import LinksScreen from '../screens/LinksScreen';
import PlaylistScreen from '../screens/PlaylistScreen';

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
const BottomTab = createBottomTabNavigator();

import { Colors } from '../constants/';
import { isSmallDevice } from '../constants/Layout';
// import { BlurView } from "@react-native-community/blur";

const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        tabBarAdaptive: false,
        tabBarHideOnKeyboard: false,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingTop: isSmallDevice ? 0 : 20,
          paddingHorizontal: 50,
          // borderRadius: 20,
          // backgroundColor: 'transparent',
          backgroundColor: Colors.white,
          shadowColor: Colors.black,
          shadowOffset: {
            width: 0,
            height: 0
          },
          shadowOpacity: 0.58,
          shadowRadius: 36.00,
          elevation: 24,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        lazy: true,
        headerShown: false
      }}
      tabBar={(props) => (
        // <BlurView
        //   style={{
        //     position: 'absolute',
        //     bottom: 0,
        //     left: 0,
        //     right: 0,
        //     borderTopWidth: 0,
        //     borderRadius: 20,
        //     paddingTop: 20,
        //   }}
        //   blurType="dark"
        //   blurAmount={100}
        // >
        <BottomTabBar {...props} />
        // </BlurView>
      )}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'HomePage',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home-variant" />,
        }}
      />
      <BottomTab.Screen
        name="Musei"
        component={MuseiScreen}
        options={{
          title: 'Musei',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="menu" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={LinksScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="cog" />,
        }}
      />
      <BottomTab.Screen
        name="PlaylistScreen"
        component={PlaylistScreen}
        options={{
          title: 'PlaylistScreen',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="play-circle" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
// const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;