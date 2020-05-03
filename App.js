import React, { Component } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SigninScreen from './src/screens/SigninScreen';
import AccountScreen from './src/screens/AccountScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import ToolScreen from './src/screens/ToolScreen';
import ManagementScreen from './src/screens/ManagementScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen
  }),
  SvFlow: createBottomTabNavigator({
    Notification: NotificationScreen,
    Tool: ToolScreen,
    Account: AccountScreen
  }),
  QtvFlow: createBottomTabNavigator({
    Notification: NotificationScreen,
    Management: ManagementScreen,
    Account: AccountScreen
  })
});
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </AuthProvider>
  )
};