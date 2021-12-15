import React, { ReactElement } from "react";
import { Text, StyleSheet } from "react-native";

export const Title: React.FC<{ label: string }> = ({ label }): ReactElement => {
  return (
    <Text style={styles.loginPageTitle}>{label}</Text>
  );
};

const styles = StyleSheet.create({
  loginPageTitle: {
    fontWeight: "200",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    marginVertical: 40
  }
});