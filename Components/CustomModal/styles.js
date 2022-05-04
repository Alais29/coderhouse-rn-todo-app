import { StyleSheet } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.light2,
    borderRadius: 20,
    paddingTop: 35,
    paddingVertical: 35,
    paddingHorizontal: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "relative",
    width: "70%",
  },
  modalClose: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalClosetext: {
    fontFamily: "sans-serif",
    color: colors.light,
  },
  modalmessage: {
    marginBottom: 10,
    // width: 160,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  noMarginBottom: {
    marginBottom: 0,
  },
  modalmessageText: {
    fontSize: 16,
  },
  modalButton: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  modalItem: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: colors.light,
    borderColor: colors.dark,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    width: 200,
  },
});
