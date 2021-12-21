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
import { Navigation } from "../../constants/navigation";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Authorization :React.FC<{
  navigation: NavigationScreenProp<any,any>   // eslint-disable-line @typescript-eslint/no-explicit-any
}> = ({ navigation }): ReactElement => {
  const [ userName, setUserName ] = React.useState("");
  const [ password, setPassword ] = React.useState("");
  const loginTitle = "Let’s get started";
  const forgotPasswordLabel = "Forgot Password?";
  const loginButtonLabel = "Login";
  const loginPageTitle = "Kerala State Water Transport Department";

  return(
    <View style={styles.boxContainer}>
      <View  style={styles.logo}>
        <Header showLogOutButton={false} />
      </View>
      <Title label={loginPageTitle}></Title>
      <Boat  style={styles.bannerImage}></Boat>
      <View style={ styles.inputTextBox }>
        <Text style={styles.inputText}>{loginTitle}</Text>
        <OutlineBox
          width= { width/1.1 }
          height={130}
          borderRadius= { 10 }
          backgroundColor= { colors.White }
          borderWidth= { 1 }
          borderColor= { colors.Dim_Black }
        >
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setUserName}
            value={userName}
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
        onPress={() => navigation.navigate(Navigation.LandingScreen)}>
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
    height: height-10 
  },
  inputTextBox: {
    marginTop: 40
  },
  logo: {
    marginTop: 10,
    right: width/3.05
  },
  inputText: {
    fontWeight: "100",
    fontSize: 22,
    lineHeight: 20,
    marginVertical: 20,
    color:colors.Grey_Black
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
    color: colors.Grey_Black
  },
  loginButton: {
    position: "absolute",
    backgroundColor: colors.Grey_Black,
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
    margin: 12
  },
  singleLine: {
    borderBottomWidth: 1,
    width: width /1.102
  }
});

export default Authorization;


