import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  topContainer: {
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingTop: StatusBar.currentHeight || 20,
    borderBottomLeftRadius: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 28,
    textAlign: "center",
  },
  addTask: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 15,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
    paddingHorizontal: 8,
    fontSize: 18,
    height: 40,
    backgroundColor: colors.light,
    flexGrow: 1,
    maxWidth: "80%",
  },
});
