import React, { ReactElement } from "react";
import { 
  StyleSheet,
  View,
  Dimensions 
} from "react-native";
import Header from "../../components/Header/Header";
import { Card } from "../../components/Card/card";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LandingPage = (): ReactElement => {
  return(
    <View style={styles.boxContainer}>
      <View style={styles.container}>
        <Header />

        <View style={styles.buttonBox}>
          <View style={styles.buttonBoxMargin}>
            <Card 
              label="Ticket Conductor"
              iconPath={require("../../../assets/icons/conductorIcon.png")}
              otherIconPath={require("../../../assets/icons/arrow.png")}
              tanslateIcon={require("../../../assets/icons/translateValidator.png")}
            />
          </View>
          
          <View style={styles.buttonBoxMargin}>
            <Card 
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
  buttonBoxMargin: {
    marginVertical: 15,
    width: width /1.1
  }
});

export default LandingPage;