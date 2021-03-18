import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from './src/constants';
import { MainNavigator } from './src/navigation';

const App = ({ }) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  const loadResourcesAndDataAsync = async () => {
    try {
      // SplashScreen.preventAutoHide();
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingComplete(true);
      // SplashScreen.hide();
    }
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

export default App;