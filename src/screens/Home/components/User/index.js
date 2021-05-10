import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useUsersContext} from '../../../../contexts/users';
import {Container, Infos, Name, Email, Age, Button, DelIcon} from './styles';

function User({user}) {
  const navigation = useNavigation();
  const {removeUser} = useUsersContext();

  return (
    <Container>
      <Infos onPress={() => navigation.navigate('Details', {user})}>
        <Name>{user.name}</Name>
        <Email>E-mail: {user.email}</Email>
        <Age>Idade: {user.age}</Age>
      </Infos>

      <Button onPress={() => removeUser(user._id)}>
        <DelIcon />
      </Button>
    </Container>
  );
}

export default User;
