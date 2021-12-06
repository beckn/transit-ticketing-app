import React, { ReactElement } from "react";
import { 
  StyleSheet,
  View,
  Dimensions,
  Text
} from "react-native";
import Header from "../../components/Header/Header";
import { Card } from "../../components/Card/card";
import { NavigationScreenProp } from "react-navigation";
import Slide from "../../../assets/svg/Slide";
import { Title } from "../../components/Title/Title";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LandingPage :React.FC<{
  navigation: NavigationScreenProp<any,any>   // eslint-disable-line @typescript-eslint/no-explicit-any
}> = ({ navigation }): ReactElement => {
  const loginPageTitle = "Kerala State Water Transport Department";
  return(
    <View style={styles.boxContainer}>
      <Header navigation= {navigation} showLogOutButton={true} />
      <Title label={loginPageTitle}></Title>
      <Slide  style={styles.bannerImage}></Slide>
      <View style={styles.buttonBox}>
        <Text style={styles.landingHeading}> Select one to continue </Text>
        <View style={styles.buttonBoxMargin}>
          <Card 
            navigation= {navigation}
            navigationStatus= {true}
            label="Ticket Conductor"
            iconPath={require("../../../assets/icons/conductorIcon.png")}
            otherIconPath={require("../../../assets/icons/arrow.png")}
            tanslateIcon={require("../../../assets/icons/translateValidator.png")}
          />
        </View>
          
        <View style={styles.buttonBoxMargin}>
          <Card 
            navigation= {navigation}
            navigationStatus= {true}
            label="Ticket Validator"
            iconPath={require("../../../assets/icons/validatorIcon.png")}
            otherIconPath={require("../../../assets/icons/arrow.png")}
            tanslateIcon={require("../../../assets/icons/translateValidator.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    alignItems: "center",
    marginVertical:30,
    alignSelf: "center",
    width: width / 1.1,
    height: height-45
  },
  buttonBox: {
    marginTop: 100,
    width: width /1.1
  },
  bannerImage:{
    marginLeft: "22%"
  },
  landingHeading: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "300"
  },
  buttonBoxMargin: {
    marginVertical: 15,
    display: "flex",
    alignItems: "center",
    width: width /1.1
  }
});

export default LandingPage;