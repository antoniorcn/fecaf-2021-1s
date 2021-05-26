import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const x1 = new Animated.Value(-170);

Animated.timing(x1, 
{
  toValue: 170,
  duration: 5000,
  useNativeDriver: true,
}).start();

function App(props) { 

  const angulo = x1.interpolate({
    inputRange: [-170, 170],
    outputRange: ['0deg', '360deg']
  })

  // const cor = x1.interpolate({
  //   inputRange: [-170, 170],
  //   outputRange: ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 255)']
  // })

  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Animated.Text
        style={{
          transform: [
            { translateX: x1,
              rotate: angulo
            }
          ],
          // backgroundColor: cor
        }}
      >Texto 1</Animated.Text>
    </View>
  );
}

export default App;
