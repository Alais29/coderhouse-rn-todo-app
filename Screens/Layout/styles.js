import { StyleSheet } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light2,
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  divider: {
    height: 5,
    width: "100%",
    backgroundColor: colors.primary,
  },
});
