import React, { ReactElement } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LogOut from "../../../assets/svg/LogOut";
import Logo from "../../../assets/svg/Logo";
import BackIcon from "../../../assets/svg/BackIcon";
import { NavigationScreenProp } from "react-navigation";

export const HeaderTitle = (): ReactElement => {
  const title = "Kerala State Water Transport Department";
  const subTitle = "Government of Kerala";
  return(
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Logo width={30}></Logo>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HeaderLeft = (navigation: NavigationScreenProp<any,any> ): ReactElement => {
  return <TouchableOpacity onPress={() => navigation.goBack()}>
    <BackIcon style={styles.marginLeft}></BackIcon>
  </TouchableOpacity>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HeaderRight = (navigation: NavigationScreenProp<any,any> ): ReactElement => {
  return <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
    <LogOut style={ styles.logoutIcon } ></LogOut>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    height: 30,
    marginLeft: 10
  },
  logoContainer: {
    flexDirection: "row",
    alignItems:"center"
  },
  marginLeft: {
    marginLeft:20
  },
  logoutIcon: {
    marginRight: 13
  },
  subTitle: {
    marginLeft: 5,
    fontSize: 8
  },
  title: {
    fontSize: 11,
    bottom: 5
  }
});