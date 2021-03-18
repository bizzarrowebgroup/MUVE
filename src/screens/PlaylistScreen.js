import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

//Audio Player
import { usePlaybackState } from "react-native-track-player";
import { setup, togglePlayback, playNext, playPrevious, playStatus } from "../components/AudioPlayer/PlayerConfig";
import Player from "../components/AudioPlayer/Player";




const PlaylistScreen = () =>
{
  const playbackState = usePlaybackState();

  useEffect(() => 
  {
    setup();
  }, []);

  


  return (
    <View style={styles.container}>
      
      <Player
        onNext={playNext}
        style={styles.player}
        onPrevious={playPrevious}
        onTogglePlayback={() => togglePlayback(playbackState)}
      />

      <Text style={styles.state}>Audio Status: {playStatus(playbackState)}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "#F5FCFF"
  },
  player: 
  {
    marginTop: 40,
    elevation: 6,
    shadowOpacity: 0.5,
    shadowColor: "grey",
    shadowOffset: {width: 0, height: 2}
  },
  state: 
  {
    marginTop: 20
  }
});


export default PlaylistScreen;