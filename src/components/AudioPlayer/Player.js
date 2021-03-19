import React, { useState } from "react";
import { Image, StyleSheet, Text, View, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";

import TrackPlayer, { usePlaybackState } from "react-native-track-player";
import { trackChanged } from "./PlayerConfig";

//Components
import ControlButton from "./ControlButton";
import ProgressBar from "./ProgressBar";


const Player = (props) => {
  const { style, onNext, onPrevious, onTogglePlayback } = props;

  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState("");
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState("");

  trackChanged(setTrackTitle, setTrackArtist, setTrackArtwork)

  let middleButtonText = "Play";
  if (playbackState === TrackPlayer.STATE_PLAYING || playbackState === TrackPlayer.STATE_BUFFERING) {
    middleButtonText = "Pause";
  }

  return (
    <View style={[styles.card, style]}>
      <Image style={styles.cover} source={{ uri: trackArtwork }} />
      <ProgressBar />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <ControlButton title={"Previous"} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title="Next" onPress={onNext} />
      </View>
    </View>
  );
}

Player.propTypes =
{
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    borderRadius: 4,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 1,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 }
  },
  cover: {
    width: '100%',
    height: 240,
    borderRadius: 4,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
  artist: {
    fontWeight: "bold",
    fontSize: 20,
  },
  controls: {
    marginVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: "row",
    width: '100%'
  },
});

export default Player;