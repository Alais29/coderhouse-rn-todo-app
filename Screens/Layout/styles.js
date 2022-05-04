import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
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
  topContainer: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginTop: StatusBar.currentHeight || 20,
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
  itemList: {
    width: "100%",
    height: "70%",
    padding: 20,
    backgroundColor: colors.secondary,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    textAlign: "center",
  },
});
