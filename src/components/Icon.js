// import { MaterialCommunityIcons, Entypo, SimpleLineIcons } from '@expo/vector-icons';
import * as React from 'react';


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
  } else {
    return (
      <MaterialCommunityIcons
        name={props.name}
        size={props.size || 30}
        color={props.color}
        style={props.style}
      />
    );
  }
}