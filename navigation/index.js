import React, {Component} from 'react';
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import GradeScreen from '../screens/GradeScreen.js';
import SubjectScreen from '../screens/SubjectScreen.js';
import SubjectDetailScreen from '../screens/SubjectDetailScreen.js';
import ArticleListScreen from '../screens/ArticleListScreen.js';
import ArticleDetailScreen from '../screens/ArticleDetailScreen.js';
import OfflineScreen from '../screens/OfflineScreen.js';
import ArticleOfflineDetailScreen from '../screens/ArticleOfflineDetailScreen.js';

import SideMenu from './SideMenu';

const grade = createStackNavigator({
    GradeScreen: {screen: GradeScreen },
  },
  {
    initialRouteName: 'GradeScreen',
  });

const subject = createStackNavigator({
  SubjectScreen: {screen: SubjectScreen },
  SubjectDetailScreen: {screen: SubjectDetailScreen},
  ArticleListScreen: {screen:ArticleListScreen },
  ArticleDetailScreen: {screen:ArticleDetailScreen},
  },
  {
    initialRouteName: 'SubjectScreen',
});

const offline = createStackNavigator({
    OfflineScreen : {screen : OfflineScreen},
    ArticleOfflineDetailScreen : {screen: ArticleOfflineDetailScreen},
  },
  {
    initialRouteName: 'OfflineScreen',

  });

const nav = createDrawerNavigator({
  GradeScreen: {screen: grade },
  SubjectStackScreen: {screen: subject },
  OfflineScreen : {screen : offline},
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
    defaultNavigationOptions: {
       headerTintColor: '#fff',
       headerStyle: {
         backgroundColor: '#000',
       },
     },
  }
);

export default nav
