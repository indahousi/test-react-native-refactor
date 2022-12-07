import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const Button: React.FC = ({ text, onPress, style }) => {
  return (
    <Container onPress={onPress} style={style}><Text>{text}</Text></Container>
  );
}

export default Button;

const Container = styled.TouchableOpacity`
  background-color: blue;
  margin: 20px;
  margin-bottom: 0px;
  align-items: center;
  height: 40px;
`;

const Text = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;