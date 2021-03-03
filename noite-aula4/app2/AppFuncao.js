import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

const Agendamento = (props) => { 
return (
  <View>
    <Text>{props.horario}</Text>
    <Text>Cliente: {props.cliente}</Text>
    <Text>Cabelereiro: {props.profissional}</Text>
  </View>
);
}

const lista = [
  { horario: "02/03/2021 - 17:00h", 
    cliente: "Maria Eduarda",   
    profissional: "Jaça"},
  { horario: "03/03/2021 - 15:00h", 
    cliente: "Camila Alves",
    profissional: "Crô" },
    { horario: "04/03/2021 - 14:00h",
    cliente: "Sara Paçanha",
    profissional: "Crô"},
    { horario: "04/03/2021 - 14:00h",
    cliente: "Sara Paçanha",
    profissional: "Crô"}
];

export default function App() {
  // const displayLista = [];
  // for(let i = 0; i < lista.length; i++) { 
  //   const obj = lista[i];
  //   displayLista.push(
  //           <Agendamento  horario={obj.horario} 
  //                 cliente={obj.cliente}
  //                 profissional={obj.profissional}/>);
  // }
  const displayLista = lista.map(
    (obj) => { 
      return (
        <Agendamento  horario={obj.horario}
                      cliente={obj.cliente}
                      profissional={obj.profissional}/>
      )
    }
  );
  // Alert.alert("Agendamento muito proximo do outro");
  return (
    <View style={styles.container}>
      {displayLista}
      <Button title="Alterar" 
              onPress={() => {
                lista[0].horario = "10/03/2021 - 19:00h";
                console.log(lista);
              }}></Button>
    </View>

  );
}


