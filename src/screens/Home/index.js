import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useUsersContext} from '../../contexts/users';
import {Container, List} from './styles';
import TitleContainer from './components/TitleContainer';
import SubmitBtn from '../../components/SubmitBtn';
import Loading from '../../components/Loading';
import User from './components/User';

function Home() {
  const navigation = useNavigation();
  const {users, loading} = useUsersContext();

  return (
    <Container>
      <TitleContainer icon="user" title="Listagem de Usuários" />

      {loading ? (
        <Loading />
      ) : (
        <List
          data={users}
          keyExtractor={item => item._id}
          renderItem={({item}) => <User user={item} />}
          ListFooterComponent={() => (
            <SubmitBtn
              onPress={() => navigation.navigate('AddUser')}
              label="Adicionar usuário"
              icon="add"
            />
          )}
        />
      )}
    </Container>
  );
}

export default Home;
