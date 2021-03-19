import TrackPlayer, { useTrackPlayerEvents } from "react-native-track-player";

//Dummy Data
import localTrack from '../../data/localTrack'
import playlistData from "../../data/playlist.json";

//Player config
export const setup = async () => {
  await TrackPlayer.setupPlayer({
    // iosCategoryOptions: [
    //   "allowBluetooth": false,
    //   "allowAirPlay": false
    // ],
    iosCategoryMode: "spokenAudio"
  });
  await TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities:
      [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP
      ],
    compactCapabilities:
      [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE
      ]
  });
}

//Add Songs or Playback existing songs
export const togglePlayback = async (playbackState) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();

  if (currentTrack == null) {
    await TrackPlayer.reset();
    await TrackPlayer.add(playlistData);
    await TrackPlayer.add(localTrack);
    await TrackPlayer.play();
  }
  else {
    if (playbackState === TrackPlayer.STATE_PAUSED) {
      await TrackPlayer.play();
    }
    else {
      await TrackPlayer.pause();
    }
  }
}

export const playNext = async () => {
  try {
    await TrackPlayer.skipToNext();
  }
  catch (error) {
    console.log("[AUDIO PLAYER]: ERROR =>", error)
  }
}

export const playPrevious = async () => {
  try {
    await TrackPlayer.skipToPrevious();
  }
  catch (error) {
    console.log("[AUDIO PLAYER]: ERROR =>", error)
  }
}

//Status of Song Playing
export const playStatus = (state) => {
  switch (state) {
    case TrackPlayer.STATE_NONE:
      return "None";
    case TrackPlayer.STATE_PLAYING:
      return "Playing";
    case TrackPlayer.STATE_PAUSED:
      return "Paused";
    case TrackPlayer.STATE_STOPPED:
      return "Stopped";
    case TrackPlayer.STATE_BUFFERING:
      return "Buffering";
  }
}

//When a track is changed
export const trackChanged = async (setTrackTitle, setTrackArtist, setTrackArtwork) => {
  return useTrackPlayerEvents(["playback-track-changed"], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, artist, artwork } = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });
}