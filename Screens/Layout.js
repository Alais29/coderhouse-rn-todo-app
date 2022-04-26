import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { colors } from "../Styles/colors";
import Item from "../Components/Item";
import ButtonCustom from "../Components/Button";

const Layout = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addTodo = () => {
    setItems((prevItems) => [
      ...prevItems,
      { id: prevItems.length + 1, text: input },
    ]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add todo"
          onChangeText={setInput}
          value={input}
        />
        <ButtonCustom text="Add todo" onPress={addTodo} />
      </View>
      {items.length !== 0 &&
        <View style={styles.itemList}>
          {items.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </View>
      }
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    justifyContent: "space-around",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    width: 200,
    marginRight: 10,
    paddingHorizontal: 8,
    fontSize: 18,
    height: 35,
    backgroundColor: colors.gray,
  },
  itemList: {
    backgroundColor: colors.brown,
    width: "95%",
    padding: 20,
  },
});
