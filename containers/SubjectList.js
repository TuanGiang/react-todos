import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, AsyncStorage} from 'react-native';
import SubjectItem from '../components/SubjectItem';

export default class SubjectList extends Component<Props>{

  _keyExtractor = (item, index) => String(item.item_id);

  _onPressItem = (id: int, type: int) => {
    this.props.onSubjectPressItem(id, type);
   };

   _renderItem = ({item}) => (
     <View style ={styles.item}>
       <SubjectItem style ={styles.item}
         id={item.item_id}
         type={item.item_type}
         key = {item.item_id}
         title={item.title}
         picture ={item.picture}
         productId = {item.product_id}
         onItemPressed={this._onPressItem}
       />
     </View>
  );

  render(){
    return (
        <FlatList style = {styles.container}
          vertical
          data={this.props.subjects}
          numColumns={3}
          keyExtractor={this._keyExtractor}
          renderItem={ this._renderItem}
          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:10,
    marginLeft: '1.5%',
  },
  item: {
    width: '30%',
    marginLeft: '1.5%',
    marginRight: '1.5%',
  },
});
