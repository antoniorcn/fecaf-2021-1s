import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ImagePizza from './assets/imagem-pizza.jpg';
import axios from 'axios';
import ContextoPizza, {EstadoGlobalPizza} from './Contexto';
import MapView from 'react-native-maps';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MapaPizzaria(props) {
  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}}
            initialRegion={{
              latitude: -23.610593431427706,
              longitude: -46.76887860184943,
              latitudeDelta: 0.095,
              longitudeDelta: 0.092,
            }}>
        <MapView.Marker coordinate={{
          latitude: -23.610593431427706,
          longitude: -46.76887860184943,
        }}
        title="Pizzaria PidiPizza"
        descricao="Pizzaria com delivery pelo App"
        onPress={()=>{
          ToastAndroid.show("Faça seu Pedido", ToastAndroid.LONG);
          props.navigation.navigate("Novo Pedido");
        }}/>
      </MapView>
    </View>
  );
}

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

class Principal extends React.Component {
  static contextType = ContextoPizza;
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
    const options = {
      headers: { 
        "Authorization": "Bearer " + this.context.token,
      }
    };

    axios.get('https://fecaf-prof-pizza-backend.herokuapp.com/pedidos', options)
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
    const options = {
      headers: { 
        "Authorization": "Bearer " + this.context.token,
      }
    };
    axios.post('https://fecaf-prof-pizza-backend.herokuapp.com/pedido/adicionar', 
      this.state.novoPedido, options)
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
        <Text>Acessando como: {this.context.username}</Text>
        <View style={estilos.viewNavigation}>
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
            <Tab.Screen name="Mapa" component={MapaPizzaria}/>
          </Tab.Navigator>
        </View>
      </View>
    );
  }
}


class Login extends React.Component { 
  static contextType = ContextoPizza;

  state = {
    usuario: "",
    senha: "",
  }

  atualizaTexto(txt, campo) { 
    const novoState = {...this.state};
    novoState[campo] = txt;
    this.setState(novoState);
  }

  login() {
    // ToastAndroid.show("Usuario=>" + this.state.usuario +
    //  "  Senha=>" + this.state.senha, ToastAndroid.LONG);
    const userInfo = {
          "usuario": this.state.usuario,
          "senha": this.state.senha,
    }
    axios.post('https://fecaf-prof-pizza-backend.herokuapp.com/login', userInfo)
    .then((res)=>{
      console.log(res.data);
      ToastAndroid.show("Logado", ToastAndroid.LONG);
      this.context.setToken(res.data.token);
      this.context.setUsername(this.state.usuario);
      this.props.navigation.navigate("Principal");
    })
    .catch((err)=>{
      console.log("Erro==>", err);
      ToastAndroid.show("Erro: " + err, ToastAndroid.LONG);
    })
  }


  render() { 
    return (
      <View style={estilos.loginArea}>
        <Text>Insira o nome do usuário</Text>
        <TextInput  style={estilos.loginUsuario} 
                    value={this.state.usuario}
                    onChangeText={(texto)=>{this.atualizaTexto(texto, 'usuario')}}/>
        <Text>Insira sua senha</Text>
        <TextInput style={estilos.loginSenha}
                    placeholderTextColor="#9a73ef"
                    returnKeyType="go"
                    secureTextEntry
                    autoCorrect={false}
                    value={this.state.senha}
                    onChangeText={(texto)=>{this.atualizaTexto(texto, 'senha')}}/>
        <Button title="LOG IN" onPress={()=>{this.login()}}/>
      </View>
    )
  }
}


class App extends React.Component { 
  render() {
    return (
      <View style={{flex: 1}}>
        <EstadoGlobalPizza>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Principal" component={Principal}/>
              </Stack.Navigator>
          </NavigationContainer>
        </EstadoGlobalPizza>
      </View>
    )
  }
}


export default App;

const estilos = StyleSheet.create({
  loginArea: { 
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  loginUsuario: { 
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#77F"
  },
  loginSenha: { 
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#777"
  },
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
