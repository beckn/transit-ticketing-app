import React, { ReactElement } from "react";
import { StyleSheet, View, Text } from "react-native";
import Watch from "../../../assets/svg/Watch";
import { colors } from "../../../assets/theme/colors";

export const SmallCard : React.FC<{label: string, 
  suffix: string}> = ({ label,suffix }): ReactElement => {
  return(
    <View style = {styles.container}>
      <Watch style={styles.icon}></Watch>
      <View style={styles.labelContainer}>
        <Text style={styles.suffix}>{suffix}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 53,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius:10,
    borderColor: colors.Dim_Black,
    flexDirection: "row",
    alignItems: "center"
  },
  labelContainer: {
    flexDirection: "column",
    alignContent:"center"
  },
  label: {
    fontSize: 14,
    color: colors.Black,
    paddingTop: 5
  },
  suffix:{
    fontSize: 10,
    color: colors.Grey_Black
  },
  icon: {
    marginVertical: "5%",
    marginHorizontal: "5%"
  }
});