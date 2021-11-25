import { Image, StyleSheet, View } from "react-native";
import React, { ReactElement } from "react";

const OriginToDestinationIcon = ():ReactElement => {
  return(
    <View style={styles.container}>
      <Image source={require("../../../assets/icons/greenOval.png")} />
      <Image style={styles.line} source={require("../../../assets/icons/line.png")} />
      <Image source={require("../../../assets/icons/orangeOval.png")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    display: "flex",
    flexDirection:"column"
  },
  line:{
    left:5,
    height:40
  }
});

export default OriginToDestinationIcon;
