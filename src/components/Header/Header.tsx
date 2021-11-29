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
import { NavigationScreenProp } from "react-navigation";

/**
 * Import Other Dependencies
 */


const width = Dimensions.get("window").width;

const Header: React.FC<{
  navigation?: NavigationScreenProp<any,any>    // eslint-disable-line @typescript-eslint/no-explicit-any
  logStatus?: boolean,
}> = ({ navigation, logStatus }): ReactElement => {
  return(
    <>
      <View style={[ styles.logoBox, styles.fullWidth ]}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoIcon} source={require("../../../assets/icons/logo.png")} />
          <Text style={[ styles.logoLabel, styles.fullWidth ]}> Government of Kerala </Text>
        </View>
        {logStatus && 
          <View onTouchEndCapture={() => navigation?.navigate("LoginPage")} >
            <Image style={styles.logoutIcon} source={require("../../../assets/icons/logout.png")} />
          </View>
        } 
      </View>

      <View style={[ styles.bannerTextBox, styles.fullWidth ]}>
        <Text style={styles.bannerText}> Kerala State Water {"\n"} Transport Department </Text>
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
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  logoContainer: {
    position: "relative"
  },
  logoLabel: {
    fontFamily: "Inter-ExtraBold",
    marginBottom: 20,
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 9
  },
  logoIcon: {
    width: 55,
    height: 35,
    marginLeft: 10
  },
  logoutIcon: {
    position: "absolute",
    width: 35,
    height: 35,
    right: 40
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
    fontWeight: "200",
    fontSize: 24,
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
    right: 0,
    width: width,
    resizeMode: "stretch"
  }
});

export default Header;