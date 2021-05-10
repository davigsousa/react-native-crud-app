import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useUsersContext} from '../../contexts/users';
import {Container, BtnWrapper, InputWrapper} from './styles';
import Input from '../../components/Input';
import SubmitBtn from '../../components/SubmitBtn';

function AddUser() {
  const navigation = useNavigation();
  const {addUser} = useUsersContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');

  const handleSubmit = () => {
    addUser({
      name,
      email,
      age,
      cpf,
      rg,
    });

    navigation.goBack();
  };

  return (
    <Container>
      <InputWrapper>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Nome Completo"
          icon="person"
        />
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          icon="email"
        />
        <Input
          value={age}
          onChangeText={setAge}
          placeholder="Idade"
          icon="info"
          keyboardType="decimal-pad"
        />
        <Input
          value={cpf}
          onChangeText={setCpf}
          placeholder="CPF"
          icon="assignment-ind"
          keyboardType="decimal-pad"
        />
        <Input
          value={rg}
          onChangeText={setRg}
          placeholder="RG"
          icon="assignment-ind"
          keyboardType="decimal-pad"
        />
      </InputWrapper>

      <BtnWrapper>
        <SubmitBtn
          onPress={handleSubmit}
          label="Confirmar Criação"
          icon="check"
        />
      </BtnWrapper>
    </Container>
  );
}

export default AddUser;
