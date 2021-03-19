import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../constants';

const TabBarIcon = ({ name, focused = false }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={30}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

export default TabBarIcon
