import React, { ReactElement } from "react";
import { 
  StyleSheet,
  View,
  Text
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import  LogOut from "../../../assets/svg/LogOut";
import Logo from "../../../assets/svg/Logo";
const Header: React.FC<{
  navigation?: NavigationScreenProp<any,any>    // eslint-disable-line @typescript-eslint/no-explicit-any
  showLogOutButton?: boolean,
}> = ({ navigation, showLogOutButton }): ReactElement => {
  const logoLabel = "Government of Kerala";
  return(
    <View style={ styles.logoBox }>
      <View>
        <Logo></Logo>
        <Text style={styles.logoLabel}>{logoLabel}</Text>
      </View>
      {showLogOutButton && 
          <View onTouchEndCapture={() => navigation?.navigate("LoginPage")} >
            <LogOut style={styles.logoutIcon}/>
          </View>
      } 
    </View>
  );
};

const styles = StyleSheet.create({
  logoBox: {
    width:"100%",
    height: 40,
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-between"
  },
  logoLabel: {
    fontFamily: "Inter-ExtraBold",
    fontWeight: "600",
    fontSize: 9
  },
  logoutIcon: {
    width: 35,
    height: 35,
    right: 40
  }
});

export default Header;