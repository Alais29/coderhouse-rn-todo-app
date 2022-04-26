import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

export default function Item({ item }) {
  console.log(item);
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.darkBrown,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});
