import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const estilos = StyleSheet.create({
  red : { 
    width: 50,
    height: 50,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "red"
  },
  green : {
    width: 50,
    height: 50,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "green"
  },
  blue : { 
    width: 50,
    height: 50,
    borderColor: "black",
    borderWidth: 2, 
    backgroundColor: "blue"
  },
  container: { 
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

// const QuadroCaixas = (props) => { 
//   return (
//     <View style={props.estilo}>
//       <View style={estilos.red}></View>
//       <View style={estilos.green}></View>
//       <View style={estilos.blue}></View>
//     </View>
//   );
// }

const QuadroCaixas = props => 
  <View style={props.estilo}>
    <View style={estilos.red}></View>
    <View style={estilos.green}></View>
    <View style={estilos.blue}></View>
  </View>

export default function App() {
  return (
    <View style={{flex: 1}}>
      <QuadroCaixas estilo={{flex: 1, flexDirection: "row"}}/>
      <QuadroCaixas estilo={{flex: 1, flexDirection: "column"}}/>
      <QuadroCaixas estilo={{flex: 1, flexDirection: "column"}}/>
    </View>
  );
}


