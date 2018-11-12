import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class SubjectDetailItem extends React.PureComponent{

  _onItemPressed = () =>{
    this.props.onItemPressed(this.props.id)
  };

  render(){
    return(
      <TouchableOpacity onPress = {this._onItemPressed}>
        <View style={styles.item}>
          <Text key={this.props.index}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: 'white',
  },

});
