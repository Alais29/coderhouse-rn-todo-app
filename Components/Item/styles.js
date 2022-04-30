import { StyleSheet } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.darkBrown,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});
