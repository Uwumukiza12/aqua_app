import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import WelcomeScreen from './app/WelcomeScreen';
//import {  StyleSheet, Text , TouchableWithoutFeedback,Image,SafeAreaView, Button, Alert, Platform, View} from 'react-native';
import { NavigationContainer }  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './app/ProfileScreen';
import LoginScreen from './app/LoginScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Orders from './app/Orders';
import TestApi from './app/TestApi';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


export default function App() {
  //console.log("Hello Marcel");
  return (
    <>
      
    {/* <NavigationContainer>
      <Stack.Navigator initilRouteName="WelcomeScreen">
        <Stack.Screen 
        name="WelcomeScreen"
        component = {WelcomeScreen}
        options = {{title: 'Welcome'}} />
        <Stack.Screen name = "ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name = "LoginScreen" component={LoginScreen} />
      {/* <WelcomeScreen /> 
      </Stack.Navigator>
    </NavigationContainer> */}

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="WelcomeScreen">
      <Drawer.Screen name="Home" component={WelcomeScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Orders" component={Orders} />
        <Drawer.Screen name="TestApi" component={TestApi} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}
