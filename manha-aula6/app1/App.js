import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import ImgRoupas from './assets/roupas.jpg';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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
    navigator : { 
      flex: 3,
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

const RoupaItem = (props) => { 
  return (
    <View>
      <Text>Tipo: {props.roupa.tipo}</Text>
      <Text>Estilo: {props.roupa.estilo}</Text>
      <Text>Tamanho: {props.roupa.tamanho}</Text>
    </View>
  )
}

class ListarRoupas extends React.Component { 

  state = {
    listaRoupas: []
  }

  componentDidMount() { 
    axios.get('https://fecaf-app1.herokuapp.com/roupas').then(
      (resposta) => {
        const novoState = {...this.state};
        novoState.listaRoupas = [...resposta.data];
        this.setState(novoState);
      }
    );
  }

  render() {
    const roupasDisplay = [];
    this.state.listaRoupas.forEach((element, indice) => {
      roupasDisplay.push(
          <RoupaItem roupa={element} key={indice}></RoupaItem>
      );
    });    

    return(
      <View>
        {roupasDisplay}
      </View>
    );
  }
}

class LojaRoupas extends React.Component { 

  state = {
    roupa: {
      tipo: "",
      estilo: "",
      tamanho: ""
    }
  } 

  roupa() {
    // const roupa = this.state.roupa;
    return(
      <View style={estilos.formulario}>
        <TextInput style={estilos.input} 
                    placeholder="Tipo da Roupa"
                    //value={roupa.tipo}
                    />
        <TextInput style={estilos.input} 
                    placeholder="Estilo da Roupa"
                    //value={roupa.estilo}
                    />
        <TextInput style={estilos.input}
                    placeholder="Tamanho"
                    //value={roupa.tamanho}
                    />
        <Button style={estilos.botao} 
                title="Gravar"
                //onPress={()=>{this.ler();}}
                ></Button>
      </View>
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
        <View style={estilos.navigator}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Roupa" component={this.roupa}/>
              <Tab.Screen name="Lista" component={ListarRoupas}/>
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </View>
    );
  }
}


export default LojaRoupas;