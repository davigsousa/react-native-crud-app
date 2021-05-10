import React from 'react';
import {Container, TitleIcon, Title} from './styles';

function TitleContainer({icon, title}) {
  return (
    <Container>
      <TitleIcon name={icon} />
      <Title>{title}</Title>
    </Container>
  );
}

export default TitleContainer;
