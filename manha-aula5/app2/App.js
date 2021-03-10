import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const ConteudoA = () => { 
  return (
    <View>
      <Text></Text>
      <Text> Conteudo A </Text>
    </View>
  );
}

const ConteudoB = () => { 
  return (
    <View>
      <Text></Text>
      <Text> Conteudo B </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="A" component={ConteudoA}/>
        <Drawer.Screen name="B" component={ConteudoB}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

