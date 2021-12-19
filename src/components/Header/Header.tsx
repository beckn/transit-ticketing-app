import React, { ReactElement } from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import LogOut from "../../../assets/svg/LogOut";
import Logo from "../../../assets/svg/Logo";
import { Navigation } from "../../constants/navigation";
const Header: React.FC<{
  navigation?: NavigationScreenProp<any, any>    // eslint-disable-line @typescript-eslint/no-explicit-any
  showLogOutButton?: boolean,
}> = ({ navigation, showLogOutButton }): ReactElement => {
  const logoLabel = "Government of Kerala";
  return (
    <View style={styles.logoBox}>
      <View>
        <Logo></Logo>
        <Text style={styles.logoLabel}>{logoLabel}</Text>
      </View>
      {showLogOutButton && navigation &&
        <View onTouchEndCapture={() => navigation.navigate(Navigation.Authorization)} >
          <LogOut />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  logoBox: {
    marginTop: 20,
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logoLabel: {
    fontFamily: "Inter-ExtraBold",
    fontWeight: "600",
    fontSize: 9
  }
});

export default Header;