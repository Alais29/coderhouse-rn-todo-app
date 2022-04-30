import { Text, View, Modal } from "react-native";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { styles } from "./styles";

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
              <CustomButton
                text="Confirmar"
                type="danger"
                onPress={handleDelete.bind(this, itemSelected.id)}
              />
              <CustomButton
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
