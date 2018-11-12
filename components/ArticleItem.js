import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
export default class ArticleItem extends React.Component{
  _onItemPressed = () =>{
    this.props.onItemPressed(this.props.id)
  };


  render(){
    return(
      <TouchableOpacity onPress={this._onItemPressed}>
        <View style ={styles.item}>
          <Image source = {{uri:this.props.thumbnail, cache: 'only-if-cached',}} style = {styles.thumbnail}/>
          <View style = {styles.devider} />
          <View style ={styles.itemDetail}>
            <Text style={styles.itemTitle}>{this.props.title} </Text>
            <Text style={styles.itemDescription}>{this.props.description} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: 80,
  },

  thumbnail: {
    marginTop: 5,
    height: 70,
    width: 70,
  },

  devider : {
    margin: 5,
    borderWidth: 0.5,
    borderColor: "#CED0CE",
  },

  itemDetail: {
    flex: 1,
    flexDirection: 'column',
  },

  itemTitle: {
    fontWeight: 'bold',
    flex: 1,
  },

  itemDescription: {
    flex: 1,
  },

});
