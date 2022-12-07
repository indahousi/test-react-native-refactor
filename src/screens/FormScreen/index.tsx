import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';

import { Container, Title, Input, ListItems } from './styles';

const items = ['item 1', 'item 2'];

const FormScreen: React.FC = () => {
  const [text, setText] = React.useState();
  
  return (
    <Container>
      <Title>Lista</Title>
    <Input value={text} onChangeText={setText} />
      <Button text="Adicionar item" onPress={items.push(text)} />

      <Button style={{ backgroundColor: 'red' }} text="Remover último item" onPress={() => items.pop()} />
      <Text style={{ margin: 20, marginTop: 40, fontWeight: 'bold' }}>Items</Text>
      <ListItems>{items.map(item => item + ', ')}</ListItems>
    </Container>
  );
}

export default FormScreen;
