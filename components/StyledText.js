import * as React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
export function GilroyRegular(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'gilroy-regular' }]} />;
}
export function GilroyBold(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'gilroy-bold' }]} />;
}
export function GTSuper(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'gt-super-medium' }]} />;
}
