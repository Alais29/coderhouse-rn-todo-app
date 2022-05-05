import { View, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles";

const DotsMenu = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.menuContainer}>
      <View style={styles.menudot}></View>
      <View style={styles.menudot}></View>
      <View style={styles.menudot}></View>
    </TouchableOpacity>
  );
};

export default DotsMenu;
