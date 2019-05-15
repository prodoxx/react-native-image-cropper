
import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Slider,
  ScrollView,
  AppRegistry,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

import ImageCrop from './src/ImageCrop'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: 'https://scontent.fbze1-1.fna.fbcdn.net/v/t1.0-9/60085092_600047273827187_1143021557744926720_o.jpg?_nc_cat=109&_nc_ht=scontent.fbze1-1.fna&oh=47a7942ff6be23c7ab511a9c6ae1600a&oe=5D6915BB',
      height: 200,
      width: Dimensions.get('window').width,
      zoom: 50,
      showNew: true,
      newImage: 'https://scontent.fbze1-1.fna.fbcdn.net/v/t1.0-9/60085092_600047273827187_1143021557744926720_o.jpg?_nc_cat=109&_nc_ht=scontent.fbze1-1.fna&oh=47a7942ff6be23c7ab511a9c6ae1600a&oe=5D6915BB',
    };
  }

  render() {
    return (
      <ScrollView>
        <View>
          <ImageCrop 
            ref={'cropper'}
            image={this.state.image}
            cropHeight={this.state.height}
            cropWidth={this.state.width}
            zoom={this.state.zoom}
            centerX={20}
            centerY={50}
            panToMove={false}
            pinchToZoom={false}
          />
          <View style={{flex: 1, marginTop: 20}}>
            <Slider
              value={this.state.zoom}
              onValueChange={value => this.setState({zoom: value})}
              maximumValue={100}
              minimumValue={0}
              step={0.1}
            />
            <TouchableOpacity onPress={this.capture.bind(this)}>
              <View style={{flex: 1, alignItems: "center", justifyContent: "center",marginTop: 20}}>
                <Text style={{color: "grey", padding: 10}}>CAPTURE</Text>
              </View>
            </TouchableOpacity>

            <Image source={{ uri: this.state.newImage }} style={{height: this.state.height, width: this.state.width}} />

          </View>
        </View>
      </ScrollView>
    );
  }
  capture(){
    this.refs.cropper.crop()
    .then(res =>{
      this.setState({
        showNew: true,
        newImage: res,
      });
    })
  }
}


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
