import { StyleSheet, View } from "react-native";
import React, { ReactElement } from "react";
import GreenOval from "../../../assets/svg/GreenOval";
import RedOval from "../../../assets/svg/RedOval";
import DashedLine from "../../../assets/svg/DashedLine";

const OriginToDestinationIcon = ():ReactElement => {
  return(
    <View style={styles.container}>
      <GreenOval />
      <DashedLine style={styles.line} />
      <RedOval />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    display: "flex",
    flexDirection:"column"
  },
  line:{
    left:6
  }
});

export default OriginToDestinationIcon;
