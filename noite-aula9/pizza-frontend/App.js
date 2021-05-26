import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import ImagemPizza from './assets/imagem-pizza.jpg';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Formulario() { 
  return(
      <View style={estilos.formView}>
        <Text>Novo Pedido de Pizza</Text>
        <View style={estilos.viewTextInput}>
          <Text style={estilos.label}>Nome do Cliente</Text>
          <TextInput style={estilos.input}/>
        </View>
        <View style={estilos.viewTextInput}>
          <Text style={estilos.label}>Sabor da Pizza</Text>
          <TextInput style={estilos.input}/>
        </View>  
        <View style={estilos.viewTextInput}>
          <Text style={estilos.label}>Quantidade</Text>
          <TextInput style={estilos.input}/>
        </View>
        <View style={estilos.viewTextInput}>
          <Text style={estilos.label}>Tamanho</Text>
          <TextInput style={estilos.input}/>
        </View>     
        <Button title="Gravar"/>      
      </View>
  );
}

function ListaPedidos() { 
  return (
    <View style={estilos.listaPedidos}>
      <View>
        <Text>Nome Cliente</Text>
        <Text>Sabor</Text>
        <Text>Quantidade</Text>
        <Text>Tamanho</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={estilos.container}>
      <Image style={estilos.image} source={ImagemPizza}/>
      <View style={estilos.viewDados}>
        <NavigationContainer> 
          <Tab.Navigator>
            <Tab.Screen name="Novo Pedido" component={Formulario}/>
            <Tab.Screen name="Lista Pedidos" component={ListaPedidos}/>
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  label: { 
    flex: 1,
  },
  input: { 
    flex: 3,
    backgroundColor: '#FFC',
    borderWidth: 1,
    borderColor: '#CCF',
  },
  viewTextInput: { 
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#FCC',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  formView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  }, 
  image: { 
    flex: 2,
    width: '100%',
    resizeMode: 'cover',
  },
  listaPedidos: { 
    flex: 1,
  },
  viewDados: { 
    flex: 3,
    marginLeft: 15,
    marginRight: 15,
  }
});
