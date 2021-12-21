import React, { ReactElement } from "react";
import { Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { colors } from "../../../assets/theme/colors";

export const Title: React.FC<{ label: string, style?: StyleProp<ViewStyle> }> = ({ label, style }): ReactElement => {
  return (
    <Text style={[ styles.loginPageTitle , style ]}>{label}</Text>
  );
};

const styles = StyleSheet.create({
  loginPageTitle: {
    fontWeight: "200",
    fontSize: 24,
    alignSelf:"stretch",
    lineHeight: 29,
    marginVertical: 40,
    color: colors.Grey_Black,
    textAlign: "center"
  }
});