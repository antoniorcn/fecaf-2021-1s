import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import ImagemPizza from './assets/imagem-pizza.jpg';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios';

const Tab = createBottomTabNavigator();

function Formulario(props) { 
  return(
      <View style={estilos.formView}>
        <Text>Novo Pedido de Pizza</Text>
        <View style={estilos.viewTextInput}>
          <Text style={estilos.label}>Nome do Cliente</Text>
          <TextInput  style={estilos.input} 
                      value={props.pedido.cliente}
                      onChangeText={(txt)=>{props.mudarTexto(txt, 'cliente')}}/>
        </View>
        <View style={estilos.viewTextInput}>
          <Text style={estilos.label}>Sabor da Pizza</Text>
          <TextInput  style={estilos.input} 
                      value={props.pedido.sabor}
                      onChangeText={(txt)=>{props.mudarTexto(txt, 'sabor')}}/>
        </View>  
        <View style={estilos.viewTextInput}>
          <Text style={estilos.label}>Quantidade</Text>
          <TextInput  style={estilos.input} 
                      value={props.pedido.quantidade}
                      onChangeText={(txt)=>{props.mudarTexto(txt, 'quantidade')}}/>
        </View>
        <View style={estilos.viewTextInput}>
          <Text style={estilos.label}>Tamanho</Text>
          <TextInput  style={estilos.input} 
                      value={props.pedido.tamanho}
                      onChangeText={(txt)=>{props.mudarTexto(txt, 'tamanho')}}/>
        </View>     
        <Button title="Gravar"/>      
      </View>
  );
}

function ListaPedidos(props) {
  console.log("Lista Inicial =>", props.pedidos);
  const listaDisplay = props.pedidos.map(element => {
    return (
      <View style={estilos.listaItem}>
        <Text>{element.cliente}</Text>
        <Text>{element.sabor}</Text>
        <Text>{element.quantidade}</Text>
        <Text>{element.tamanho}</Text>
      </View>
    ); 
  }); 
  console.log("Lista final =>", listaDisplay);

  return (
    <View style={estilos.listaPedidos}>
      {listaDisplay}
    </View>
  );
}

class App extends React.Component {

  state = { 
    lista: [
      {cliente: "João Silva", sabor: "Mussarela", tamanho: "Médio", quantidade: 1},
      {cliente: "Maria Silva", sabor: "Calabresa", tamanho: "Médio", quantidade: 1}
    ],

    pedidoAtual: { 
      cliente: "", 
      sabor: "", 
      tamanho: "", 
      quantidade: "",
    }
  }

  atualizarLista() { 

  }

  inputChange(texto, campo) { 
    const novoState = {...this.state};
    novoState.pedidoAtual[campo] = texto;
    this.setState(novoState);
  }

  render() {
    return (
      <View style={estilos.container}>
        <Image style={estilos.image} source={ImagemPizza}/>
        <View style={estilos.viewDados}>
          <NavigationContainer> 
            <Tab.Navigator>
              <Tab.Screen name="Novo Pedido">
                {()=><Formulario pedido={this.state.pedidoAtual}
                          mudarTexto={(txt, campo)=>{this.inputChange(txt, campo)}}
                />}
              </Tab.Screen>
              <Tab.Screen name="Lista Pedidos">
                {()=><ListaPedidos pedidos={this.state.lista}/>}
              </Tab.Screen>
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </View>
    );
  }
}

export default App;

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
  listaItem: { 
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#33F',
  },
  viewDados: { 
    flex: 3,
    marginLeft: 15,
    marginRight: 15,
  }
});
