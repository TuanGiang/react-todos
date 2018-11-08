/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import Navigation from './navigation';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store = {store}>
        <View style={styles.container}>
          <Navigation/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
