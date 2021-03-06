import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { GestureResponderEvent } from "react-native-modal";
import { colors } from "../../../assets/theme/colors";

export interface ButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  isTansparent?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, onPress, isTansparent: onTrans }: ButtonProps) => {
  return (
    <View style={[ styles.buttonBox ]}>
      <TouchableOpacity
        style={onTrans ? [ styles.loginButton , styles.transparent ] : styles.loginButton}
        onPress={onPress}
      >
        <Text style={onTrans ? [ styles.label, styles.transLabel ] : styles.label}>{label}</Text>
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
    backgroundColor: colors.Grey_Black,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center"
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 2,
    color: colors.White
  },
  transparent: {
    backgroundColor: colors.Transparent,
    borderColor: colors.Grey_Black,
    borderWidth: 2
  },
  transLabel: {
    color: colors.Grey_Black
  }
});
