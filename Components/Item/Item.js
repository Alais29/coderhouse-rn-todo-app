import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Item({ item, openModal, handleDone }) {
  const textStyles = [styles.text];
  const checkmarkStyles = [styles.checkMark];
  const checkContainerStyles = [styles.checkContainer];

  if (item.done) {
    textStyles.push(styles.done);
    checkmarkStyles.push(styles.checkMarkChecked);
    checkContainerStyles.push(styles.checkContainerChecked);
  }

  const date = new Date(item.id).toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "short",
  });

  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={() => {
            handleDone(item.id);
          }}
          style={checkContainerStyles}
        >
          <View style={checkmarkStyles}></View>
        </TouchableOpacity>
        <Text style={textStyles}>{item.text}</Text>
      </View>
      <View style={styles.dateContainer}>
        <TouchableOpacity
          onPress={() => openModal(item.id)}
          style={styles.menuContainer}
        >
          <View style={styles.menudot}></View>
          <View style={styles.menudot}></View>
          <View style={styles.menudot}></View>
        </TouchableOpacity>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}
