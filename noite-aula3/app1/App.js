import React from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';


// const estiloView = {  
//   backgroundColor: "red", 
//   height: 100,
//   margin: 20
// }; 

const estilos = StyleSheet.create({ 
  viewPadrao : { 
    backgroundColor: "red", 
    height: 100,
    margin: 20
  },

  textoPadrao : { 
    fontSize: 30,
    textAlign: 'center',
    fontFamily: "Times New Roman"
  },

  textInputPadrao : { 
    backgroundColor: 'lightgray',
    borderColor: "blue",
    borderWidth: 2,
    borderStyle: 'solid'
  }
});

const App1 = () => {
  return (
    <View>
      <View style={estilos.viewPadrao}>
          <Text style={estilos.textoPadrao}>App</Text>
          <TextInput style={estilos.textInputPadrao}
              placeholder="Nome da aplicação1"/>
      </View>
      <View style={estilos.viewPadrao}>
          <Text style={estilos.textoPadrao}
                selectable={false}>App</Text>
          <TextInput style={estilos.textInputPadrao}/>
      </View>
      <Button title="Gravar" onPress={
        () => {alert("Botão apertado")}
      }/>
    </View>
  );
} 


export default App1;
