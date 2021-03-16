import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Coins from './assets/coins.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const estilos = StyleSheet.create({
  principal: { 
    flex: 1,
    flexDirection: 'column',
  },

  cabecalho: {
    flex: 2,
    backgroundColor: '#FFC',
    alignItems: 'stretch',
  },

  corpo: {
    flex: 3,
    backgroundColor: '#CFF'
  },

  imagem: { 
    flex: 1,
    width: '100%',
    resizeMode: 'stretch',
    justifyContent: 'center'
  },

  titulo1: {
    fontSize: 40,
    color: "white",
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20
  }
});

const Lancamento = () => { 
  return(
    <View>
      <Text>Lançamento</Text>
    </View>
  )
}


const Extrato = () => { 
  return(
    <View>
      <Text>Extrato</Text>
    </View>
  )
}

class Principal extends React.Component { 

  render() { 
    return (
      <View style={estilos.principal}>
        <View style={estilos.cabecalho}>
          <ImageBackground source={Coins} style={estilos.imagem}>
            <Text style={estilos.titulo1}>Banco Tira Calças</Text>
          </ImageBackground>
          
        </View>
        <View style={estilos.corpo}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Lançamento" component={Lancamento}/>
              <Tab.Screen name="Extrato" component={Extrato}/>
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </View>
    )
  }
}

export default Principal;
