import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
export default function Icon(props) {
  if (props.type) {
    switch (props.type) {
      case 'entypo':
        return (
          <Entypo
            name={props.name}
            size={props.size || 30}
            color={props.color}
            style={props.style}
          />
        )
      case 'SimpleLineIcons':
        return (
          <SimpleLineIcons
            name={props.name}
            size={props.size || 30}
            color={props.color}
            style={props.style}
          />
        )
    }
  }
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={props.size || 30}
      color={props.color}
      style={props.style}
    />
  );
}