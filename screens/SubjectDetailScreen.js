import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AsyncStorage,SectionList, TouchableOpacity} from 'react-native';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import { fetchSubjectDetail } from '../actions/action'

class SubjectDetailScreen extends Component<Props> {

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
              <TouchableOpacity>
                <View style={styles.item}>
                  <Text key={index}>{item.title}</Text>
                </View>
              </TouchableOpacity>
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
          this.props.fetchSubjectDetail('1',result);
        }
    });
  }

}


const mapStateToProps = (state, ownProps) => {
  return { subjectDetail: state.subjectDetail}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSubjectDetail }, dispatch)
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
