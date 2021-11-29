import React, { ReactElement } from "react";
import { View, StyleSheet } from "react-native";

const OutlineBox :React.FC<{
  children: React.ReactNode,
  width: number,
  borderRadius: number,
  backgroundColor: string,
  borderWidth: number,
  borderColor: string,
}> = ({ children, width, borderRadius, backgroundColor, borderWidth, borderColor }): ReactElement => {
  return (
    <View style={[ styles.outlineBoxContainer, { width , borderRadius, backgroundColor, borderWidth, borderColor } ]}>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  outlineBoxContainer: {
    position: "relative",
    borderStyle: "solid"
  }
});

export default OutlineBox;