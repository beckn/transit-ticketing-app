import React from 'react';
import { 
  StyleSheet,
  View,
  Button,
  Image,
  Dimensions
} from "react-native";

const {width, height} = Dimensions.get('window');

const LoginComponent = () => {
  return(
    <View style={styles.boxContainer}>
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image style={styles.logoIcon} source={require("../../../assets/icons/logo.png")} />
        </View>
        <Button
          title="Press me"
          onPress={() => console.log('Simple Button pressed')}
          style={styles.button}
          enableShadow
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container:{
    position: 'relative',
    width: width,
    height: height
  },
  button: {
    backgroundColor: '#0f0',
    color: '#2196F3'
  },
  logoBox: {
    position: 'absolute',
    width: 60,
    height: 35
  },
  logoIcon: {
    width: 55,
    height: 31,
  }
});

export default LoginComponent;