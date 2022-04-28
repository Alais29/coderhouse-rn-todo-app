import React, { useState } from "react";
import { StyleSheet, View, TextInput, FlatList, Text } from "react-native";
import { colors } from "../Styles/colors";
import Item from "../Components/Item";
import ButtonCustom from "../Components/Button";
import CustomModal from "../Components/Modal";

const Layout = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [itemSelected, setItemselected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const addTodo = () => {
    if (input !== "") {
      setItems((prevItems) => [...prevItems, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setItemselected({});
    setModalVisible(!modalVisible);
  };

  const handleShowModal = (id) => {
    setItemselected(items.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

  const handleEnterPress = (e) => {
    if (e.nativeEvent.key == "Enter") {
      addTodo();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add todo"
          onChangeText={setInput}
          value={input}
          onKeyPress={handleEnterPress}
        />
        <ButtonCustom text="Add todo" onPress={addTodo} />
      </View>
      <View style={styles.itemList}>
        {items.length !== 0 ? (
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <Item item={item} onPress={handleShowModal.bind(this, item.id)} />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.text}>No hay tareas</Text>
        )}
      </View>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
        handleDelete={handleDelete}
      />
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
  text: {
    textAlign: "center",
  },
});
