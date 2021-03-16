import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const gravarJogo = () => { 
    console.log("Adicionando entidade na API: ");
    const apiUrl = this.basePath + 'http://192.168.1.38/jogo-adicionar?nome=123&genero=acao&preco=123';
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify("")
    });
}

const ComponenteA = () => { 
  return (
    <View>
      <Text></Text>
      <Text>Conteudo do Componente A</Text>
      <Button onPress={gravarJogo()}></Button>
    </View>
  );
}

const ComponenteB = () => { 
  return (
    <View>
      <Text></Text>
      <Text>Conteudo do Componente B</Text>
    </View>
  );
}

export default () => { 
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Componente A" component={ComponenteA}/>
        <Drawer.Screen name="Componente B" component={ComponenteB}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
