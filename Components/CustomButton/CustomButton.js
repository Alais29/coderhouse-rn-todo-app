import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

const CustomButton = ({ text, onPress, type = "" }) => {
  const buttonStyles = [styles.button];
  if (type) {
    buttonStyles.push(styles[type]);
  }
  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
