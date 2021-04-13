import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ImagePizza from './assets/imagem-pizza.jpg';
const Tab = createBottomTabNavigator();

function NovoPedido() { 
  return (
    <View style={estilos.viewFormulario}>
      <Text style={estilos.titulo}>Novo Pedido</Text>
      <View style={estilos.viewInput}>
        <Text style={estilos.label}>Cliente</Text>
        <TextInput style={estilos.input}/>
      </View>
      <View style={estilos.viewInput}>
        <Text style={estilos.label}>Sabor</Text>
        <TextInput style={estilos.input}/>
      </View>
      <View style={estilos.viewInput}>
        <Text style={estilos.label}>Tamanho</Text>
        <TextInput style={estilos.input}/>
      </View>
      <View style={estilos.viewInput}>
        <Text style={estilos.label}>Quantidade</Text>
        <TextInput style={estilos.input}/>
      </View>
    </View>
  );
}

function ListaPedidos() { 
  return (
    <View style={estilos.lista}>
      <View style={estilos.listaItem}>
        <Text style={estilos.listaTitulo}>Nome do Cliente</Text>
        <View style={estilos.listaConteudo}>
          <Text style={estilos.listaConteudoItem}>Quantidade</Text>
          <Text style={estilos.listaConteudoItem}>Sabor</Text>
          <Text style={estilos.listaConteudoItem}>Tamanho</Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={estilos.principal}>
      <Image source={ImagePizza} style={estilos.imagemCabecalho}></Image>
      <View style={estilos.viewNavigation}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Novo Pedido" component={NovoPedido}/>
            <Tab.Screen name="Listar Pedidos" component={ListaPedidos}/>
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  imagemCabecalho: { 
    width: "100%",
    flex: 2,
  },
  viewNavigation: { 
    flex: 3,
  },
  label: { 
    flex: 1,
    fontWeight: 'bold',
  },
  input: { 
    flex: 3,
    backgroundColor: "#FFC",
    borderColor: "#CCF",
    borderWidth: 1,
  },
  viewInput: { 
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
  },
  titulo: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewFormulario: { 
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 10,
  },
  lista: { 
    flex: 1,
  },
  listaItem: { 
    flex: 1,
  },
  listaTitulo: { 
    fontWeight: 'bold'
  },
  listaConteudo: {
    flexDirection: 'row',
  },
  listaConteudoItem: { 
    flex: 1,
  }

});
