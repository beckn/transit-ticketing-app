import React, { ReactElement } from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";
import LogOut from "../../../assets/svg/LogOut";
import Logo from "../../../assets/svg/Logo";
import { Navigation } from "../../constants/navigation";
import { colors } from "../../../assets/theme/colors";
const Header: React.FC<{
  navigation?:  NavigationScreenProp<NavigationState,NavigationParams> 
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
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 9,
    color: colors.Off_Black
  }
});

export default Header;