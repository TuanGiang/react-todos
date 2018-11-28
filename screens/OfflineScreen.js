import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AsyncStorage, FlatList} from 'react-native';
import ArticleItem from '../components/ArticleItem'

import {connect} from 'react-redux';

class OfflineScreen extends Component<Props> {

  static navigationOptions = {
      title: 'Offline',
    };

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

    _keyExtractor = (item, index) => String(item.id);


    _onPressItem = (id: int, path: string) => {
        this.props.navigation.navigate('ArticleOfflineDetailScreen',{path : path, id : id});
     };


     _renderItem = ({item}) => (
       <View style ={styles.item}>
         <ArticleItem style ={styles.item}
           id={item.id}
           key = {String(item.id)}
           title={item.title}
           description ={item.description}
           thumbnail ={item.image}
           onItemPressed={this._onPressItem}
           path = {item.path}
         />
       </View>
    );

    render(){
      return (

          <FlatList style = {styles.container}
            vertical
            data={this.props.offlines}
            keyExtractor={this._keyExtractor}
            renderItem={ this._renderItem}
            ItemSeparatorComponent={this.renderSeparator}
            />
      );
    }
}


const mapStateToProps = (state, ownProps) => {
  return { offlines: state.downloadContent}
}

export default connect(mapStateToProps, null)(OfflineScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
