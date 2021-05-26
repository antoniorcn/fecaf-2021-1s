import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


export default class App extends React.Component {
  // state = { 
  //   x: 10,
  // }
  x = new Animated.Value(10);

  render() {
    Animated.timing(this.x, { 
      toValue: 200,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    return (
      <View>
        <Animated.Text style={{
          position: 'absolute',
          top: 100,
          left: this.x,
        }}>HelloWorld</Animated.Text>
        {/* <TouchableHighlight
        style={{
          position: 'absolute',
          top: 200
          }}
        onPress={
          ()=>{
            this.setState({x: this.state.x + 20});
          console.log(this.state.x);
          }
        }> */}
          {/* <Text>Incrementar</Text>
        </TouchableHighlight> */}
        <StatusBar style="auto" />
      </View>
    );
  }
}
