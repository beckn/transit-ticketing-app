import React, { ReactElement, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../../assets/theme/colors";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";
import { SvgProps } from "react-native-svg";

export const Card: React.FC<{
  label: string,
  svgIcons: Array<(svgProps?: SvgProps)=>ReactElement>,
  navigationScreen: string,
  navigation:  NavigationScreenProp<NavigationState,NavigationParams> 
}> = ({ label, svgIcons, navigation, navigationScreen }): ReactElement => {
  const [ toggleColor, setToggleColor ] = useState(false);
  const changeBackground = () : void => {
    setToggleColor(true);
  };

  const navigateToScreen = () :void => {
    setToggleColor(!toggleColor);
    navigation.navigate(navigationScreen);
  };

  return (
    <View style={[ styles.container, toggleColor && styles.highlight ]}
      onTouchStart={changeBackground}
      onTouchEndCapture={() => navigateToScreen()}
    >
      {svgIcons[0]()}
      <Text style={styles.label}>{label}</Text>
      {svgIcons[1]()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: "100%",
    height: 100,
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor: colors.White,
    borderColor: colors.Dim_Black,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-around"
  },
  highlight: {
    backgroundColor: colors.Beige
  },
  label: {
    width: "65%",
    color: colors.Black,
    fontSize: 17,
    right: 14
  }
});

