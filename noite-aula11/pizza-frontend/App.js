import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
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
        <Button title="Gravar" onPress={props.gravar}/>      
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
      <Button title="Atualizar Lista" onPress={props.atualizar}/>
      <ScrollView>
        {listaDisplay}
      </ScrollView>
    </View>
  );
}

class App extends React.Component {
  state = { 
    lista: [],

    pedidoAtual: { 
      cliente: "", 
      sabor: "", 
      tamanho: "", 
      quantidade: "",
    }
  }

  atualizarLista() { 
    axios.get('https://fecaf-prof-pizza-backend.herokuapp.com/pedidos')
    .then(
        (resposta)=>{
          const novoState = {...this.state};
          novoState.lista = [...resposta.data];
          this.setState(novoState);
          ToastAndroid.show(
            `Foi carregada a lista com ${novoState.lista.length} pedidos`, 
            ToastAndroid.LONG);
        })
    .catch(
        (err)=>{
          ToastAndroid.show("Erro ao carregar a lista", ToastAndroid.LONG);
        })
  }

  gravarPedido() { 
    axios.post('https://fecaf-prof-pizza-backend.herokuapp.com/pedido/adicionar',
    this.state.pedidoAtual)
    .then( (resposta)=> {
      if (resposta.status === 200) { 
        ToastAndroid.show("O pedido foi gravado com sucesso", ToastAndroid.LONG);
      } else { 
        ToastAndroid.show("Erro ao gravar o pedido", ToastAndroid.LONG);
      }
    })
    .catch( (err) => {
      ToastAndroid.show("Houve um erro no servidor ao gravar o pedido", ToastAndroid.LONG);
    })
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
                          gravar={()=>{this.gravarPedido()}}
                />}
              </Tab.Screen>
              <Tab.Screen name="Lista Pedidos">
                {()=><ListaPedidos pedidos={this.state.lista}
                          atualizar={()=>{this.atualizarLista()}}/>}
              </Tab.Screen>
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </View>
    );
  }
}


class Login extends React.Component { 

  state = { 
    usuario: "",
    senha: "",
    token: "",
  }

  atualizarTexto(txt, campo) { 
    const novoState = {...this.state};
    novoState[campo] = txt;
    this.setState(novoState);
  }

  login() { 
    const objLogin = {
      usuario: this.state.usuario,
      senha: this.state.senha
    }
    console.log("Obj Login ==>", objLogin);
    axios.post('https://fecaf-prof-pizza-backend.herokuapp.com/login', objLogin)
    .then( (res) => {
        if (res.data.token) {
          const token = res.data.token; 
          console.log("Token ==>", token);
          const novoState = {...this.state};
          novoState.token = token;
          this.setState(novoState);
          console.log("State==>", this.state);
          ToastAndroid.show("Autenticado com sucesso", ToastAndroid.LONG);
        }
      } )
    .catch( (err) => {
      console.log("Erro ==>", err);
      ToastAndroid.show("Usuário ou senha inválidos", ToastAndroid.LONG);
    } )
  }

  render() { 
    return (
      <View style={estilos.loginView}>
        <Text>Insira o usuário</Text>
        <TextInput 
            style={estilos.loginUsuarioInput}
            value={this.state.usuario}
            onChangeText={(texto)=>{this.atualizarTexto(texto, 'usuario')}}/>
        <Text>Insira a senha</Text>
        <TextInput 
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
          style={estilos.loginSenhaInput}
          value={this.state.senha}
          onChangeText={(texto)=>{this.atualizarTexto(texto, 'senha')}}/>
        <Button title="Login" onPress={()=>{this.login()}}/>
      </View>
    );
  }
}

export default Login;

const estilos = StyleSheet.create({
  loginView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  loginUsuarioInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#AAA",
    marginBottom: 30,
    marginTop: 20,
  },  
  loginSenhaInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#AAF",
    marginBottom: 30,
    marginTop: 20,
  },    
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
