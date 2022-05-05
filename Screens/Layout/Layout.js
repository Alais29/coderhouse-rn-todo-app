import React, { useState } from "react";
import { View } from "react-native";
import Header from "../../Components/Header/Header";
import CustomModal from "../../Components/CustomModal/Modal";

import { styles } from "./styles";
import List from "../../Components/List/List";

const Layout = () => {
  const [items, setItems] = useState([]);
  const [itemSelected, setItemselected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const addTodo = (value, callback) => {
    if (value !== "") {
      setItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), text: value, done: false },
      ]);
      callback();
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
      <Header addTodo={addTodo} />
      <View style={styles.divider}></View>
      <List
        items={items}
        handleShowModal={handleShowModal}
        handleDone={handleDone}
      />
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
