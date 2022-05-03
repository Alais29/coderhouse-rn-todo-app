import { Text, TextInput, View, Modal } from "react-native";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { styles } from "./styles";

const CustomModal = ({
  modalVisible,
  setModalVisible,
  itemSelected,
  handleDelete,
  handleEdit,
  handleDone,
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
              <Text>Edita el item, elimínalo o márcalo como listo</Text>
            </View>
            <View style={styles.modalmessage}>
              <TextInput
                style={styles.modalItem}
                onChangeText={handleEdit}
                value={itemSelected.text}
              />
            </View>
            <View style={styles.modalButton}>
              <CustomButton
                text="Borrar"
                type="danger"
                onPress={handleDelete}
              />
              <CustomButton
                text={itemSelected.done ? "Pendiente" : "Lista"}
                type="success"
                onPress={handleDone}
              />
              <CustomButton
                text="Cerrar"
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
