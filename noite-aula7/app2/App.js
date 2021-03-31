import React, {useState, useEffect} from 'react';
import { Button, Text, TextInput, View } from 'react-native';

class Componente extends React.Component {

    state = {
        contador: 0,
        texto: ""
    } 

    setContador(novoValor) { 
      const novoState = {...this.state};
      novoState.contador = novoValor;
      this.setState(novoState);
    }

    alteraTexto(txt) { 
      const novoState = {...this.state};
      novoState.texto = txt;
      this.setState(novoState);
    }
  
    
}

export default () => {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('');

  useEffect( () => { 
    setTexto("Contador foi alterado para =>" + contador);
  }, [contador])

  return (
    <View>
    <Text>Texto:</Text>
    <TextInput 
      value={texto}
      onChangeText={(txt)=>{setTexto(txt)}}  />
    <Text>Contador: {contador}</Text>
    <Button title="Incrementar" onPress={()=>{
        setContador(contador + 1);
    }}></Button>
    <Text>Texto Alterado: {texto}</Text>
    </View>
  );
}