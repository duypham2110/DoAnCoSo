import React, { Component } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import NotificationScreen from './src/screens/Notification/NotificationScreen';
import AddNotificationScreen from './src/screens/Notification/AddNotificationScreen';
import ShowNotificationScreen from './src/screens/Notification/ShowNotificationScreen';
import CreateNotificationScreen from './src/screens/Notification/CreateNotificationScreen';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';

import ToolScreen from './src/screens/ToolScreen';

import ManagementScreen from './src/screens/ManagementScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as NotificationProvider } from './src/context/NotificationContext';
import { setNavigator } from './src/navigationRef';


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen
  }),
  SvFlow: createBottomTabNavigator({
    Notification: NotificationScreen,
    Tool: ToolScreen,
    accountFlow: createStackNavigator({
      Account: AccountScreen,
      ResetPassword: ResetPasswordScreen
    })
  }),
  QtvFlow: createBottomTabNavigator({
    notiFlow: createStackNavigator({
      Notification: NotificationScreen,
      AddNotification: AddNotificationScreen,
      ShowNotification: ShowNotificationScreen,
      CreateNotification:CreateNotificationScreen
    }),
    Management: ManagementScreen,
    accountFlow: createStackNavigator({
      Account: AccountScreen,
      ResetPassword: ResetPasswordScreen
    })
  })
});
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <NotificationProvider>
      <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </AuthProvider>
    </NotificationProvider>
  )
};