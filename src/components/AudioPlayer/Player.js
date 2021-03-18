import React, { useState } from "react";
import { Image, StyleSheet, Text, View, ViewPropTypes} from "react-native";
import PropTypes from "prop-types";

import TrackPlayer, { usePlaybackState, useTrackPlayerEvents } from "react-native-track-player";

//Components
import ControlButton from "./ControlButton";
import ProgressBar from "./ProgressBar";



const Player = (props) =>
{
  
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState("");
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState("");
  useTrackPlayerEvents(["playback-track-changed"], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, artist, artwork } = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  const { style, onNext, onPrevious, onTogglePlayback } = props;

  var middleButtonText = "Play";

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = "Pause";
  }

  return (
    <View style={[styles.card, style]}>
      <Image style={styles.cover} source={{ uri: trackArtwork }} />
      <ProgressBar />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <ControlButton title={"<<"} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title={">>"} onPress={onNext} />
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

Player.defaultProps = 
{
  style: {}
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: "center",
    shadowColor: "black",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 1 }
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: "grey"
  },
  title: {
    marginTop: 10
  },
  artist: {
    fontWeight: "bold"
  },
  controls: {
    marginVertical: 20,
    flexDirection: "row"
  },
});

export default Player;