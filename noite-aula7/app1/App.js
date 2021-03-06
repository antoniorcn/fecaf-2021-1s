import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, ImageBackground, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import Coins from './assets/coins.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

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

const Lancamento = (props) => { 
  const options = { weekday: 'long', year: 'long', month: 'long', day: 'numeric' };
  const d = new Date();
  const fmtDate = d.toLocaleDateString("en-US", options); 
  
  return(
    <View>
      <Text>Data</Text>
      <TextInput value={props.lancamentoAtual.data} 
          onChangeText={(texto)=>{props.atualizarInput('data', texto)}}/>
      <Text>Descricao</Text>
      <TextInput value={props.lancamentoAtual.descricao}
          onChangeText={(texto)=>{props.atualizarInput('descricao', texto)}}/>
      <Text>Valor</Text>
      <TextInput value={""+props.lancamentoAtual.valor}
          onChangeText={(texto)=>{props.atualizarInput('valor', texto)}}/>
      <Button title="Gravar" 
          onPress={props.gravar}
        />
    </View> 
  )
}

const Linha = (props) => { 
  console.log(props);
  return (
    <View>
      <Text>{props.item.data}  -  {props.item.descricao} - {props.item.valor}</Text>
    </View>
  );
}

const Extrato = (props) => { 
  console.log(props.lancamentos);
  return(
    <View>
      <FlatList
        data={props.lancamentos}
        renderItem={Linha}
        keyExtractor={item => item.index}
      />
    </View>
  )
}

class Principal extends React.Component { 
  state = { 
    lancamentoAtual : { 
      data: "03/03/2021",
      descricao: "",
      valor: "0"
    },

    lancamentos: []
  }

  componentDidMount() { 
    console.log("Linha 1")
    axios.get('https://fecaf-back-banco.herokuapp.com/extrato')
    .then( (res) => { 
      console.log("Extrato Recebido")
      console.log(res.data);
      const novoState = {...this.state};
      novoState.lancamentos = [...res.data];
      this.setState(novoState);
    });
    console.log("Linha 2")
  }

  atualizarLancamento(campo, texto) { 
    const novoState = {...this.state};
    novoState.lancamentoAtual[campo] = texto;
    this.setState(novoState);
  }

  gravarLista() { 

    // fetch('https://fecaf-back-banco.herokuapp.com/lancamento', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(this.state.lancamentoAtual)
    // });
    // ToastAndroid.show("Lançamento gravado no servidor", ToastAndroid.LONG);
    const lancamentoAtual = {...this.state.lancamentoAtual};
    lancamentoAtual.valor = parseFloat(lancamentoAtual.valor) + 0.01;
    console.log("Gravando: ", lancamentoAtual);
    axios.post(
        'https://fecaf-back-banco.herokuapp.com/lancamento', 
        lancamentoAtual,
        {
          headers: {'Content-Type': 'application/json'}
        }
    ).then( (res) => { 
      // console.log(res);
      ToastAndroid.show("Lançamento gravado no servidor", ToastAndroid.LONG);
    }).catch( (err) => { 
      console.log("Erro", err)
    })

    // const novoState = {...this.state};
    // novoState.lancamentos.push(
    //   {...novoState.lancamentoAtual}
    // );
    // this.setState(novoState);
  }

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
              <Tab.Screen name="Lançamento">
                { ()=>{return (
                  <Lancamento lancamentoAtual={this.state.lancamentoAtual}
                      atualizarInput={(campo, txt)=>{this.atualizarLancamento(campo, txt)}} 
                      gravar={()=>{this.gravarLista()}}
                      />
                )}}
              </Tab.Screen>
              <Tab.Screen name="Extrato">
                { ()=> {return (
                  <Extrato lancamentos={this.state.lancamentos}/>
                )}}
              </Tab.Screen>
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </View>
    )
  }
}

export default Principal;
