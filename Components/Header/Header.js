import { Text, View, TextInput } from "react-native";
import CustomButton from "../CustomButton/CustomButton";
import React, { useState } from "react";

import { styles } from "./styles";

const Header = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    addTodo(input, () => setInput(""));
  };

  return (
    <View style={styles.topContainer}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.subtitle}>Add your tasks here</Text>
      <View style={styles.addTask}>
        <TextInput
          style={styles.input}
          placeholder="Write a task..."
          onChangeText={setInput}
          value={input}
        />
        <CustomButton
          text="Add"
          onPress={handleAddTodo}
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderLeftWidth: 0,
            height: 40,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
