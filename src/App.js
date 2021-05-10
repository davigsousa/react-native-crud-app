import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UsersContextProvider} from './contexts/users';
import Routes from './Routes';

function App() {
  return (
    <NavigationContainer>
      <UsersContextProvider>
        <Routes />
      </UsersContextProvider>
    </NavigationContainer>
  );
}

export default App;
