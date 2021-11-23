import React, { ReactElement } from  "react";
import { StyleSheet, View } from "react-native";
import DropDown from "./src/components/dropDown/DropDown";

export const App = ():ReactElement => {
  return(
    <View style={styles.box}>
      <DropDown/>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
