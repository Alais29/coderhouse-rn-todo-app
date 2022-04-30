import { StyleSheet } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 25,
    justifyContent: "space-around",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    width: 200,
    marginRight: 10,
    paddingHorizontal: 8,
    fontSize: 18,
    height: 35,
    backgroundColor: colors.gray,
  },
  itemList: {
    backgroundColor: colors.brown,
    width: "95%",
    padding: 20,
  },
  text: {
    textAlign: "center",
  },
});
