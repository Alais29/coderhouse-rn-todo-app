import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

const ButtonCustom = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.darkBrown,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    color: colors.gray,
  },
});
