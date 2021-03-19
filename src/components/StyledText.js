import * as React from 'react';
import { Platform, Text } from 'react-native';

import {
  // widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  // listenOrientationChange as lor,
  // removeOrientationListener as rol
} from 'react-native-responsive-screen';

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
export function GilroyRegular(props) {
  if (props.variant === "small") {
    return <Text {...props} style={[props.style, { fontSize: hp(1.3), fontFamily: 'Gilroy-Regular' }]} />;
  } else if (props.variant === "normal") {
    return <Text {...props} style={[props.style, { fontSize: hp(1.5), fontFamily: 'Gilroy-Regular' }]} />;
  }
  return <Text {...props} style={[props.style, { fontSize: hp(2), fontFamily: 'Gilroy-Regular' }]} />;
}
export function GilroyBold(props) {
  if (props.variant === "small") {
    return <Text {...props} style={[props.style, { fontSize: hp(1.3), fontFamily: 'Gilroy-Bold' }]} />;
  }
  return <Text {...props} style={[props.style, { fontSize: hp(2), fontFamily: 'Gilroy-Bold' }]} />;
}
export function GTSuper(props) {
  fontFamily = Platform.OS === "android" ? 'GT-Super-Display-Medium' : 'GTSuperDisplay-Medium'
  return <Text {...props} style={[props.style, { fontSize: hp(3), fontFamily }]} />;
}
