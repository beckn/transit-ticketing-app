import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export default function OutlineBox(props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }){
  return(
    <View style={styles.outlineBoxContainer}>
      { props.children }
    </View>
  );
};

const styles = StyleSheet.create({
  outlineBoxContainer: {
    position: 'relative',
    width: width / 1.1,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#424242",
    borderStyle: "solid",
  }
});