import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import GradeList from '../containers/GradeList'
export default class GradeScreen extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <GradeList/>
      </View>
    );
  }

   // render() {
   //   return(
   //     <View style={styles.container}>
   //
   //      <Text> AAAAAAAAA </Text>
   //     </View>
   //   );
   // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
