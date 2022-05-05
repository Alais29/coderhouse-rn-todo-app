import { StyleSheet } from "react-native";
import { colors } from "../../Styles/colors";

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.tertiary,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  text: {
    color: colors.dark,
    fontSize: 18,
  },
  done: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: colors.dark2,
  },
  // checkContainer: {
  //   width: 20,
  //   height: 20,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderWidth: 2,
  //   borderColor: colors.success,
  //   marginRight: 10,
  //   position: "relative",
  //   top: 2,
  // },
  // checkContainerChecked: {
  //   backgroundColor: colors.success,
  // },
  // checkMark: {
  //   height: 10,
  //   width: 5,
  //   borderBottomWidth: 2,
  //   borderRightWidth: 2,
  //   borderColor: colors.light,
  //   display: "none",
  //   transform: [{ rotate: "45deg" }],
  // },
  // checkMarkChecked: {
  //   display: "flex",
  // },
  dateContainer: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.dark2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontStyle: "italic",
  },
});
