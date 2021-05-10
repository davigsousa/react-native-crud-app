import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.TouchableOpacity`
  background-color: black;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Label = styled.Text`
  color: white;
  font-size: 20px;
`;

export const IconBtn = styled(Icon)`
  font-size: 25px;
  color: white;
  margin-right: 10px;
`;
