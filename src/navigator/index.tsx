import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import LoginComponent from "../screens/Authorization/Login";
import LandingPage from "../screens/LandingScreen/LandingPage";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "../store/store";
import { Ticket } from "../screens/ticket/Ticket";
import BookingConfirmation from "../screens/BookingConfirmation/BookingConfirmation";

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
          name="Ticket"
          component={Ticket}
          options={({ navigation }) => ({
            headerTitle: () => <TicketHeader  />,
            headerLeft: () => (
              <TouchableOpacity 
                onPress={() => navigation.goBack()}
              >
                <Image source={require("../../assets/icons/backIcon.png")} style={ styles.iconRotate } />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => navigation.navigate("LoginPage")}
              >
                <Image source={require("../../assets/icons/logout.png")} style={ styles.logoutIcon } />
              </TouchableOpacity>
            ),
            gestureEnabled: false
          })}
        />

        <MainStack.Screen
          name="BookingConfirmation"
          component={BookingConfirmation}
          options={({ navigation }) => ({
            headerTitle: () => <TicketHeader  />,
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => navigation.navigate("LoginPage")}
              >
                <Image source={require("../../assets/icons/logout.png")} style={ styles.logoutIcon } />
              </TouchableOpacity>
            ),
            gestureEnabled: false
          })}
        />
      </MainStack.Navigator>
    </Provider>
  );
};

const TicketHeader = (): ReactElement => {
  return(
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image style={styles.logoIcon} source={require("../../assets/icons/logo.png")} />
        <Text style={styles.headerLogoText}> Government of Kerala </Text>
      </View>

      <View style={styles.headingContainer}>
        <Text style={styles.headerLogoHeading}> 
          Kerala State Water Transport Department
        </Text>
      </View>
    </View>
  );
};

const AppContainer = () :ReactElement => {
  return(
    <NavigationContainer theme={MyTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: -10
  },
  headingContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 13
  },
  iconRotate: {
    marginLeft: 13
  },
  logoutIcon: {
    marginRight: 13
  },
  logoIcon: {
    width: 20,
    height: 11,
    marginLeft: 10
  },
  headerLogoText: {
    fontSize: 8,
    marginBottom: 0
  },
  headerLogoHeading: {
    position: "relative",
    fontSize: 12,
    top: -13
  }
});

export default AppContainer;