import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import * as FirebaseCore from 'expo-firebase-core';

import RootStack from "./signScreens/RootStack";
export default class App extends React.Component {

  render() {
    return (
      <RootStack/>
    );
  }
}
