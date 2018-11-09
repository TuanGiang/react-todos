import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AsyncStorage} from 'react-native';
import GradeList from '../containers/GradeList'
export default class GradeScreen extends Component<Props> {


  _storeData = async (grade) => {
    try {
      await AsyncStorage.setItem('GRADE', grade);
      this.props.navigation.navigate('SubjectScreen');
    } catch (error) {
      console.log(error);
    }
  }

  _onGradePressItem = (id: int) => {

      this._storeData(id);
   };

  render() {
    return (
      <View style={styles.container}>
        <GradeList
          onGradePressItem = {this._onGradePressItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
