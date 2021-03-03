import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';


const Agendamento = (props) => { 
  return (
    <View>
      <Text>{props.horario}</Text>
      <Text>Cliente: {props.cliente}</Text>
      <Text>Profissional: {props.profissional}</Text>
    </View>
  );
}

class App extends React.Component {

  state = {
    agendamento: {
      horario: "02/03/2022"
    },

    lista: [
      { horario: "02/03/2021 - 17:00h", 
        cliente: "Maria Eduarda",   
        profissional: "Jaça"},
      { horario: "03/03/2021 - 15:00h", 
        cliente: "Camila Alves",
        profissional: "Crô" },
      { horario: "04/03/2021 - 14:00h",
        cliente: "Sara Paçanha",
        profissional: "Crô"}
    ]
  }

  salvar() { 
    const newState = {...this.state};
    newState.lista.push(
        { horario: "10/03/2021 - 14:00h",
          cliente: "Maria do Carmo",
          profissional: "Leandro Nunes" }
    );
    this.setState(newState);
  }

  atualizarTexto(texto) {
    const newState = {...this.state};
    newState.agendamento.horario = texto;
    this.setState(newState);
  }
  
  render() { 
    const listaDisplay = this.state.lista.map((obj) => {
      return(
        <Agendamento  horario={obj.horario}
                      cliente={obj.cliente}
                      profissional={obj.profissional}/>
      )
    });
    return (
      <View>
        <View>
          <TextInput 
            placeholder="Digite o horário do agendamento"
            value={this.state.agendamento.horario}
            onChangeText={(txt)=>{this.atualizarTexto(txt)}}
            />
          <TextInput placeholder="Digite o nome do cliente"/>
          <TextInput placeholder="Digite o nome do profissional"/>
        </View>
        <View style={{marginTop: 30, marginBottom: 30}}>
          {listaDisplay}
        </View>
        <Button title="Adicionar" 
                onPress={()=>{this.salvar()}}/>
      </View>
    );
  }

}

export default App;


