import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AsyncStorage, FlatList, TouchableOpacity} from 'react-native';
import ArticleItem from '../components/ArticleItem'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import { fetchArticleList } from '../actions/action'

class ArticleListScreen extends Component<Props> {

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

    _keyExtractor = (item, index) => String(item.articleId);
    _storeData = async (detail) => {
      try {
        await AsyncStorage.setItem('ARTICLE', String(detail));
        this.props.navigation.navigate('ArticleDetailScreen');
      } catch (error) {
        console.log(error);
      }
    }

    _onPressItem = (id: int) => {
        this._storeData(id);
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
      return (
          <FlatList style = {styles.container}
            vertical
            data={this.props.articles}
            keyExtractor={this._keyExtractor}
            renderItem={ this._renderItem}
            ItemSeparatorComponent={this.renderSeparator}
            />
      );
    }


  componentDidMount(){
    AsyncStorage.getItem('SUBJECT-DETAIL', (err, result) => {
        if(result!=null){
          this.props.fetchArticleList(result);
        }
    });
  }

}


const mapStateToProps = (state, ownProps) => {
  return { articles: state.articleList}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArticleList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListScreen);

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
    height: 50,
    justifyContent: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    color: '#0092f4',
  }

});
