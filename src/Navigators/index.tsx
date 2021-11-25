import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import DropDown from "../components/dropDown/DropDown";
import LoginComponent from "../screens/auth/login";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white"
  }
};

const MainStack = createStackNavigator();

const MainStackNavigator = () :ReactElement => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="LoginPage"
        component={LoginComponent}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
      <MainStack.Screen
        name="DropDown"
        component={DropDown}
        options={{
          // headerShown: false,
          gestureEnabled: false
        }}
      />
    </MainStack.Navigator>
  );
};

const AppContainer = () :ReactElement => {
  return(
    <NavigationContainer theme={MyTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;