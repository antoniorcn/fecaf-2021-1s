import React, {useState, useEffect} from 'react';
import { Button, Text, TextInput, View } from 'react-native';

class Componente extends React.Component {

    state = {
        contador: 0,
        texto: ""
    } 

    setContador(novoValor) { 
      const novoState = {...this.state};
      novoState.contador = novoValor;
      this.setState(novoState);
    }

    alteraTexto(txt) { 
      const novoState = {...this.state};
      novoState.texto = txt;
      this.setState(novoState);
    }
  
    render() {
      return (
        <View>
        <Text>Texto:</Text>
        <TextInput 
          value={this.state.texto}
          onChangeText={(txt)=>{this.alteraTexto(txt)}}  />
        <Text>Contador: {this.state.contador}</Text>
        <Button title="Incrementar" onPress={()=>{
            this.setContador(this.state.contador + 1);
        }}></Button>
        <Text>Texto Alterado: {this.state.texto}</Text>
        </View>
      );
    }
}

export default Componente;