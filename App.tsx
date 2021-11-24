import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import AppContainer from "./src/Navigators/index";

const getFonts = () =>  (Font.loadAsync({
  "Inter": require("./assets/fonts/Inter-Black.ttf"),
  "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  "Inter-SemiBoldItalic": require("./assets/fonts/Inter-SemiBoldItalic.ttf")
}));

export default function App() {
  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  if( fontsLoaded ) {
    return(
      <AppContainer />
    );
  } else {
    return(
      <AppLoading 
        startAsync={ getFonts }
        onError={() => console.log("Not Capuring Font: ")}      // eslint-disable-line no-console
        onFinish={() => {
          setFontsLoaded( true );
        }}
      />
    );
  }
}