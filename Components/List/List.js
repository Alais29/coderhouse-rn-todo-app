import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import Item from "../Item/Item";
import happy from "../../assets/happy.png";

import { styles } from "./styles";

const List = ({ items, handleShowModal, handleDone }) => {
  return (
    <View style={[styles.itemList, items.length === 0 && styles.itemListEmpty]}>
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
  );
};

export default List;
