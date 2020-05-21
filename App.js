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

import SigninScreen from './src/screens/SigninScreen';

import AccountScreen from './src/screens/Account/AccountScreen';
import ResetPasswordScreen from './src/screens/Account/ResetPasswordScreen';

import ToolScreen from './src/screens/Tool/ToolScreen';
import ProfileScreen from './src/screens/Tool/ProfileScreen';
import ProgramScreen from './src/screens/Tool/ProgramScreen';
import ScoreScreen from './src/screens/Tool/ScoreScreen';
import TuitionScreen from './src/screens/Tool/TuitionScreen';
import UpdateProfileScreen from './src/screens/Tool/UpdateProfileScreen';

import ManagementScreen from './src/screens/ManagementScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as NotificationProvider } from './src/context/NotificationContext';
import { Provider as ProfProvider } from './src/context/ProfContext';
import { setNavigator } from './src/navigationRef';


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen
  }),
  SvFlow: createBottomTabNavigator({
    notiFlow: createStackNavigator({
      Notification: NotificationScreen,
      ShowNotification: ShowNotificationScreen
    }),
    toolFlow: createStackNavigator({
      Tool: ToolScreen,
      Profile: ProfileScreen,
      Program: ProgramScreen,
      Score: ScoreScreen,
      Tuition: TuitionScreen,
      UpdateProfile:UpdateProfileScreen
    }),
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
      CreateNotification: CreateNotificationScreen
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
      <AuthProvider>
        <NotificationProvider>
          <ProfProvider>
            <App ref={(navigator) => { setNavigator(navigator) }} />
          </ProfProvider>
        </NotificationProvider>
      </AuthProvider>
  )
};