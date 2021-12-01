import React, { ReactElement } from "react";
import { ImageProps, StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../../../assets/theme/colors";

export const SmallCard : React.FC<{label: string, 
  icon: ImageProps, 
  suffix: string}> = ({ label,icon,suffix }): ReactElement => {
  return(
    <View style = {styles.container}>
      <Image style={styles.icon} source={icon}></Image>
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
    display: "flex",
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
    color: colors.GreyBlack
  },
  icon: {
    marginVertical: "5%",
    marginHorizontal: "5%"
  }
});