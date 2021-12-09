import React, { ReactElement } from "react";
import { 
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions 
} from "react-native";
import { colors } from "../../../assets/theme/colors";
import Header from "../../components/Header/Header";
import OutlineBox from "../../components/OutlineBox/OutlineBox";
import { NavigationScreenProp } from "react-navigation";
import Boat from "../../../assets/svg/Boat";
import { Title } from "../../components/Title/Title";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LoginComponent :React.FC<{
  navigation: NavigationScreenProp<any,any>   // eslint-disable-line @typescript-eslint/no-explicit-any
}> = ({ navigation }): ReactElement => {
  const [ emailAddress, setEmailAddress ] = React.useState("");
  const [ password, setPassword ] = React.useState("");
  const loginTitle = "Let’s get started";
  const forgotPasswordLabel = "Forgot Password?";
  const loginButtonLabel = "Login";
  const loginPageTitle = "Kerala State Water Transport Department";

  return(
    <View style={styles.boxContainer}>
      <Header showLogOutButton={false} />
      <Title label={loginPageTitle}></Title>
      <Boat  style={styles.bannerImage}></Boat>
      <View style={ styles.inputTextBox }>
        <Text style={styles.inputText}>{loginTitle}</Text>
        <OutlineBox
          width= { width/1.1 }
          borderRadius= { 10 }
          backgroundColor= { colors.White }
          borderWidth= { 1 }
          borderColor= { colors.Dim_Black }
        >
          <TextInput
            style={styles.input}
            placeholder="Email address"
            onChangeText={setEmailAddress}
            value={emailAddress}
          />
          <View style={styles.singleLine} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
        </OutlineBox>
        <Text style={styles.inputTextForgot}>{forgotPasswordLabel}</Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("LandingPage")}>
        <Text style={styles.loginButtonText}>{loginButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 
  boxContainer: {
    alignItems: "center",
    marginVertical:30,
    alignSelf: "center",
    width: width / 1.102,
    height: height-50 
  },
  inputTextBox: {
    marginTop: 40
  },
  inputText: {
    fontWeight: "100",
    fontSize: 22,
    lineHeight: 27,
    marginVertical: 20,
    color:colors.GreyBlack
  },
  bannerImage: {
    marginTop: 15,
    marginLeft: "20%"
  },
  inputTextForgot: {
    fontWeight: "100",
    fontSize: 16,
    marginTop: 30,
    lineHeight: 17,
    color: colors.GreyBlack
  },
  loginButton: {
    position: "absolute",
    backgroundColor: colors.GreyBlack,
    borderRadius: 14,
    width: "100%",
    height:50,
    alignItems: "center",
    justifyContent: "center",
    bottom:0
  },
  loginButtonText: {
    color: colors.White,
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10
  },
  singleLine: {
    height: 10,
    borderBottomWidth: 1,
    width: width /1.102
  }
});

export default LoginComponent;


