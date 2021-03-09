import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Image, SafeAreaView, SafeAreaViewComponent, StyleSheet, Switch, Text, TextInput, TouchableHighlight, View } from 'react-native';


const CorteCabeloDetalhes = (props) => { 
  return (
    <SafeAreaView>
      <View style={{marginTop: 30}}>
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
    </SafeAreaView>
  );
}



class Cabelereiro extends React.Component {

  state = {
      atual: {cliente: "",
              tipo: "",
              data: ""
      },

      lista: []
    }

  preencher(campo, txt) { 
    const novoState = {...this.state};
    novoState.atual[campo] = txt;
    this.setState(novoState);
  }

  salvar() { 
    const novoState = {...this.state};
    const atual = {...novoState.atual};
    novoState.lista.push(atual);
    this.setState(novoState);
  }

  converteListaParaDisplay() { 
    const lista = this.state.lista;
    const listaDisplay = lista.map( (elemento) => {
      return (
        <View>
          <Text>Cliente: {elemento.nome}</Text>
          <Text>Tipo: {elemento.tipo}</Text>
          <Text>Data: {elemento.data}</Text>
        </View>
      )
    } ); 
    return ( listaDisplay );
  }

  render() {
    const obj = this.state.atual;
    const listaDisplay = this.converteListaParaDisplay();
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
      {listaDisplay}
    </View>
    );
  }

}


export default Cabelereiro;