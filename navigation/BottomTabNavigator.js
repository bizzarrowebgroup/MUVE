import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import MuseiScreen from '../screens/MuseiScreen';
import LinksScreen from '../screens/LinksScreen';

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
const BottomTab = createBottomTabNavigator();

import { BlurView } from 'expo-blur';
import { View } from "react-native";

import Colors from '../constants/Colors';
import { isSmallDevice } from '../constants/Layout';

const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        showLabel: false,
        adaptive: true,
        keyboardHidesTabBar: false,
        tabStyle: {
          borderTopWidth: 0,
        },
        style: {
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
        lazy: true,
      }}
      tabBar={(props) => (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderTopWidth: 0,
            borderRadius: 20,
            paddingTop: 20,
          }}
          tint="light"
          intensity={100}
        >
          <BottomTabBar {...props} />
        </View>
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
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="settings" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
// const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;