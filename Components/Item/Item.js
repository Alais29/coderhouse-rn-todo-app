import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Item({ item, openModal }) {
  const textStyles = [styles.text];

  if (item.done) {
    textStyles.push(styles.done);
  }

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => openModal(item.id)}>
        <Text style={textStyles}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
