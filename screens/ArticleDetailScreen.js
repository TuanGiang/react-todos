import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AsyncStorage, FlatList, TouchableOpacity} from 'react-native';
import ArticleItem from '../components/ArticleItem'

import ArticleAction from '../containers/ArticleAction'
import ArticleDetail from '../components/ArticleDetail'

import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import { fetchArticle } from '../actions/action'

class ArticleDetailScreen extends Component<Props> {

  renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "86%",
            backgroundColor: "#CED0CE",
            marginLeft: "14%"
          }}
        />
      );
    };

    renderHeader = (item) => {
      console.log('aaaaaaaaaa' + JSON.stringify(item));
      if(item!=null){
        return (
          <View  style={styles.header}>
          <ArticleDetail
            title ={item.title}
            description ={item.introtext}
            content ={item.content}/>
          <ArticleAction/>
          </View>
        );
      }

    };


    _keyExtractor = (item, index) => String(item.articleId);

    _onPressItem = (id: int) => {

     };

     _renderItem = ({item}) => (
       <View style ={styles.item}>
         <ArticleItem style ={styles.item}
           id={item.articleId}
           key = {String(item.articleId)}
           title={item.title}
           description ={item.introtext}
           thumbnail ={item.thumbnail}
           onItemPressed={this._onPressItem}
         />
       </View>
    );

    render(){
      const item = this.props.article.articleInfo;
      if(item!=null){
        return (
          <View style ={styles.container}>
          <ArticleDetail
            title ={item.title}
            description ={item.introtext}
            content ={item.content}/>
          <ArticleAction/>
          </View>
        );
      }else{
         return (
          <View style ={styles.container}>
          <Text> Empty</Text>
          </View>);
      }

    }


  componentDidMount(){
    AsyncStorage.getItem('ARTICLE', (err, result) => {
        if(result!=null){
          this.props.fetchArticle(result);
        }
    });
  }

}


const mapStateToProps = (state, ownProps) => {
  return { article: state.article}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArticle }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailScreen);

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
