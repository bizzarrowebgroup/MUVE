import React, { useEffect, useRef } from 'react';
import { LogBox, ScrollView, StyleSheet } from 'react-native';

import { SearchBar, HomeMusemsTopVisitedCards, HomeMusemsNews, Header } from '../components';
import { Colors } from '../constants'
import * as Animatable from 'react-native-animatable';

LogBox.ignoreLogs(["VirtualizedLists"])

const HomeScreen = ({ navigation, route }) => {
  const AnimationRef = useRef(null);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      if (AnimationRef)
        AnimationRef.current?.fadeIn(1000);
      // .then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));;
      // Call any action
    });
    return unsubscribe;
    // Return the function to unsubscribe from the event so it gets removed on unmount
  }, [navigation]);

  return (<>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
      <SearchBar navigation={navigation} />
      <Animatable.View ref={AnimationRef} easing="ease-out" useNativeDriver={true}>
        <HomeMusemsTopVisitedCards navigation={navigation} />
        {/* <HomeMusemsNews /> */}
      </Animatable.View>
    </ScrollView>
    <Header route={route} title={"MUVE"} navigation={navigation} />
  </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 175,
    flex: 1,
    backgroundColor: Colors.secondwhite,
  },
});

export default HomeScreen;