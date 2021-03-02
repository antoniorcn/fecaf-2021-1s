import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const estilos = StyleSheet.create({
  caixa : {flex: 1, 
    justifyContent: "flex-start", 
    alignItems: "stretch"},
  // quadro1: {backgroundColor: "red", height:50},
  // quadro2: {backgroundColor: "blue", width:50, height:50},
  // quadro3: {backgroundColor: "green", width:50, height:50}
  cabecalho: {
    justifyContent: "center",
    alignItems: "center"},
  corpo: {
    backgroundColor: "green", 
    flex: 7,
    justifyContent: "space-evenly"
  },
  input: {
    backgroundColor: "white",
    borderColor: "cyan",
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20
  }, 
  titulo: {
    color:"white",
    fontSize: 40}
});
const Tela = (props) => { 
  console.log(props);
  return (
    <View style={estilos.caixa}>
      {/* <View style={estilos.quadro1}></View>
      <View style={estilos.quadro2}></View>
      <View style={estilos.quadro3}></View> */}

      <View style={estilos.cabecalho, 
        {backgroundColor: props.corFundo,
        flex: props.size}}>
        <Text style={estilos.titulo}>Titulo</Text>
      </View>
      <View style={estilos.corpo}>
        <TextInput style={estilos.input}></TextInput>
        <TextInput style={estilos.input}></TextInput>
        <TextInput style={estilos.input}></TextInput>
        <TextInput style={estilos.input}></TextInput>
      </View>
    </View>
  );
}

export default () => { 
  return (
    <View style={{flex: 1}}>
      <Tela corFundo="yellow" size={3}></Tela>
      <Tela corFundo="blue" size={9}></Tela>
    </View>
  )
}