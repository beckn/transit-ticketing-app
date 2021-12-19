import React, { ReactElement } from "react";
import { 
  StyleSheet,
  View,
  Dimensions,
  Text
} from "react-native";
import Header from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { NavigationScreenProp } from "react-navigation";
import Slide from "../../../assets/svg/Slide";
import { Title } from "../../components/Title/Title";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LandingScreen :React.FC<{
  navigation: NavigationScreenProp<any,any>   // eslint-disable-line @typescript-eslint/no-explicit-any
}> = ({ navigation }): ReactElement => {
  const loginPageTitle = "Kerala State Water Transport Department";
  const issueTicketLabel = "Issue a new ticket";
  const validateTicketLabel = "Validate a ticket";
  const selectOneToContinue ="Select one to continue";
  return(
    <View style={styles.boxContainer}>
      <View  style={styles.header}>
        <Header navigation= {navigation} showLogOutButton={true} />
      </View>
      <Title label={loginPageTitle}></Title>
      <Slide  style={styles.bannerImage}></Slide>
      <View style={styles.buttonBox}>
        <Text style={styles.landingHeading}>{selectOneToContinue}</Text>
        <View style={styles.buttonBoxMargin}>
          <Card 
            navigation= {navigation}
            navigateTo= {"Ticket"}
            label={issueTicketLabel}
            iconPath={require("../../../assets/icons/conductorIcon.png")}
            otherIconPath={require("../../../assets/icons/arrow.png")}
            tanslateIcon={require("../../../assets/icons/translateValidator.png")}
          />
        </View>
          
        <View style={styles.buttonBoxMargin}>
          <Card 
            navigation= {navigation}
            navigateTo= {"ValidateTicket"}
            label={validateTicketLabel}
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
  header: {
    marginTop: 10,
    width: width/1.2
  },
  buttonBox: {
    marginTop: 100,
    width: width /1.1
  },
  bannerImage:{
    marginLeft: "22%"
  },
  landingHeading: {
    marginBottom: 15,
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

export default LandingScreen;