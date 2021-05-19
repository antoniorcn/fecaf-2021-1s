import * as React from 'react';
import { Animated, Button, Text, View, StyleSheet } from 'react-native';

const x1 = new Animated.Value(0);

const direita = Animated.timing(x1, { 
  toValue: 250,
  useNativeDriver: false,
  duration: 3000,
});

const esquerda = Animated.timing(x1, { 
  toValue: 0,
  useNativeDriver: false,
  duration: 3000,
});
export default function App() {
  return (
    <View>
      <Animated.View style={{
        width: 75,
        height: 75,
        top: 150,
        backgroundColor: 'red',
        left: x1,
      }} />
      <Button title="Esquerda" onPress={
        ()=>{esquerda.start();}
      }/>
      <Button title="Direita" onPress={
        ()=>{direita.start();}
      }/>
    </View>
  );
}