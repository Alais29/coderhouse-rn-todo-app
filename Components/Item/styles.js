import { StyleSheet } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.tertiary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 15,
    width: 100,
    maxWidth: "30%",
    maxHeight: 100,
  },
  text: {
    color: colors.dark,
    fontSize: 18,
  },
  done: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: colors.dark,
  },
});
