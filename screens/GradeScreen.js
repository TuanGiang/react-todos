import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AsyncStorage} from 'react-native';
import GradeList from '../containers/GradeList'

import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import { initOffline } from '../actions/action'

class GradeScreen extends Component<Props> {
  static navigationOptions = {
      title: 'Pick Grade',
    };

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

  componentDidMount(){
      this.props.initOffline();
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initOffline }, dispatch)
}

export default connect(null, mapDispatchToProps)(GradeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
