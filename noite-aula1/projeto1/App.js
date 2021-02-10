import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, ToastAndroid, View } from 'react-native';

// function apertar() { 
//   ToastAndroid.showWithGravity("Apertado", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
// }

function App() {
  return (
    <View style={styles.container}>
      <Text>Primeiro programa do Antonio</Text>
      <StatusBar style="auto" />
      {/* <Button title="Ok" onPress={apertar()}/> */}
      <Button title="Ok" onPress={ () => {ToastAndroid.show("Apertado", ToastAndroid.SHORT)} }/>
    </View>
  );
}


// export default () => {
//   return (
//         <View style={styles.container}>
//           <Text>Função feita com Arrow Function Anonima</Text>
//           <StatusBar style="auto" />
//         </View>
//       );  
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;