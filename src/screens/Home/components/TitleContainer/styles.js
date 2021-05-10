import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
`;

export const TitleIcon = styled(Icon)`
  color: black;
  font-size: 25px;
`;
