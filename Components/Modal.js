import { StyleSheet, Text, View, Pressable, Modal, Button } from "react-native";
import React from "react";
import ButtonCustom from "./../Components/Button";

const CustomModal = ({
  modalVisible,
  setModalVisible,
  itemSelected,
  handleDelete,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalmessage}>
              <Text>¿Estás seguro que deseas eliminar el siguiente item?</Text>
            </View>
            <View style={styles.modalmessage}>
              <Text style={styles.modalItem}>{itemSelected.text}</Text>
            </View>
            <View style={styles.modalButton}>
              <ButtonCustom
                text="Confirmar"
                type="danger"
                onPress={handleDelete.bind(this, itemSelected.id)}
              />
              <ButtonCustom
                text="Cancelar"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalmessage: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  modalButton: {
    marginTop: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalItem: {
    fontSize: 30,
  },
});
