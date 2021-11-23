import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import AppContainer from './src/Navigators/index';

// "Inter": require("./assets/fonts/Inter-Black.ttf"),
const getFonts = () =>  Font.loadAsync({
  "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  "Inter-SemiBoldItalic": require("./assets/fonts/Inter-SemiBoldItalic.ttf")
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return(
      <AppContainer />
    );
  } else{
    return(
      <AppLoading 
        startAsync={getFonts}
        onError={() => console.log('Not Capuring Font: ')}
        onFinish={() => {
          setFontsLoaded(true)
        }}
      />
    );
  }

}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
