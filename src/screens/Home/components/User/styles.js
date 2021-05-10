import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 100%;
  background-color: white;
  margin: 10px 0;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  height: 90px;
`;

export const Infos = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  padding: 10px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Email = styled.Text``;

export const Age = styled.Text``;

export const Button = styled.TouchableOpacity`
  margin-left: auto;
  background-color: #932020;
  padding: 5px;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const DelIcon = styled(Icon).attrs({name: 'delete'})`
  font-size: 25px;
  color: white;
`;
