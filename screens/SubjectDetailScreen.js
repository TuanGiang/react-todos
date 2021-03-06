import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AsyncStorage,SectionList, TouchableOpacity} from 'react-native';
import SubjectDetailItem from '../components/SubjectDetailItem'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import { fetchSubjectDetail, clearSubjectDetail } from '../actions/action'

class SubjectDetailScreen extends Component<Props> {

  constructor(props){
    super(props);
  }
  static navigationOptions = {
      title: 'Pick Lesson',
    };

  _storeData = async (detail) => {
    try {
      await AsyncStorage.setItem('SUBJECT-DETAIL', String(detail));
      this.props.navigation.navigate('ArticleListScreen');
    } catch (error) {
      console.log(error);
    }
  }

  _onPressItem = (id: int) => {
      this._storeData(id);
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

render() {
      const sessionData = this.props.subjectDetail.map((detail) => {
        return {title: detail.title, data : detail.subItems};
      })
      return (
        <View style ={styles.container}>
            <SectionList
            renderItem={({item, index, section}) => (
              <SubjectDetailItem
              id = {item.itemId}
              title = {item.title}
              index ={index}
              onItemPressed={this._onPressItem}/>
            )}
            renderSectionHeader={({section: {title}}) => (
              <View style={styles.header}>
                <Text style={styles.headerTitle}>{title}</Text>
              </View>

            )}
            sections={sessionData}
            keyExtractor={(item, index) => item + index}
            ItemSeparatorComponent={this.renderSeparator}
            />
        </View>
      );
    }


  componentDidMount(){
    AsyncStorage.getItem('SUBJECT', (err, result) => {
        if(result!=null){
          this.props.fetchSubjectDetail(result);
        }
    });
  }

  componentWillUnmount(){
      this.props.clearSubjectDetail();
  }

}


const mapStateToProps = (state, ownProps) => {
  return { subjectDetail: state.subjectDetail}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSubjectDetail, clearSubjectDetail }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectDetailScreen);

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
