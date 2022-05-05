import { StyleSheet } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  checkContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.success,
    marginRight: 10,
    position: "relative",
    top: 2,
  },
  checkContainerChecked: {
    backgroundColor: colors.success,
  },
  checkMark: {
    height: 10,
    width: 5,
    borderColor: colors.light,
    transform: [{ rotate: "45deg" }],
  },
  checkMarkChecked: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
});
