import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreens'
import ISSLocationScreen from './Screens/ISSLocationScreens';
import MeteorScreen from './Screens/MeteorScreens';

const Stack = createStackNavigator()

export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown: false}}>
         <Stack.Screen name = "Home" component = {HomeScreen}/>
         <Stack.Screen name = "ISSLocation" component = {ISSLocationScreen}/>
         <Stack.Screen name = "Meteor" component = {MeteorScreen}/>
          
       </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
