import { Dimensions, Platform } from 'react-native'
export function isIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 780 || dimen.width === 780)
            || (dimen.height === 812 || dimen.width === 812)
            || (dimen.height === 844 || dimen.width === 844)
            || (dimen.height === 896 || dimen.width === 896)
            || (dimen.height === 926 || dimen.width === 926))
    );
}

export function getStatusBarHeight(safe) {
    return Platform.select({
        ios: ifIphoneX(safe ? 44 : 30, 20),
        android: StatusBar.currentHeight,
        default: 0
    });
}

export function getBottomSpace() {
    return isIphoneX() ? 34 : 0;
}

const { height } = Dimensions.get('window')
const φ = (1 + Math.sqrt(5)) / 2

export const MIN_HEADER_HEIGHT = 90
export const MAX_HEADER_HEIGHT = height * (1 - 1 / φ)
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT

export const TABBAR_HEIGHT = getBottomSpace() + 40
export const MINIMIZED_PLAYER_HEIGHT = getBottomSpace() + 40
export const SNAP_TOP = 0
export const SNAP_BOTTOM = height - TABBAR_HEIGHT - MINIMIZED_PLAYER_HEIGHT