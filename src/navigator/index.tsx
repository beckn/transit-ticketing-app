import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Authorization from "../screens/Authorization/Authorization";
import LandingScreen from "../screens/LandingScreen/LandingScreen";
import { ValidateTicket } from "../screens/ValidateTicket/ValidateTicket";
import store from "../store/store";
import { IssueTicket } from "../screens/IssueTicket/IssueTicket";
import BookingConfirmation from "../screens/BookingConfirmation/BookingConfirmation";
import { HeaderLeft, HeaderRight, HeaderTitle } from "../components/PageHeader/PageHeader";
import { Provider } from "react-redux";
import { ValidateTicketResult } from "../screens/ValidateTicket/QRResult";
import { Navigation } from "../constants/navigation";


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
          name={Navigation.Authorization}
          component={Authorization}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <MainStack.Screen
          name={Navigation.LandingScreen}
          component={LandingScreen}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <MainStack.Screen
          name={Navigation.ValidateTicket}
          component={ValidateTicket}
          options={({ navigation }) => ({
            headerTitle: () => HeaderTitle(),
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => HeaderRight(navigation),
            gestureEnabled: false
          })}
        />
        <MainStack.Screen
          name={Navigation.ValidateTicketResult}
          component={ValidateTicketResult}
          options={({ navigation }) => ({
            headerTitle: () => HeaderTitle(),
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => HeaderRight(navigation),
            gestureEnabled: false
          })}
        />
        <MainStack.Screen
          name={Navigation.IssueTicket}
          component={IssueTicket}
          options={({ navigation }) => ({
            headerTitle: () => HeaderTitle(),
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => HeaderRight(navigation),
            gestureEnabled: false
          })}
        />

        <MainStack.Screen
          name={Navigation.BookingConfirmation}
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