import React from "react";
import { 
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions 
} from "react-native";
import HeaderComponent from "../../components/header/index";
import OutlineBox from "../../components/OutlineBox/OutlineBox";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LoginComponent = ( props: { navigation: { navigate: (arg0: string) => void; }; } ) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return(
    <View style={styles.boxContainer}>
      <View style={styles.container}>
        <HeaderComponent />

        <View style={[ styles.inputTextBox, styles.fullWidth ]}>
          <Text style={[ styles.inputText ]}> Let’s get started </Text>
          <OutlineBox>
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
            onPress={() => props.navigation.navigate("DropDown")}    // eslint-disable-line no-console
          >
            <Text style={styles.loginButtonText}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
    marginTop: 60,
  },
  inputText: {
    fontWeight: "100",
    fontSize: 22,
    textAlign: "left",
    lineHeight: 27,
    marginVertical: 20,
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
    backgroundColor: "#3E4059",
    borderRadius: 14,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 2,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  singleLine: {
    height: 10,
    borderBottomWidth: 1,
    width: width /1.1
  },
});

export default LoginComponent;