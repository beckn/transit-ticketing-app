import React, { ReactFragment } from "react";
import { StyleSheet, View, Animated, Easing, Text, Image } from "react-native";

const SpinnerLoader = (): ReactFragment => {
  const spinValue = new Animated.Value(0);

  // First set up animation 
  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: true  // To make use of native driver for performance
      }
    )
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [ 0, 1 ],
    outputRange: [ "0deg", "360deg" ]
  });

  return (
    <View style={styles.mainContainer}>
      <Animated.View style={[ styles.container, { transform: [ { rotate: spin } ] } ]}>
        <Image source={require("../../../assets/icons/loader.png")} />
      </Animated.View>
      <View style={[ styles.textBox ]}>
        <Text style={ styles.textCenter }>
          Please Wait 
        </Text>
        <Text>
          Loading time schedule
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    width: 40,
    height: 40,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-around"
  },
  textBox: {
    marginTop: 20
  },
  textCenter: {
    textAlign: "center"
  }
});

export default SpinnerLoader;