import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import GradeScreen from '../screens/GradeScreen.js';
import SubjectScreen from '../screens/SubjectScreen.js';
import SubjectDetailScreen from '../screens/SubjectDetailScreen.js';
import ArticleListScreen from '../screens/ArticleListScreen.js';
import ArticleDetailScreen from '../screens/ArticleDetailScreen.js';
const nav = createStackNavigator({
  GradeScreen: { screen: GradeScreen },
  SubjectScreen: { screen: SubjectScreen },
  SubjectDetailScreen: {screen: SubjectDetailScreen},
  ArticleListScreen: {screen:ArticleListScreen },
  ArticleDetailScreen: {screen:ArticleDetailScreen},
  },
  {
    initialRouteName: 'GradeScreen',
  }
);

export default nav
