import React from 'react';
import {Platform, StyleSheet, Text, View,WebView ,ScrollView  } from 'react-native';
import HTMLView from 'react-native-htmlview';
import MathJax from 'react-native-mathjax';
import Katex from 'react-native-katex';
import HTML from 'react-native-render-html';
export default class ArticleItem extends React.Component{
  _onItemPressed = () =>{
    this.props.onItemPressed(this.props.id)
  };

  _getContent = (detail) =>{
    return `<!DOCTYPE html>
            <html>
            <head>
            <meta charset="utf-8">
             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css" integrity="sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y" crossorigin="anonymous">

             <!-- The loading of KaTeX is deferred to speed up page rendering -->
             <script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.js" integrity="sha384-K3vbOmF2BtaVai+Qk37uypf7VrgBubhQreNQe9aGsz9lB63dIFiQVlJbr92dw2Lx" crossorigin="anonymous"></script>

             <!-- To automatically render math in text elements, include the auto-render extension: -->
             <script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/contrib/auto-render.min.js" integrity="sha384-kmZOZB5ObwgQnS/DuDg6TScgOiWWBiVt0plIRkZCmE6rDZGrEOQeHM5PcHi+nyqe" crossorigin="anonymous"
                 onload="renderMathInElement(document.body);"></script>
           </head>
            <body>
            ${detail}
            </body>
            </html>
`;
  }
  // <WebView style = {styles.content}
  //   source={{ html: this.props.content }}
// />
//   <HTMLView
//   value={content}
// />
// <ScrollView style={{ flex: 1 }}>
//        <HTML html={content}/>
//    </ScrollView>
  render(){
    return(
      <View style ={styles.item}>
          <Text style={styles.itemTitle}>{this.props.title} </Text>
          <Text style={styles.itemDescription}>{this.props.description} </Text>
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

// <MathJax
//   // HTML content with MathJax support
//   html={'$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$<br><p>This is an equation</p>'}
//   // MathJax config option
//   mathJaxOptions={{
//     messageStyle: 'none',
//     extensions: [ 'tex2jax.js' ],
//     jax: [ 'input/TeX', 'output/HTML-CSS' ],
//     tex2jax: {
//       inlineMath: [ ['$','$'], ['\\(','\\)'] ],
//       displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
//       processEscapes: true,
//     },
//     TeX: {
//       extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js','noUndefined.js']
//     }
//   }}
//   {...WebView props}
// />



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
