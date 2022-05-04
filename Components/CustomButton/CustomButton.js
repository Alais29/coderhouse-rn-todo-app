import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

const CustomButton = ({
  text,
  onPress,
  type = "",
  style = {},
  textStyle = {},
}) => {
  const buttonStyles = [styles.button];
  if (type) {
    buttonStyles.push(styles[type]);
  }
  return (
    <TouchableOpacity style={[...buttonStyles, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
