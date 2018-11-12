import React from 'react';
import {Platform, StyleSheet, Text, View ,TouchableOpacity } from 'react-native';

import HTMLView from 'react-native-htmlview';

export default class ArticleItem extends React.Component{
  _onItemPressed = () =>{
    this.props.onItemPressed(this.props.id)
  };

  render(){
    return(
      <View style ={styles.item}>

          <TouchableOpacity>

              <Text style={styles.actionNormal}>Download</Text>

          </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.actionNormal}>Share</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
  },

  actionNormal: {
    width: 120,
    height: 50,
    paddingTop: 15,
    flex: 1,
    fontWeight: 'bold',
    color: '#0092f4',
    textAlign: 'center',
  },

  actionChecked: {
    width: 120,
    height: 50,
    paddingTop: 15,
    flex: 1,
    fontWeight: 'bold',
    color: '#0092f4',
    textAlign: 'center',
  },

});
