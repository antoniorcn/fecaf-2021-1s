import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();


const ComponenteA = () => { 
  return (
    <View>
      <Text></Text>
      <Text>Conteudo do Componente A</Text>
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
