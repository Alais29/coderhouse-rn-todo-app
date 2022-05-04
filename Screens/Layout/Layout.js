import React, { useState } from "react";
import { Image, View, TextInput, FlatList, Text } from "react-native";
import Item from "../../Components/Item/Item";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomModal from "../../Components/CustomModal/Modal";
import happy from "../../assets/happy.png";

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

  const handleDone = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    itemToEdit.done = !itemToEdit.done;
    setItems([...items]);
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.divider}></View>
      <View
        style={[styles.itemList, items.length === 0 && styles.itemListEmpty]}
      >
        {items.length !== 0 ? (
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <Item
                item={item}
                openModal={handleShowModal}
                handleDone={handleDone}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={styles.emptyList}>
            <Text style={styles.text}>No tasks to do!</Text>
            <Image source={happy} style={styles.image} />
          </View>
        )}
      </View>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </View>
  );
};

export default Layout;
