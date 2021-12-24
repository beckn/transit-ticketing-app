import React, { ReactElement } from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
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
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";


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
          options={({ navigation }) => (headerContent(navigation))}
        />
        <MainStack.Screen
          name={Navigation.ValidateTicketResult}
          component={ValidateTicketResult}
          options={({ navigation }) => (headerContent(navigation))}
        />
        <MainStack.Screen
          name={Navigation.IssueTicket}
          component={IssueTicket}
          options={({ navigation }) => ((headerContent(navigation)))}
        />

        <MainStack.Screen
          name={Navigation.BookingConfirmation}
          component={BookingConfirmation}
          options={({ navigation }) => ((headerContent(navigation)))}
        />
      </MainStack.Navigator>
    </Provider>
  );
};
const headerContent = (navigation: NavigationScreenProp<NavigationState,NavigationParams>  ): StackNavigationOptions => {
  return {
    headerTitle: () => HeaderTitle(),
    headerLeft: () => HeaderLeft(navigation),
    headerRight: () => HeaderRight(navigation),
    gestureEnabled: false,
    headerStyle: { height: 70 }
  };
};

const AppContainer = () :ReactElement => {
  return(
    <NavigationContainer theme={MyTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;