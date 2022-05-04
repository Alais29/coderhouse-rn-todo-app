import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { colors } from "../../Styles/colors";

const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light2,
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
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingTop: StatusBar.currentHeight || 20,
    borderBottomLeftRadius: 50,
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
  divider: {
    height: 5,
    width: "100%",
    backgroundColor: colors.primary,
  },
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
