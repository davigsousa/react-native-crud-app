import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Container, Info, Text, Label} from './styles';

function Details() {
  const route = useRoute();
  const {user} = route.params;

  return (
    <Container>
      <Info>
        <Label>Nome</Label>
        <Text>{user.name}</Text>
      </Info>

      <Info>
        <Label>E-mail</Label>
        <Text>{user.email}</Text>
      </Info>

      <Info>
        <Label>Idade</Label>
        <Text>{user.age} anos</Text>
      </Info>

      <Info>
        <Label>CPF</Label>
        <Text>{user.cpf}</Text>
      </Info>

      <Info>
        <Label>RG</Label>
        <Text>{user.rg}</Text>
      </Info>
    </Container>
  );
}

export default Details;
