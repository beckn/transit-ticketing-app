/**
 * Import Node Modules
 */
import React, { ReactElement } from "react";
import { 
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions 
} from "react-native";

/**
 * Import Other Dependencies
 */


const width = Dimensions.get("window").width;

const Header = (): ReactElement => {
  return(
    <>
      <View style={[ styles.logoBox, styles.fullWidth ]}>
        <Image style={styles.logoIcon} source={require("../../../assets/icons/logo.png")} />
        <Text style={[ styles.logoLabel, styles.fullWidth ]}> Government of Kerala </Text>
      </View>

      <View style={[ styles.bannerTextBox, styles.fullWidth ]}>
        <Text style={styles.bannerText}> Kerala State WaterTransport Department </Text>
        <View style={[ styles.fullWidth, styles.bannerImageBox ]}>
          <Image style={styles.bannerImage} source={require("../../../assets/icons/slide.png")} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    width: width
  },
  logoBox: {
    position: "relative",
    top: 10,
    height: 40,
    marginBottom: 20
  },
  logoLabel: {
    fontFamily: "Inter-ExtraBold",
    marginBottom: 20,
    fontWeight: "600",
    fontSize: 9
  },
  logoIcon: {
    width: 55,
    height: 35,
    marginLeft: 10
  },
  bannerTextBox: {
    position: "relative",
    width: width ,
    textAlign: "left",
    writingDirection: "ltr",
    marginTop: 20,
    marginBottom: 20
  },
  bannerText: {
    fontWeight: "600",
    fontSize: 36,
    fontFamily: "Inter-ExtraBold",
    includeFontPadding: false
  },
  bannerImageBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center",
    position: "relative",
    bottom: -40
  },
  bannerImage:{
    position: "absolute",
    left: -15,
    width: width ,
    resizeMode: "stretch"
  }
});

export default Header;