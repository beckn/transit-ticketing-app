import React from "react";
import { StyleSheet, View } from "react-native";
import DropDown from "./src/components/DropDown";

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.box}>
        <DropDown/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
