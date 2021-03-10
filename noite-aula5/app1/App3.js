import React from 'react';
import { Alert, Button, Image, Switch, Text, TextInput, ToastAndroid, TouchableHighlight, View } from 'react-native';
// import dog from 'assets/dog.jpg';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Agendamento = (props) => { 
  return (
    <View>
      <Text>{props.horario}</Text>
      <Text>Cliente: {props.cliente}</Text>
      <Text>Profissional: {props.profissional}</Text>
    </View>
  );
}

const TabA = () => { 
  return(
    <View>
        <Text></Text>
        <Text>Conteudo A</Text>
    </View>
  );
}


const TabB = () => { 
  return(
    <View>
        <Text></Text>
        <Text>Conteudo B</Text>
    </View>
  );
}

class App extends React.Component {

  state = {
    agendamento: {
      horario: "",
      cliente: "",
      profissional: "",
      vip: false
    },

    lista: [
    ]
  }

  salvar() { 
    const newState = {...this.state};
    const obj = {...this.state.agendamento};
    newState.lista.push(
      obj
    );
    this.setState(newState);
    // Alert.alert("Agendamento Salvo",
    // "Seu agendamento foi salvo com sucesso", 
    // [ {text: "Ok"},
    //   {text: "Ja Sei"},
    //   {text: "Ta bom"}]);
    ToastAndroid.show("Seu agendamento foi salvo", ToastAndroid.SHORT);
  }

  atualizarTexto(campo, texto) {
    const newState = {...this.state};
    newState.agendamento[campo] = texto;
    this.setState(newState);
  }

  

  

  render() { 

    const TabEditar = () => { 
      return (
        <View>
          <Text></Text>
          <TextInput 
            placeholder="Digite o horário do agendamento"
            value={this.state.agendamento.horario}
            onChangeText={(txt)=>{this.atualizarTexto('horario', txt)}}
            />
  
          <TextInput placeholder="Digite o nome do cliente"
          value={this.state.agendamento.cliente}
          onChangeText={(txt)=>{this.atualizarTexto('cliente', txt)}}/>
  
          <TextInput placeholder="Digite o nome do profissional"
          value={this.state.agendamento.profissional}
          onChangeText={(txt)=>{this.atualizarTexto('profissional', txt)}}/>
  
          <Switch value={this.state.agendamento.vip}/>
          <Button title="Adicionar" 
                onPress={()=>{this.salvar()}}/>   
        </View>
      );
    }

    const TabLista = () => { 
      const listaDisplay = this.state.lista.map((obj) => {
        return(
          <Agendamento  horario={obj.horario}
                        cliente={obj.cliente}
                        profissional={obj.profissional}/>
        )
      });
  
      return (
        <View style={{marginTop: 30, marginBottom: 30}}>
          {listaDisplay}
        </View>
      );
    }




    return (
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Agendamento" component={TabA}/>
            <Tab.Screen name="Lista" component={TabB}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

}

export default App;


