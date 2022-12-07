import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';

import { Container, Title, Input, ListItems } from './styles';

const items = ['item 1', 'item 2'];

const FormScreen: React.FC = () => {
  const [text, setText] = React.useState();
  
  return (
    <Container>
      <Title>Lista</Title>
    <Input value={text} onChangeText={(txt) => text = txt} />
      <Button text="Adicionar item" onPress={items.push(text)} />

      <TouchableOpacity 
        style={{
            backgroundColor: 'red',
            margin: 20,
            height: 40
        }}>
        <Text>Remover último item</Text>
      </TouchableOpacity>
      <Text style={{ margin: 20, marginTop: 40, fontWeight: 'bold' }}>Items</Text>
      <ListItems>
        {items[0]}
      </ListItems>
      
      <ListItems>{items[1]}</ListItems>
      <ListItems>{items[2]}</ListItems>
    </Container>
  );
}

export default FormScreen;
