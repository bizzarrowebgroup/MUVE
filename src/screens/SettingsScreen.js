import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OptionsButton } from '../components';
import { GilroyBold, GilroyRegular } from '../components/StyledText';
import { Colors } from '../constants';

const SettingsScreen = ({
  navigation
}) => {
  const onPressLogOut = () => {
    navigation.navigate('Login')
  };
  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, { backgroundColor: Colors.purewhite, height: 100, flexDirection: "column", alignItems: "center", alignContent: "center", justifyContent: "center" }]}>
        <GilroyBold style={{ color: Colors.green }}>Impostazioni</GilroyBold>
      </View>
      <OptionsButton
        icon="ios-time"
        label="I miei biglietti"
        iconColor={Colors.rose}
      />
      <OptionsButton
        icon="ios-bookmarks"
        label="Segnalibri"
        iconColor={Colors.rose}
      />
      <OptionsButton
        icon="ios-key"
        label="Metodi di pagamento"
        iconColor={Colors.green}
      />
      <OptionsButton
        icon="ios-folder-open"
        label="Cronologia delle transazioni"
        iconColor={Colors.green}
      />
      <OptionsButton
        icon="ios-nuclear"
        label="Sicurezza"
      />
      <OptionsButton
        icon="ios-information-circle"
        label="Help Center"
      />
      <TouchableOpacity onPress={onPressLogOut} style={{ marginHorizontal: 40, marginTop: 100 }}>
        <GilroyRegular style={{ fontSize: 15, textDecorationLine: "underline" }}>Esci</GilroyRegular>
      </TouchableOpacity>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purewhite,
  },
  contentContainer: {
    paddingTop: 55,
  },
});
