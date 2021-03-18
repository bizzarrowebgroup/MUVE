import TrackPlayer from "react-native-track-player";

//Dummy Data
import localTrack from '../../data/localTrack'
import playlistData from "../../data/playlist.json";




export const setup = async () => 
{
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP
        ],
        compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE
        ]
    });
}

export const togglePlayback = async (playbackState) =>
{
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack == null) 
    {
      await TrackPlayer.reset();
      await TrackPlayer.add(playlistData);
      await TrackPlayer.add(localTrack);
      await TrackPlayer.play();
    } 
    else 
    {
      if (playbackState === TrackPlayer.STATE_PAUSED) 
      {
        await TrackPlayer.play();
      } 
      else 
      {
        await TrackPlayer.pause();
      }
    }
}

export const playNext = async() =>
{
    try 
    {
        await TrackPlayer.skipToNext();
    } 
    catch (error) 
    {
        console.log("[AUDIO PLAYER]: ERROR =>", error)
    }
}

export const playPrevious = async() =>
{
    try 
    {
        await TrackPlayer.skipToPrevious();
    } 
    catch (error) 
    {
        console.log("[AUDIO PLAYER]: ERROR =>", error)
    }
}

export const playStatus = (state) =>
{
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
