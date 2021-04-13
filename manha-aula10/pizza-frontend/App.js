import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ImagePizza from './assets/imagem-pizza.jpg';
import axios from 'axios';

const Tab = createBottomTabNavigator();

function NovoPedido(props) { 
  return (
    <View style={estilos.viewFormulario}>
      <Text style={estilos.titulo}>Novo Pedido</Text>
      <View style={estilos.viewInput}>
        <Text style={estilos.label}>Cliente</Text>
        <TextInput style={estilos.input} value={props.pedido.cliente}
              onChangeText={(txt) => {props.atualizarInput(txt, 'cliente')}}/>
      </View>
      <View style={estilos.viewInput}>
        <Text style={estilos.label}>Sabor</Text>
        <TextInput style={estilos.input} value={props.pedido.sabor}
              onChangeText={(txt) => {props.atualizarInput(txt, 'sabor')}}/>
      </View>
      <View style={estilos.viewInput}>
        <Text style={estilos.label}>Tamanho</Text>
        <TextInput style={estilos.input} value={props.pedido.tamanho}
              onChangeText={(txt) => {props.atualizarInput(txt, 'tamanho')}}/>
      </View>
      <View style={estilos.viewInput}>
        <Text style={estilos.label}>Quantidade</Text>
        <TextInput style={estilos.input} value={props.pedido.quantidade}
              onChangeText={(txt) => {props.atualizarInput(txt, 'quantidade')}}/>
      </View>
      <Button title="Gravar" onPress={props.gravar}/>
    </View>
  );
}

function ListaPedidos(props) { 
  const lista = props.lista;
  //console.log("Lista Original ==> ", lista);
  const listaDisplay = lista.map( (elemento)=> {
    return (
      <View style={estilos.listaItem}>
      <Text style={estilos.listaTitulo}>{elemento.cliente}</Text>
      <View style={estilos.listaConteudo}>
        <Text style={estilos.listaConteudoItem}>{elemento.quantidade}</Text>
        <Text style={estilos.listaConteudoItem}>{elemento.sabor}</Text>
        <Text style={estilos.listaConteudoItem}>{elemento.tamanho}</Text>
      </View>
    </View>
    );
  } );

  //console.log("Lista Display ==> ", listaDisplay);

  return (
    <View style={estilos.lista}>
      {listaDisplay}
      <Button title="Atualizar" onPress={props.atualizar}/>
    </View>
  );
}

class App extends React.Component {

  state = {
    lista: [],

    novoPedido: { 
      cliente: "",
      sabor: "",
      tamanho: "",
      quantidade: "",
    }
  }

  atualizarLista() {
    axios.get('https://fecaf-prof-pizza-backend.herokuapp.com/pedidos')
    .then( (response) => {
      console.log('Funcionou');
      console.log(response.data);
      const novoState = {...this.state};
      novoState.lista = [...response.data];
      this.setState(novoState);
      ToastAndroid.show("Lista carregada com sucesso", ToastAndroid.LONG);
    })
    .catch( () => {
      ToastAndroid.show("Erro ao carregar a lista", ToastAndroid.LONG);
    })
  }

  limparPedido() { 
    const novoState = {...this.state};
    novoState.novoPedido.cliente = "";
    novoState.novoPedido.sabor = "";
    novoState.novoPedido.tamanho = "";
    novoState.novoPedido.quantidade = "";
    this.setState(novoState);
  }

  gravarPedido() { 
    axios.post('https://fecaf-prof-pizza-backend.herokuapp.com/pedido/adicionar', 
      this.state.novoPedido)
    .then( () => {
      ToastAndroid.show("Pedido gravado com sucesso", ToastAndroid.LONG);
      this.limparPedido();
    } )
    .catch( () => {
      ToastAndroid.show("Erro ao gravar o pedido", ToastAndroid.LONG);
    } )
  }

  atualizarTextInput(texto, campo) { 
    const novoState = {...this.state};
    novoState.novoPedido[campo] = texto;
    this.setState(novoState);
  }

  render() { 
    return (
      <View style={estilos.principal}>
        <Image source={ImagePizza} style={estilos.imagemCabecalho}></Image>
        <View style={estilos.viewNavigation}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Novo Pedido">
                {()=>
                  <NovoPedido gravar={
                                      () => {this.gravarPedido();}
                                    }
                              pedido={this.state.novoPedido}
                              atualizarInput={(txt, campo) => {this.atualizarTextInput(txt, campo)}}
                  />
                }
              </Tab.Screen>
              <Tab.Screen name="Listar Pedidos">
                {()=>
                  <ListaPedidos 
                        lista={this.state.lista} 
                        atualizar={
                                  ()=> {this.atualizarLista();}
                                }/>
                }
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
    borderBottomColor: '#33F',
    borderBottomWidth: 2,
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
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
