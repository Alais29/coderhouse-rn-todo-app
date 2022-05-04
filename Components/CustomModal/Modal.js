import { Text, TextInput, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { styles } from "./styles";
import { colors } from "../../Styles/colors";

const CustomModal = ({
  modalVisible,
  setModalVisible,
  itemSelected,
  handleDelete,
  handleEdit,
}) => {
  const lines = Math.ceil(itemSelected.text?.length / 19);
  const numberOfLines = lines > 4 ? 4 : lines;

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
            <View style={styles.modalClose}>
              <CustomButton
                text="X"
                onPress={() => setModalVisible(!modalVisible)}
                type="warning"
                style={{
                  paddingHorizontal: 9,
                  paddingVertical: 2,
                  borderRadius: 50,
                }}
                textStyle={{
                  color: colors.dark,
                }}
              />
            </View>
            <View style={styles.modalmessage}>
              <Text style={styles.modalmessageText}>Edit your task here:</Text>
            </View>
            <View style={styles.modalmessage}>
              <TextInput
                style={styles.modalItem}
                onChangeText={handleEdit}
                value={itemSelected.text}
                multiline={itemSelected.text?.length > 19 ? true : false}
                numberOfLines={numberOfLines}
              />
            </View>
            <View style={[styles.modalmessage, styles.noMarginBottom]}>
              <Text style={styles.modalmessageText}>
                Or tap here to delete it:
              </Text>
              <View style={styles.modalButton}>
                <CustomButton
                  text="Delete"
                  type="danger"
                  onPress={handleDelete}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
