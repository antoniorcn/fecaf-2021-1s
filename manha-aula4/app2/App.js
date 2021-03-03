import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Image, StyleSheet, Switch, Text, TextInput, TouchableHighlight, View } from 'react-native';


const CorteCabeloDetalhes = (props) => { 
  return (
    <View>
      <TouchableHighlight activeOpacity={0.05} underlayColor="#FF0000" onPress={()=>{console.log("Apertado")}}>
        <Text>Corte de Cabelo</Text>
      </TouchableHighlight>
      <TextInput  placeholder="Nome do Cliente" 
                  value={props.cliente}
                  onChangeText={(txt)=>{props.inputChange('cliente', txt)}}></TextInput>
      <TextInput  placeholder="Tipo do Corte"
                  value={props.tipo}
                  onChangeText={(txt)=>{props.inputChange('tipo', txt)}}></TextInput>
      <TextInput  placeholder="Data do Corte"
                  value={props.data}
                  onChangeText={(txt)=>{props.inputChange('data', txt)}}></TextInput>
      <Switch value={true}/>
      
    </View>
  );
}



class Cabelereiro extends React.Component {

  state = {
      atual: {cliente: "Maria Antonia",
              tipo: "Vera Fischer",
              data: "15/03/2021"
      },

      lista: []
    }

  preencher(campo, txt) { 
    // console.log(txt);
    const novoState = {...this.state};
    novoState.atual[campo] = txt;
    this.setState(novoState);
  }

  salvar() { 
    console.log("Salvar apertado");
    Alert.alert("Titulo", "Mensagem",
                [{text: "Neutro"}, 
                 {text: "Negativo"},
                 {text: "Positivo"}]);
  }

  render() {
    const obj = this.state.atual;
    return(
    <View>
      <CorteCabeloDetalhes 
          cliente={obj.cliente}
          tipo={obj.tipo}
          data={obj.data}
          inputChange={(cmp, txt)=>this.preencher(cmp, txt)}/>    
      <Button   title="Salvar" 
                onPress={()=>{this.salvar()}}></Button>          
      <Image source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}></Image>
    </View>
    );
  }

}


export default Cabelereiro;

// export default function App() {
//   return (
//     <View>
//       <CorteCabeloDetalhes 
//           cliente="João Silva"
//           tipo="Estilo Wesley Safadão"
//           data="13/03/2021"/>
//       <CorteCabeloDetalhes 
//           cliente="Maria Antonia"
//           tipo="Vera Fischer"
//           data="15/03/2021"/>        
//     </View>
//   );
// }