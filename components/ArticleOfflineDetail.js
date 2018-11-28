import React from 'react';
import {Platform, StyleSheet, Text, View,WebView ,ScrollView  } from 'react-native';
import HTMLView from 'react-native-htmlview';
import MathJax from 'react-native-mathjax';
import Katex from 'react-native-katex';
import HTML from 'react-native-render-html';
export default class ArticleOfflineDetail extends React.Component{

  render(){

    return(
      <View style ={styles.item}>

          <MathJax style= {styles.content}
            // HTML content with MathJax support
            html={this.props.content}
            // MathJax config option
            mathJaxOptions={{
              messageStyle: 'none',
              extensions: [ 'tex2jax.js' ],
              jax: [ 'input/TeX', 'output/HTML-CSS' ],
              tex2jax: {
                inlineMath: [ ['$','$'], ['\\(','\\)'] ],
                displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
                processEscapes: true,
              },
              TeX: {
                extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js','noUndefined.js']
              }
            }}
          />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
  },

  itemTitle: {
    fontWeight: 'bold',
    color: '#0092f4',
  },
  content: {
   flex: 1,
 },

  itemDescription: {
    fontWeight: 'bold',
  },

});
