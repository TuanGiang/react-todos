import React, {Component} from 'react';
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import GradeScreen from '../screens/GradeScreen.js';
import SubjectScreen from '../screens/SubjectScreen.js';
import SubjectDetailScreen from '../screens/SubjectDetailScreen.js';
import ArticleListScreen from '../screens/ArticleListScreen.js';
import ArticleDetailScreen from '../screens/ArticleDetailScreen.js';
import OfflineScreen from '../screens/OfflineScreen.js';
import ArticleOfflineDetailScreen from '../screens/ArticleOfflineDetailScreen.js';

const nav = createDrawerNavigator({
  OfflineScreen : {screen : OfflineScreen},
  GradeScreen: {screen: GradeScreen },
  SubjectScreen: {screen: SubjectScreen },
  SubjectDetailScreen: {screen: SubjectDetailScreen},
  ArticleListScreen: {screen:ArticleListScreen },
  ArticleDetailScreen: {screen:ArticleDetailScreen},
  ArticleOfflineDetailScreen : {screen: ArticleOfflineDetailScreen},
  },
  {
    initialRouteName: 'GradeScreen',
  }
);

export default nav
