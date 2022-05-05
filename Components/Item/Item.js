import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { format } from "date-fns";
import DotsMenu from "../DotsMenu/DotsMenu";
import Checkbox from "../Checkbox/Checkbox";

import { styles } from "./styles";

export default function Item({ item, openModal, handleDone }) {
  const textStyles = [styles.text];

  if (item.done) {
    textStyles.push(styles.done);
  }

  var formattedDate = format(new Date(item.id), "MM/dd/yyyy, h:mma");

  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Checkbox onPress={() => handleDone(item.id)} checked={item.done} />
        <Text style={textStyles}>{item.text}</Text>
      </View>
      <View style={styles.dateContainer}>
        <DotsMenu onPress={() => openModal(item.id)} />
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
  );
}
