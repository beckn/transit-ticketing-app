import React, { ReactElement } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../assets/theme/colors";

const width = Dimensions.get("window").width;

const OutlineBox :React.FC<{
  children: React.ReactNode
}> = ({ children }): ReactElement => {
  return (
    <View style={styles.outlineBoxContainer}>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  outlineBoxContainer: {
    position: "relative",
    width: width / 1.1,
    borderRadius: 10,
    backgroundColor: colors.White,
    borderWidth: 1,
    borderColor: colors.Dim_Black,
    borderStyle: "solid"
  }
});

export default OutlineBox;