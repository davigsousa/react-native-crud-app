import React from 'react';
import {Container, InputIcon, TextInput} from './styles';

function Input({
  placeholder,
  value,
  onChangeText,
  icon,
  keyboardType = 'default',
}) {
  return (
    <Container>
      <InputIcon name={icon} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </Container>
  );
}

export default Input;
