import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
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
      valor: ""
    },

    lancamentos: [
      { data: '2021-03-10',
        descricao: 'pagamento',
        valor: 2500.00
      },
      { data: '2021-03-15',
        descricao: 'gasolina',
        valor: -100.00
      },
      { data: '2021-03-16',
        descricao: 'mercado',
        valor: -200.00
      }
    ]
  }

  atualizarLancamento(campo, texto) { 
    const novoState = {...this.state};
    novoState.lancamentoAtual[campo] = texto;
    this.setState(novoState);
  }

  gravarLista() { 
    const novoState = {...this.state};
    novoState.lancamentos.push(
      {...novoState.lancamentoAtual}
    );
    this.setState(novoState);
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
