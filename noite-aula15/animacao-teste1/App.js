import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import fecafImage from './assets/fecaf.png';
const y = new Animated.Value(20);
const y2 = new Animated.Value(750);

export default function App() {
  Animated.timing(y, {
    toValue: 340,
    duration: 5000,
    useNativeDriver: false,
  }).start();
 
  // Animated.spring(y, {
  //   toValue: 500,
  //   // speed: 1,
  //   // bounciness: 1,
  //   friction: 5,
  //   tension: 40,
  //   useNativeDriver: false,
  // }).start();

  // Animated.decay(y, {
  //   toValue: 500,
  //   velocity: 1,
  //   useNativeDriver: false,
  // }).start();

  Animated.timing(y2, { 
    toValue: 350,
    duration: 5000,
    useNativeDriver: false,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.View style={{
        backgroundColor: 'red',
        width: 50,
        height: 50,
        top: 300,
        left: 200,
      }}>

      </Animated.View>
      <Animated.Text style={{
        top: y,
      }}>Hello World</Animated.Text>
      <Animated.Image source={fecafImage}
      style={{
        top: y2,
      }}></Animated.Image>
      {/* <Animated.Text style={{
        top: y2,
      }}>Fecaf</Animated.Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
