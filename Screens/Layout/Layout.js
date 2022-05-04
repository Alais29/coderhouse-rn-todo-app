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
    setItems([...items]);
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
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.subtitle}>Add your tasks here!</Text>
        <View style={styles.addTask}>
          <TextInput
            style={styles.input}
            placeholder="Write a task..."
            onChangeText={setInput}
            value={input}
            onKeyPress={handleEnterPress}
          />
          <CustomButton
            text="Add"
            onPress={addTodo}
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderLeftWidth: 0,
              height: 40,
            }}
          />
        </View>
      </View>
      <View style={styles.itemList}>
        {items.length !== 0 ? (
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <Item item={item} openModal={handleShowModal} />
            )}
            keyExtractor={(item) => item.id}
            numColumns={3}
          />
        ) : (
          <Text style={styles.text}>No tasks yet</Text>
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
