import * as React from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

const y = new Animated.Value(0);
const x = new Animated.Value(0);

Animated.sequence([
  Animated.timing(y, {
    duration: 2000,
    useNativeDriver: false,
    toValue: 450,
  }),

  Animated.timing(x, { 
    duration: 2000,
    useNativeDriver: false,
    toValue: 250,
  })
]).start()

export default function App() {
  return (
    <View>
      <Animated.View style={{
        height: 50,
        width: 50,
        top: y,
        left: x,
        backgroundColor: 'green',
      }}/>
    </View>
  );
}