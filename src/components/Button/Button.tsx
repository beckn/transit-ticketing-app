import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { GestureResponderEvent } from "react-native-modal";
import { colors } from "../../../assets/theme/colors";

export interface ButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onPress }: ButtonProps) => {
  return (
    <View style={[ styles.buttonBox ]}>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={onPress}
      >
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    display: "flex",
    flexDirection: "row"
  },
  loginButton: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: colors.GreyBlack,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center"
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 2,
    color: colors.White
  }
});
