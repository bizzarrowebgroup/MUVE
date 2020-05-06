import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, YellowBox } from 'react-native';

import SearchBar from '../components/SearchBar';
import HomeMusemsTopVisitedCards from '../components/HomeMusemsTopVisitedCards';
import HomeMusemsNews from '../components/HomeMusemsNews';
import Header from '../components/Header';
import Colors from '../constants/Colors';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
import * as Animatable from 'react-native-animatable';

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
      <SearchBar navigation={navigation}/>
      <Animatable.View ref={AnimationRef} easing="ease-out" useNativeDriver={true}>
        <HomeMusemsTopVisitedCards navigation={navigation} />
        <HomeMusemsNews />
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