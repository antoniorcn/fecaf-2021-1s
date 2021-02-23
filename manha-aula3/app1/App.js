import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ToastAndroid} from 'react-native';


function executar() { 
  // ToastAndroid.show("Salvo", Toast.LONG);
  alert("Salvo");
}

const estilos = StyleSheet.create(
  {
    bloco: {
      backgroundColor: 'lightyellow',
      borderWidth: 2,
      borderColor: 'gray',
      margin: 3,
      width: 300,
      height: 100,
    }, 
    texto: { 
      fontSize: 30,
      fontFamily: "Times New Roman",
      color: "gray",
    },
    caixaTexto: { 
      margin: 5,
      borderWidth: 2,
      borderColor: "blue",
      backgroundColor: "lightgray",
      height: 50
    }
  }
);

const estiloFonte = {
  fontSize: 30,
  fontFamily: "Times New Roman"
} 


export default function App() {
  return (
    <View>
      <View style={estilos.bloco}>
        <Text style={estilos.texto}>RA</Text>
        <TextInput style={estilos.caixaTexto}
            placeholder="RA do aluno"/>
      </View>
      <View style={estilos.bloco}>
        <Text selectable={false} style={estilos.texto}>Nome</Text>
        <TextInput style={estilos.caixaTexto}
            placeholder="Nome do aluno"/>
      </View>
      <Button title="Gravar"
            disabled={false}
            onPress={
              ()=>{ executar(); }}/>
    </View>
  );
}


