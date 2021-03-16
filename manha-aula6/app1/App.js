import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import ImgRoupas from './assets/roupas.jpg';
import axios from 'axios';

const estilos = StyleSheet.create(
  {
    principal : { 
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch'
    },
    viewImagem: { 
      flex: 2,
      backgroundColor: 'red',
    },
    imagem : { 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    formulario: {
      flex: 3,
      backgroundColor: '#FFC',
      justifyContent: 'space-evenly',
      alignItems: 'stretch',
    },
    titulo1: { 
      textAlign: 'center',
      fontSize: 40,
      color: 'white',
      backgroundColor: 'rgba(170, 170, 170, 0.7)',
      marginLeft: 30,
      marginRight: 30
    },
    input: { 
      borderColor: '#CCF',
      borderWidth: 2,
      backgroundColor: 'white',
      marginLeft: 20,
      marginRight: 20,
    },
    botao: { 
      marginLeft: 20,
      marginRight: 20,
    }
  }
);

class LojaRoupas extends React.Component { 

  state = {
    roupa: {
      tipo: "",
      estilo: "",
      tamanho: ""
    }
  } 

  ler() { 
    axios.get('https://jsonplaceholder.typicode.com/albums/1').then(
      (resposta) => {
        // console.log(resposta.data);
        const novoState = {...this.state};
        novoState.roupa.tipo = "" + resposta.data.id;
        novoState.roupa.estilo = resposta.data.title;
        novoState.roupa.tamanho = "" + resposta.data.userId;
        this.setState(novoState);
      }
    );
  }

  render() { 
    const roupa = this.state.roupa;
    return(
      <View style={estilos.principal}>
        <View style={estilos.viewImagem}>
          <ImageBackground source={ImgRoupas} style={estilos.imagem}>
            <Text style={estilos.titulo1}>Loja de Roupas</Text>
          </ImageBackground>
        </View>
        <View style={estilos.formulario}>
          <TextInput style={estilos.input} 
                      placeholder="Tipo da Roupa"
                      value={roupa.tipo}/>
          <TextInput style={estilos.input} 
                      placeholder="Estilo da Roupa"
                      value={roupa.estilo}/>
          <TextInput style={estilos.input}
                      placeholder="Tamanho"
                      value={roupa.tamanho}/>
          <Button style={estilos.botao} 
                  title="Ler"
                  onPress={()=>{this.ler();}}></Button>
        </View>
      </View>
    );
  }
}


export default LojaRoupas;