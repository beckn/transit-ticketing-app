import React, { ReactElement, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { colors } from "../../../assets/theme/colors";
export const Navigator: React.FC<{
  label: string,
  iconPath:any,
  otherIconPath:any,
  tanslateIcon:any
}> = ({ label, iconPath, otherIconPath, tanslateIcon }): ReactElement => {

  const [ toggleColor, setToggleColor ] = useState(false);
  const changeBackground = () => {
    setToggleColor(true);
  }
  return (
    <View style={[styles.container, toggleColor && styles.highlight ]}
          onTouchStart={changeBackground}
          onTouchEndCapture={()=>setToggleColor(!toggleColor)}
    >
      <Image source={iconPath} style={styles.icon}></Image>
      <Text style={styles.label}>{label}</Text>
      <Image source={tanslateIcon} style={styles.translateIcon}></Image>
      <Image source={otherIconPath} style={styles.otherIcon} ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderWidth: 1,
    width: 320,
    height: 89,
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor: colors.White,
    borderColor: colors.Dim_Black,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-around"
  },
  highlight: {
    backgroundColor: colors.Beige
  },
  icon: {
    position:"absolute",
    width: 30,
    height: 52,
    left: 20
  },
  translateIcon: {
    position: "absolute",
    bottom: 20,
    marginHorizontal: 17,
    width:98,
    height:10
  },
  otherIcon: {
    top:5,
    transform: [ { rotate: "-90deg" } ]
  },
  label: {
    left:15,
    color: colors.Black,
    fontSize: 16
  }
});

