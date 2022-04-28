import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";
import ButtonCustom from "./Button";

export default function Item({ item, onPress }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{item.text}</Text>
      <ButtonCustom text={"Delete"} onPress={onPress} type="danger" />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.darkBrown,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});
