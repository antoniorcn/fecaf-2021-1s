import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const y = new Animated.Value(-350);
const x = new Animated.Value(-160);

const animacao = Animated.sequence([
  Animated.decay(y, {
      toValue: 350,
      velocity: 1.5,
      useNativeDriver: true,
    }),

  Animated.decay(x, {
    toValue: 160,
    velocity: 0.6,
    useNativeDriver: true,
  }),

  Animated.timing(y, {
    toValue: -350,
    duration: 3000,
    useNativeDriver: true
  }),

  Animated.timing(x, {
    toValue: -160,
    duration: 2000,
    useNativeDriver: true
  })
]);

function App(props) { 

  return (
    <View style={{  flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center'}}>
      <Animated.Text
        style={{
          transform: [
            {
              translateY: y,
            },
            {
              translateX: x
            }
          ]
        }}
      >HelloWorld</Animated.Text>
      <Button title="Circular" onPress={
        ()=>{ 
              animacao.reset();
              animacao.start();
            }
      }/>
    </View>
  );

}

export default App;
