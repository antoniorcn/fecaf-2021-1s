import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import ImagemPizza from './assets/imagem-pizza.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const estilos = StyleSheet.create({
  textInput: { 
    backgroundColor: "#FFC",
    borderColor: "#CCF",
    borderWidth: 2,
    flex: 3
  },

  texto: { 
    flex: 1
  },

  viewTextoInput: { 
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20
  },

  itemLista: {
    marginLeft: 20, 
    marginRight: 20, 
    marginTop: 30
  },

  textoTituloItem: { 
    fontWeight: "bold"
  }
});


function ListarPedidos(props) { 
  console.log(props.lista);

  // const listaMostrar = [];
  // props.lista.forEach(element => {
  //   listaMostrar.push(
  //     <View style={estilos.itemLista}>
  //       <Text style={estilos.textoTituloItem}>{element.cliente}</Text>
  //       <Text>{element.quantidade} - {element.sabor} - {element.tamanho}</Text>
  //     </View>
  //   ); 
  // });

  // const listaMostrar = [];
  // for(let i = 0; i < props.lista.length; i++) { 
  //   const element = props.lista[i];
  //   listaMostrar.push(
  //     <View style={estilos.itemLista}>
  //       <Text style={estilos.textoTituloItem}>{element.cliente}</Text>
  //       <Text>{element.quantidade} - {element.sabor} - {element.tamanho}</Text>
  //     </View>
  //   )
  // }

  const listaMostrar = props.lista.map((indice, element)=>
    <View style={estilos.itemLista} key={indice}>
      <Text style={estilos.textoTituloItem}>{element.cliente}</Text>
      <Text>{element.quantidade} - {element.sabor} - {element.tamanho}</Text>
    </View>
  );
  

  return(
    <ScrollView>
      {listaMostrar}     
    </ScrollView>
  );
}


function Formulario(props) { 
  return(
    <View>
      <Text>Novo Pedido de Pizza</Text>
      <View style={estilos.viewTextoInput}>
        <Text style={estilos.texto}>Cliente</Text>
        <TextInput  style={estilos.textInput} 
                    value={props.pedido.cliente}
                    onChangeText={(texto)=>{props.onAtualizar('cliente', texto)}}/>
      </View>
      <View style={estilos.viewTextoInput}>
        <Text style={estilos.texto}>Sabor</Text>
        <TextInput  style={estilos.textInput} 
                    value={props.pedido.sabor}
                    onChangeText={(texto)=>{props.onAtualizar('sabor', texto)}}/>
      </View>
      <View style={estilos.viewTextoInput}>
        <Text style={estilos.texto}>Tamanho</Text>
        <TextInput  style={estilos.textInput}
                    value={props.pedido.tamanho}
                    onChangeText={(texto)=>{props.onAtualizar('tamanho', texto)}}/>
      </View>
      <View style={estilos.viewTextoInput}>
        <Text style={estilos.texto}>Quantidade</Text>
        <TextInput  style={estilos.textInput} 
                    value={props.pedido.quantidade}
                    onChangeText={(texto)=>{props.onAtualizar('quantidade', texto)}}/>
      </View>
      <View style={estilos.viewTextoInput}>
        <Button title="Gravar"
                onPress={()=>{props.onGravar()}}></Button>
      </View>
    </View>
  );
}


class Principal extends React.Component { 
  state = {
    lista: [
      {cliente: "João Silva", sabor: "Mussarela", quantidade: 2, tamanho: "grande"},
      {cliente: "Maria Silva", sabor: "Calabresa", quantidade: 3, tamanho: "grande"},
    ],
    pedidoPizza: { 
      cliente: "",
      sabor: "",
      quantidade: "0",
      tamanho: "Grande"
    }
  }

  atualizarInput(campo, texto) { 
    const novoState = {...this.state};
    novoState.pedidoPizza[campo] = texto;
    this.setState(novoState);
  }

  gravar() { 
    const novoState = {...this.state};
    novoState.lista.push({...this.state.pedidoPizza});
    this.setState(novoState);
    ToastAndroid.show("Pedido Gravado", ToastAndroid.LONG);
  }

  render() { 
    return (
      <View style={{  flex: 1, 
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "stretch"}}>
        <Image source={ImagemPizza} style={{width: "100%", flex: 1}}/>
        <View style={{flex: 2}}>
          <NavigationContainer>
            <Tab.Navigator>

              <Tab.Screen name="Fazer Pedido">
                {()=>{return (<Formulario 
                                  pedido={this.state.pedidoPizza}
                                  onAtualizar={(cmp, txt)=>this.atualizarInput(cmp, txt)}
                                  onGravar={()=>this.gravar()}/>)}}
              </Tab.Screen>

              <Tab.Screen name="Listar Pedidos">
                {()=>{return (<ListarPedidos lista={this.state.lista}/>)}}
              </Tab.Screen>

            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </View>
    );
  }
}

export default Principal;