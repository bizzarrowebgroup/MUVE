import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as React from 'react';

import { Colors } from '../constants';

export default function TabBarIcon(props) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={30}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
