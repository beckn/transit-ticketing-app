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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LoginComponent :React.FC<{
  navigation: NavigationScreenProp<any,any>
}> = ({ navigation }): ReactElement => {
  const [ userName, setUserName ] = React.useState("");
  const [ password, setPassword ] = React.useState("");

  return(
    <View style={styles.boxContainer}>
      <View style={styles.container}>
        <Header />

        <View style={[ styles.inputTextBox, styles.fullWidth ]}>
          <Text style={[ styles.inputText ]}> Let’s get started </Text>
          <OutlineBox
            width= { width/1.1 }
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
            <View style={[ styles.singleLine ]} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
            />
          </OutlineBox>
          <Text style={[ styles.inputTextForgot ]}> Forgot Password? </Text>
        </View>

        <View style={[ styles.buttonBox ]}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("DropDown")}    // eslint-disable-line no-console
          >
            <Text style={styles.loginButtonText}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    width: width
  },
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
  inputTextBox: {
    marginTop: 60
  },
  inputText: {
    fontWeight: "100",
    fontSize: 22,
    textAlign: "left",
    lineHeight: 27,
    marginVertical: 20
  },
  inputTextForgot: {
    fontWeight: "100",
    fontSize: 16,
    marginTop: 30,
    lineHeight: 17
  },
  buttonBox: {
    marginTop: 25,
    width: width /1.1
  },
  loginButton: {
    backgroundColor: colors.Black,
    borderRadius: 14,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    color: colors.White,
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 2
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10
  },
  singleLine: {
    height: 10,
    borderBottomWidth: 1,
    width: width /1.1
  }
});

export default LoginComponent;