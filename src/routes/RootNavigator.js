import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreenName, LoginScreenName} from '../configs/BaseValue';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';

const RootStack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={LoginScreenName}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <RootStack.Screen name={LoginScreenName} component={LoginScreen} />
      <RootStack.Screen name={HomeScreenName} component={HomeScreen} />
    </RootStack.Navigator>
  );
}
