import { View, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles";

const Checkbox = ({ onPress, checked }) => {
  const checkmarkStyles = [styles.checkMark];
  const checkContainerStyles = [styles.checkContainer];

  if (checked) {
    checkmarkStyles.push(styles.checkMarkChecked);
    checkContainerStyles.push(styles.checkContainerChecked);
  }

  return (
    <TouchableOpacity onPress={onPress} style={checkContainerStyles}>
      <View style={checkmarkStyles}></View>
    </TouchableOpacity>
  );
};

export default Checkbox;
