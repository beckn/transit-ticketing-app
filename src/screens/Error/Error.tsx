import React, { ReactElement } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Button } from "../../components/Button/Button";
import { ErrorDetail } from "../../components/ErrorDetail/ErrorDetail";
import { SvgProps } from "react-native-svg";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

interface ErrorConfigProps {
  heading: string,
  description: string,
  buttonLabel: string,
  svgIcon: (svgProps?: SvgProps)=>ReactElement
}

export const Error: React.FC<ErrorConfigProps> = ({ heading, description, svgIcon, buttonLabel }: ErrorConfigProps): ReactElement => {
  return (
    <View style={[ styles.container, styles.alignCenter ]}>
      <ErrorDetail heading={heading} description={description} svgIcon={svgIcon}></ErrorDetail>
      <Button label={buttonLabel}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop:60,
    display:"flex",
    height: height/1.24,
    width:width/1.2,
    justifyContent: "space-between"
  },
  alignCenter: {
    alignSelf:"center",
    alignContent:"center"
  }
});