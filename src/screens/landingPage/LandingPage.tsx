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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LandingPage :React.FC<{
  navigation: NavigationScreenProp<any,any>   // eslint-disable-line @typescript-eslint/no-explicit-any
}> = ({ navigation }): ReactElement => {
  return(
    <View style={styles.boxContainer}>
      <View style={styles.container}>
        <Header navigation= {navigation} logStatus={true} />

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
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container:{
    position: "relative",
    width: width / 1.1,
    height: height - 60
  },
  buttonBox: {
    marginTop: 100,
    width: width /1.1
  },
  landingHeading: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "300"
  },
  buttonBoxMargin: {
    marginVertical: 15,
    width: width /1.1
  }
});

export default LandingPage;