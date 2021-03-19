import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Icon = ({ type, name, size, color, style }) => {
  if (type) {
    switch (type) {
      case 'entypo':
        return (
          <Entypo
            name={name}
            size={size || 30}
            color={color}
            style={style}
          />
        )
      case 'SimpleLineIcons':
        return (
          <SimpleLineIcons
            name={name}
            size={size || 30}
            color={color}
            style={style}
          />
        )
    }
  }
  return (
    <MaterialCommunityIcons
      name={name}
      size={size || 30}
      color={color}
      style={style}
    />
  );
}
export default Icon