import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DropDown from "../components/dropDown/DropDown";
import LoginComponent from '../screens/auth/login';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  }
}

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Login Page"
        component={LoginComponent}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
      <MainStack.Screen
        name="Select Drop Down Page"
        component={DropDown}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
    </MainStack.Navigator>
  )
}

const AppContainer = () => {
  return(
    <NavigationContainer theme={MyTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  )
}

export default AppContainer;