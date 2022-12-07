import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, style }) => {
  return (
    <Container onPress={onPress} style={style}><Text style={{ color: 'white' }}>{text}</Text></Container>
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