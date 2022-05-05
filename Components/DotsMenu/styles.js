import { StyleSheet } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    height: 30,
    alignItems: "center",
  },
  menudot: {
    height: 3,
    width: 3,
    backgroundColor: colors.dark,
    marginHorizontal: 2,
    borderRadius: 50,
  },
});
