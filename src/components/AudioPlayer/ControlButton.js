import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";




const ControlButton = ({ 
    title = "", 
    onPress = () => {} 
}) =>
{
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

ControlButton.propTypes = 
{
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    controlButtonContainer: 
    {
        flex: 1
    },
    controlButtonText: 
    {
        fontSize: 18,
        textAlign: "center"
    }
});

export default ControlButton;