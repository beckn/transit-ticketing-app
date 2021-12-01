import React, { ReactElement, useState } from "react";
import { View, StyleSheet, Image, Text, ImageProps } from "react-native";
import { colors } from "../../../assets/theme/colors";

export const Stepper: React.FC<{
  maxLimit: number,
  label: string,
  icon: ImageProps
}> = ({ maxLimit, label, icon }): ReactElement => {

  const [ counter, setCounter ] = useState(0);
  const increment = ():void => {
    if (counter < maxLimit)
      setCounter(counter + 1);
  };
  const decrement = (): void => {
    if (counter > 0)
      setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <Image source={icon}
        style={styles.passengerIcon}></Image>
      <Text>{label}</Text>
      <View style={styles.button} onTouchStart={decrement}>
        <Text>-</Text>
      </View>
      <Text style={styles.label}>
        {counter}
      </Text>
      <View style={styles.button} onTouchStart={increment}>
        <Text>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    marginVertical: 20,
    height: 53,
    width: 350,
    borderColor: colors.Dim_Black,
    alignItems: "center",
    justifyContent: "space-evenly"

  },
  button: {
    height: 30,
    width: 30,
    marginHorizontal:10,
    alignItems: "center",
    justifyContent: "center"
  },
  passengerIcon: {
    marginHorizontal: 15
  },
  label: {
    width: 20,
    fontSize: 14,
    color: colors.Black
  }
});
