import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AsyncStorage} from 'react-native';
import {TitleBar} from 'react-native-awesome-viewpager';
import SubjectList from '../containers/SubjectList';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import { fetchSubject } from '../actions/action'

class SubjectScreen extends Component<Props> {
  static navigationOptions = {
      title: 'Pick Subject',
    };
constructor(props){
  super(props);
  this.state = {alwayUpdate: true};
}

_storeData = async (grade) => {
  try {
    await AsyncStorage.setItem('SUBJECT', String(grade));
    this.props.navigation.navigate('SubjectDetailScreen');
  } catch (error) {
    console.log(error);
  }
}

_onSubjectPressItem = (id: int, type: int) => {
    this._storeData(id);
 };

render() {
    if(this.props.subjects!=null && this.props.subjects.length>0){
      return (
        <TitleBar style={styles.container} titles={this.props.subjects.map((subject) => subject.title)}>
        {this.props.subjects.map((subject)=>{
            return (
              <View key ={subject.title}>
                <SubjectList
                  subjects ={subject.list_subject}
                  onSubjectPressItem ={this._onSubjectPressItem}
                />
             </View>
            );
        })}
        </TitleBar>
      );
    }else{
      return (
        <View>
          <Text> Empty </Text>
        </View>
      )
    }

}

  componentDidMount(){
    AsyncStorage.getItem('GRADE', (err, result) => {
        if(result!=null){
          this.props.fetchSubject(result);
        }
    });
  }

}


const mapStateToProps = (state, ownProps) => {
  return { subjects: state.subject}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSubject }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    flex: 1,
    backgroundColor: 'red',
  },

});
