import React from 'react';
import {Container, IconBtn, Label} from './styles';

function SubmitBtn({label, icon, onPress}) {
  return (
    <Container onPress={onPress}>
      <IconBtn name={icon} />
      <Label>{label}</Label>
    </Container>
  );
}

export default SubmitBtn;
