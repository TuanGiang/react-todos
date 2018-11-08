import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import GradeScreen from '../screens/GradeScreen.js';

const nav = createStackNavigator({
  GradeScreen: { screen: GradeScreen },
  },
  {
    initialRouteName: 'GradeScreen',
  }
);

export default nav
