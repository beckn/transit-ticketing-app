import React from 'react';
import { 
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions
} from "react-native";
import BannerSvg from '../../../assets/svg/slides.svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LoginComponent = () => {
  return(
    <View style={styles.boxContainer}>
      <View style={styles.container}>
        <View style={[styles.logoBox, styles.fullWidth]}>
          <Image style={styles.logoIcon} source={require("../../../assets/icons/logo.png")} />
          <Text style={[styles.logoLabel, styles.fullWidth]}> Government of Kerala </Text>
        </View>

        <View style={[styles.bannerTextBox, styles.fullWidth]}>
          <Text style={styles.bannerText}> Kerala State WaterTransport Department </Text>
          <View style={[styles.fullWidth, styles.bannerImageBox]}>
            <BannerSvg  width={450} height={450}  />
          </View>
        </View>

        <View style={[styles.inputTextBox, styles.fullWidth]}>
          <Text style={[styles.inputText]}> Let’s get started </Text>
          <View style={[styles.fullWidth, styles.bannerImageBox]}>

          </View>
          <Text style={[styles.inputTextForgot]}> Forgot Password? </Text>
        </View>

        <View style={[styles.buttonBox]}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => console.log('Simple Button pressed')}
          >
            <Text style={{color: '#fff', fontSize: 18}}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
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
    position: 'relative',
    width: width / 1.1,
    height: height - 60
  },
  logoBox: {
    position: 'relative',
    top: 10,
    height: 40,
    marginBottom: 20
  },
  logoLabel: {
    fontFamily: 'Inter-ExtraBold',
    marginBottom: 20,
    fontWeight: "600",
    fontSize: 9
  },
  logoIcon: {
    width: 55,
    height: 35,
    marginLeft: 10
  },
  bannerTextBox: {
    position: 'relative',
    width: width ,
    textAlign: 'left',
    writingDirection: 'ltr',
    marginTop: 20,
    marginBottom: 20,
  },
  bannerText: {
    fontWeight: "600",
    fontSize: 36,
    fontFamily: 'Inter-ExtraBold',
    includeFontPadding: false
  },
  bannerImageBox: {
    flex: 1,
    flexDirection: 'column',
		justifyContent: 'center', 
		alignItems: 'center',
    position: 'relative',
    bottom: -50
  },
  inputTextBox: {
    marginTop: 100,
  },
  inputText: {
    fontWeight: '100',
    fontSize: 22,
    textAlign: 'left',
    lineHeight: 27,
    marginVertical: 20,
  },
  inputTextForgot: {
    fontWeight: '100',
    fontSize: 16,
    marginVertical: 20,
    lineHeight: 17
  },
  buttonBox: {
    marginTop: 70,
    width: width /1.1
  },
  loginButton: {
    backgroundColor: '#3E4059',
    borderRadius: 14,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 2,
  },
});

export default LoginComponent;