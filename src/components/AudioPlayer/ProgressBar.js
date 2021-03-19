import React from "react";
import { StyleSheet, View, Text} from "react-native";

import { useTrackPlayerProgress } from "react-native-track-player";

import {formatTime} from '../../utils/helpers'

const ProgressBar = () => 
{
  const progress = useTrackPlayerProgress();

  return (
    <>
    <View style={styles.progress}>
      <View style={{ flex: progress.position, backgroundColor: "orange" }} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: "grey"
        }}
      />
    </View>
    <View style = {styles.duration}>
      <Text>{formatTime(progress.position)}</Text>
      <Text>{formatTime(progress.duration)}</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    progress: {
      height: 3,
      width: "90%",
      marginTop: 10,
      flexDirection: "row"
    },
    duration:
    {
      flexDirection:'row',
      width:'90%',
      justifyContent: 'space-between',
      marginTop:5
    }
  });

export default ProgressBar;