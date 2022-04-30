import { Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { styles } from "./styles";

export default function Item({ item, onDelete, onEdit }) {
  const [text, setText] = useState(item.text);
  const [textEdited, setTextEdited] = useState(false);

  const handleButton = () => {
    if (textEdited) {
      onEdit(item.id, text);
      setTextEdited(false);
    } else {
      onDelete(item.id);
    }
  };

  useEffect(() => {
    if (item.text !== text) setTextEdited(true);
    else setTextEdited(false);
  }, [text]);

  return (
    <View style={styles.itemContainer}>
      {/* <Text style={styles.text}>{item.text}</Text> */}
      <TextInput style={styles.text} value={text} onChangeText={setText} />
      <CustomButton
        text={textEdited ? "Edit" : "Delete"}
        onPress={() => handleButton()}
        type={textEdited ? "warning" : "danger"}
      />
    </View>
  );
}
