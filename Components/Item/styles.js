import { StyleSheet } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.darkBrown,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexGrow: 1,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
  done: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: colors.darkGray,
  },
});
