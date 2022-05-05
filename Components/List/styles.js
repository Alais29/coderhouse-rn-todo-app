import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../Styles/colors";

const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  itemList: {
    width: "100%",
    height: screenHeight - 195,
    padding: 20,
    paddingTop: 30,
    backgroundColor: colors.secondary,
  },
  itemListEmpty: {
    paddingBottom: 0,
  },
  emptyList: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    position: "absolute",
    top: 0,
  },
  image: {
    width: screenHeight - 282,
    maxWidth: 300,
    height: screenHeight - 282,
    maxHeight: 300,
  },
});
