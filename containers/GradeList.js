import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, AsyncStorage} from 'react-native';
import GridView from 'react-native-super-grid';
import GradeItem from '../components/GradeItem';

import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import { fetchGrade } from '../actions/action'

class GradeList extends Component<Props>{

  _keyExtractor = (item, index) => item.tagId;

  _onPressItem = (id: int) => {
    this.props.fetchGrade();
   };

   _renderItem = ({item}) => (
     <View style ={styles.item}>
       <GradeItem style ={styles.item}
         id={item.tagId}
         key = {item.tagId}
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
          data={this.props.grades}
          numColumns={3}
          keyExtractor={this._keyExtractor}
          renderItem={ this._renderItem}
          />
    );
  }

  componentDidMount(){
      this.props.fetchGrade();
  }
}

const mapStateToProps = state => ({
    grades: state.grade
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGrade }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GradeList);

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
