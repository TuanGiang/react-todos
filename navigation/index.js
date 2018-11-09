import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import GradeScreen from '../screens/GradeScreen.js';
import SubjectScreen from '../screens/SubjectScreen.js';
const nav = createStackNavigator({
  GradeScreen: { screen: GradeScreen },
  SubjectScreen: { screen: SubjectScreen },
  },
  {
    initialRouteName: 'GradeScreen',
  }
);

export default nav
