import React, { useState } from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import Item from "../../Components/Item/Item";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomModal from "../../Components/CustomModal/Modal";

import { styles } from "./styles";

const Layout = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [itemSelected, setItemselected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const addTodo = () => {
    if (input !== "") {
      setItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), text: input, done: false },
      ]);
      setInput("");
    }
  };

  const handleDelete = () => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemSelected.id)
    );
    setItemselected({});
    setModalVisible(!modalVisible);
  };

  const handleShowModal = (id) => {
    setItemselected(items.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

  const handleEdit = (newText) => {
    const itemToEdit = items.find((item) => item.id === itemSelected.id);
    itemToEdit.text = newText;
  };

  const handleDone = () => {
    const itemToEdit = items.find((item) => item.id === itemSelected.id);
    itemToEdit.done = !itemToEdit.done;
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
        <CustomButton text="Add todo" onPress={addTodo} />
      </View>
      <View style={styles.itemList}>
        {items.length !== 0 ? (
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <Item item={item} openModal={handleShowModal} />
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
        handleEdit={handleEdit}
        handleDone={handleDone}
      />
    </View>
  );
};

export default Layout;
