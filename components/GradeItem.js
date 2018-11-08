import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
export default class GradeItem extends React.Component{
  _onItemPressed = () =>{
    this.props.onItemPressed(this.props.id)
  };


  render(){
    return(
      <TouchableOpacity onPress={this._onItemPressed}>
        <View style ={styles.item}>
          <Image source = {{uri:this.props.picture, cache: 'only-if-cached',}} style = {styles.fixedRatio}/>
          <Text style={styles.itemTitle}>{this.props.title} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
  },

  fixedRatio: {
    width: '90%',
    flex: 1,
    aspectRatio: 1,
  },

  itemTitle: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    flexDirection: 'column',
  },

});
