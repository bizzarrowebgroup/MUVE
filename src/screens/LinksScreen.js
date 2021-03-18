// import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { GilroyBold, GilroyRegular } from '../components/StyledText';
import Colors from '../constants/Colors';
import Icon from '../components/Icon';

// import * as WebBrowser from 'expo-web-browser';
//WebBrowser.openBrowserAsync('https://docs.expo.io')
const OptionButton = ({ icon, label, onPress, iconColor }) => {
  return (
    <RectButton style={[styles.option]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignContent: "center", alignItems: "center", justifyContent: "flex-start" }}>
        <View style={styles.optionIconContainer}>
          <Ionicons style={{ alignSelf: 'center' }} name={icon} size={25} color={iconColor ? iconColor : "rgba(0,0,0,0.35)"} />
        </View>
        <View style={styles.optionTextContainer}>
          <GilroyRegular style={styles.optionText}>{label}</GilroyRegular>
        </View>
        <View style={{ position: "absolute", right: 5 }}>
          <Icon type="SimpleLineIcons" name={"arrow-right"} size={20} color={"black"} />
        </View>
      </View>
    </RectButton>
  )
};

const LinksScreen = ({
  navigation
}) => {
  const onPressLogOut = () => {
    navigation.navigate('Login')
  };
  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, { backgroundColor: Colors.purewhite, height: 100, flexDirection: "column", alignItems: "center", alignContent: "center", justifyContent: "center" }]}>
        <GilroyBold style={{ color: Colors.green, fontSize: 19 }}>Impostazioni</GilroyBold>
        {/* <Text>Modifica</Text> */}
        {/* <Text>Nome persona loggata</Text> */}
      </View>
      <OptionButton
        icon="ios-time"
        label="I miei biglietti"
        // onPress={() => }
        iconColor={Colors.rose}
      />
      <OptionButton
        icon="ios-bookmarks"
        label="Segnalibri"
        iconColor={Colors.rose}
      />
      <OptionButton
        icon="ios-key"
        label="Metodi di pagamento"
        iconColor={Colors.green}
      />
      <OptionButton
        icon="ios-folder-open"
        label="Cronologia delle transazioni"
        iconColor={Colors.green}
      />
      <OptionButton
        icon="ios-nuclear"
        label="Sicurezza"
      />
      <OptionButton
        icon="ios-information-circle"
        label="Help Center"
      />
      <TouchableOpacity onPress={onPressLogOut} style={{ marginHorizontal: 40, marginTop: 100 }}>
        <GilroyRegular style={{ fontSize: 15, textDecorationLine: "underline" }}>Esci</GilroyRegular>
      </TouchableOpacity>
    </View>
  );
}

export default LinksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purewhite,
  },
  contentContainer: {
    paddingTop: 55,
  },
  optionIconContainer: {
    marginRight: 15,
    backgroundColor: Colors.secondwhite,
    borderRadius: 10,
    width: 50,
    height: 50,
    justifyContent: "center"
  },
  option: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 18.5,
    letterSpacing: 0.4,
    alignSelf: 'flex-start',
    color: Colors.black
  },
});
