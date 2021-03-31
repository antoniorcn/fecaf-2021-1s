import React, {useState, useEffect} from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(10);

  const alterado = () => { 
    console.log("Contador alterado para => ", contador);
  }

  useEffect(alterado, [contador]); 

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={()=>{
        setContador(contador + 1);
      }}></Button>
    </View>
  );
}
