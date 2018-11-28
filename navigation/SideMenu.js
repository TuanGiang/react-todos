import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions, StackActions } from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  clearNavigateToScreen = (route) => () => {
    const resetAction = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: route })],
        });

    this.props.navigation.dispatch(resetAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.navSectionStyle}>
          <TouchableOpacity onPress={this.navigateToScreen('GradeScreen')}>
              <Text style={styles.navItemStyle}>
                GradeScreen
              </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={this.navigateToScreen('SubjectScreen')}>
              <Text style={styles.navItemStyle}>
                SubjectScreen
              </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToScreen('OfflineScreen')}>
            <Text style={styles.navItemStyle}>
              OfflineScreen
            </Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
