import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Icon from 'react-native-vector-icons/Ionicons'


const ControlButton = ({ 
    title = "", 
    onPress = () => {} 
}) =>
{


  //Player Icons
  let playIcon
  switch (title) 
  {
    case "Previous":
      playIcon = <Icon name = "play-back" size = {30} color = "black"/>
      break;

    case "Next":
      playIcon = <Icon name = "play-forward" size = {30} color = "black"/>
      break;

    case "Play":
      playIcon = <Icon name = "play-circle-outline" size = {80} color = "black"/>
      break;

    case "Pause":
      playIcon = <Icon name = "pause-circle-outline" size = {80} color = "black"/>
      break;
  
    default:
      break;
  }


  return (
    <TouchableOpacity onPress={onPress}>
      {playIcon}
    </TouchableOpacity>
  );
}

ControlButton.propTypes = 
{
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};



export default ControlButton;