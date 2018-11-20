import React from 'react';
import {Platform, StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import { downloadContent } from '../actions/action'


class ArticleAction extends React.Component{


  _onDownload = () => {
    this.props.downloadContent(this.props.id, this.props.downloadUrl, this.props.image, this.props.title, this.props.description)
  }

  render(){
    let data = this.props.downloadContents.filter(item => item.id == this.props.id).length;
    if(data > 0){
      return(
        <View style ={styles.item}>
          <Text style={styles.actionChecked}> Offline </Text>
          <TouchableOpacity>
              <Text style={styles.actionNormal}>Share</Text>
          </TouchableOpacity>
        </View>
      );
    }else {
      return(
        <View style ={styles.item}>
        <TouchableOpacity onPress = {this._onDownload}>
            <Text style={styles.actionNormal}>Download</Text>
        </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.actionNormal}>Share</Text>
          </TouchableOpacity>
        </View>
      );

    }

  }
}



const mapStateToProps = (state, ownProps) => {
  return { downloadContents: state.downloadContent}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ downloadContent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAction);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    margin: 5,
  },

  actionNormal: {
    width: 120,
    height: 50,
    paddingTop: 15,
    fontWeight: 'bold',
    color: '#0092f4',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius : 5,
    borderColor: '#0092f4'
  },

  actionChecked: {
    width: 120,
    height: 50,
    paddingTop: 15,
    borderRadius : 5,
    fontWeight: 'bold',
    backgroundColor: '#0092f4',
    textAlign: 'center',
    color: 'white'
  },

});
