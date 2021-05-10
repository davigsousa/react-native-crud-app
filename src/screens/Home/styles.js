import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 0;
  background-color: #dcdcdc;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {padding: 20},
  ListFooterComponentStyle: {marginTop: 10},
})`
  height: 100%;
`;
