import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  background-color: white;
  margin: 10px 20px;
  height: 60px;
  align-items: center;
  border-radius: 10px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 100%;
`;

export const InputIcon = styled(Icon)`
  font-size: 25px;
  color: black;
  margin: 0 10px;
`;
