import React, { ReactElement } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../../assets/theme/colors";

export const Chip: React.FC<{
  label: string;
}> = ({ label }): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderRadius: 100,
    backgroundColor: colors.Beige,
    width: 83,
    height: 36,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    color: colors.Grey_Black
  }
});
