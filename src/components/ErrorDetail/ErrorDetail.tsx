import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";
import { colors } from "../../../assets/theme/colors";

interface ErrorDetailProps {
  heading: string,
  description: string,
  svgIcon: (svgProps?: SvgProps)=>ReactElement
}

export const ErrorDetail: React.FC<ErrorDetailProps> = ({ heading, description, svgIcon }: ErrorDetailProps): ReactElement => {
  return (
    <>
      <View style={styles.alignCenter}>
        {svgIcon()}
      </View>
      <View style={styles.container}>
        <Text style={[ styles.heading, styles.fontColor ]}>{heading}</Text>
        <Text style={[ styles.description, styles.fontColor ]}>{description}</Text>
      </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  heading: {
    lineHeight: 29,
    fontSize: 24
  },
  description: {
    fontSize: 14,
    marginTop:10,
    textAlign:"center"
  },
  fontColor: {
    color: colors.GreyBlack
  },
  alignCenter: {
    alignSelf:"center",
    alignContent:"center"
  }
});