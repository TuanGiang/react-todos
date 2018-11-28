import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AsyncStorage, FlatList, TouchableOpacity} from 'react-native';
import ArticleItem from '../components/ArticleItem'
import RNFS from 'react-native-fs'
import ArticleOfflineDetail from '../components/ArticleOfflineDetail'


export default class ArticleOfflineDetailScreen extends Component<Props> {
  static navigationOptions = {
      title: 'Article Offline',
    };


    constructor(props){
      super(props);
      this.state = {content: ''}
    }

    render(){
        return (
          <View style ={styles.container}>
          <ArticleOfflineDetail
            content ={this.state.content}/>
          </View>
        );
    }


  componentDidMount(){
      const path= this.props.navigation.getParam('path', '');
      const id= this.props.navigation.getParam('id', 0);
      RNFS.readFile(path +'/'+ String(id) +'/index.html', 'utf8')
      .then((contents) => {
        this.setState({content: contents});
      })
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    flex: 1,
    backgroundColor: 'red',
  },
  item: {
    padding: 15,
    backgroundColor: 'white',
  },

  header: {
      flexDirection: 'column',
  },


});
