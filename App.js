import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import NotificationScreen from './src/screens/Notification/NotificationScreen';
import ShowNotificationScreen from './src/screens/Notification/ShowNotificationScreen';
import AddNotificationScreen from './src/screens/Notification/AddNotificationScreen';
import CreateNotificationScreen from './src/screens/Notification/CreateNotificationScreen';
import StudentNotiScreen from './src/screens/Notification/Student/StudentNotiScreen';
import StudentShowNotiScreen from './src/screens/Notification/Student/StudentShowNotiScreen';

import SigninScreen from './src/screens/SigninScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

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


const toolFlow = createStackNavigator({
  Tool: ToolScreen,
  Profile: ProfileScreen,
  Program: ProgramScreen,
  Score: ScoreScreen,
  Tuition: TuitionScreen,
  UpdateProfile: UpdateProfileScreen
})

const studentNotiFlow = createStackNavigator({
  StudentNoti: StudentNotiScreen,
  StudentShowNoti: StudentShowNotiScreen
})

const accountFlow= createStackNavigator({
  Account: AccountScreen,
  ResetPassword: ResetPasswordScreen
})

const qtvNotiFlow= createStackNavigator({
  Notification: NotificationScreen,
  AddNotification: AddNotificationScreen,
  ShowNotification: ShowNotificationScreen,
  CreateNotification: CreateNotificationScreen
})

const managementFlow= createStackNavigator({
    Management: ManagementScreen
})

toolFlow.navigationOptions = {
  title: 'Công cụ',
  tabBarIcon: <MaterialCommunityIcons name="toolbox-outline" size={24} color="black" />
}

managementFlow.navigationOptions = {
  title: 'Quản lý',
  tabBarIcon: <MaterialCommunityIcons name="toolbox-outline" size={24} color="black" />
}

studentNotiFlow.navigationOptions = {
  title: 'Thông báo',
  tabBarIcon: <Ionicons name="ios-notifications-outline" size={24} color="black" />
}

qtvNotiFlow.navigationOptions = {
  title: 'Thông báo',
  tabBarIcon: <Ionicons name="ios-notifications-outline" size={24} color="black" />
}

accountFlow.navigationOptions = {
  title: 'Tài khoản',
  tabBarIcon: <MaterialIcons name="person-outline" size={24} color="black" />
}
//<Ionicons name="ios-person" size={24} color="black" />



const switchNavigator = createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen
  }),
  SvFlow: createBottomTabNavigator({
    studentNotiFlow,
    toolFlow,
    accountFlow
  }),
  QtvFlow: createBottomTabNavigator({
    qtvNotiFlow,
    managementFlow,
    accountFlow
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