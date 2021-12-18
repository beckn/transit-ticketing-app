import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import LoginComponent from "../screens/Authorization/Login";
import LandingPage from "../screens/LandingScreen/LandingPage";
import { QRScanner } from "../screens/QRScanner/QRScanner";
import store from "../store/store";
import { Ticket } from "../screens/Ticket/Ticket";
import BookingConfirmation from "../screens/BookingConfirmation/BookingConfirmation";
import { HeaderLeft, HeaderRight, HeaderTitle } from "../components/PageHeader/PageHeader";
import { Provider } from "react-redux";
import { QRResult } from "../screens/QRScanner/QRResult";


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
    <Provider store={store}>
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
          name="LandingPage"
          component={LandingPage}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <MainStack.Screen
          name="ValidateTicket"
          component={QRScanner}
          options={({ navigation }) => ({
            headerTitle: () => HeaderTitle(),
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => HeaderRight(navigation),
            gestureEnabled: false
          })}
        />
        <MainStack.Screen
          name="ScannedResult"
          component={QRResult}
          options={({ navigation }) => ({
            headerTitle: () => HeaderTitle(),
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => HeaderRight(navigation),
            gestureEnabled: false
          })}
        />
        <MainStack.Screen
          name="Ticket"
          component={Ticket}
          options={({ navigation }) => ({
            headerTitle: () => HeaderTitle(),
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => HeaderRight(navigation),
            gestureEnabled: false
          })}
        />

        <MainStack.Screen
          name="BookingConfirmation"
          component={BookingConfirmation}
          options={({ navigation }) => ({
            headerTitle: () => HeaderTitle(),
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => HeaderRight(navigation),
            gestureEnabled: false
          })}
        />
      </MainStack.Navigator>
    </Provider>
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