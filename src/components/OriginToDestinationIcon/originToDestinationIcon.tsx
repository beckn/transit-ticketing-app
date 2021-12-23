import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactElement } from "react";
import GreenOval from "../../../assets/svg/GreenOval";
import RedOval from "../../../assets/svg/RedOval";
import DashedLine from "../../../assets/svg/DashedLine";

const OriginToDestinationIcon: React.FC<{style?:StyleProp<ViewStyle>}> = ({ style }): ReactElement => {
  return (
    <View style={[ styles.container, style ]}>
      <GreenOval />
      <DashedLine style={styles.line} />
      <RedOval />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  line: {
    left: 6
  }
});

export default OriginToDestinationIcon;
