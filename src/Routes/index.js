import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import AddUser from '../screens/AddUser';

const AppStack = createStackNavigator();

function Routes() {
  return (
    <AppStack.Navigator
      screenOptions={{headerTitleAlign: 'center'}}
      initialRouteName="Home">
      <AppStack.Screen
        component={Home}
        name="Home"
        options={{title: 'Início'}}
      />
      <AppStack.Screen
        component={Details}
        name="Details"
        options={{title: 'Detalhes'}}
      />
      <AppStack.Screen
        component={AddUser}
        name="AddUser"
        options={{title: 'Adicionar Usuário'}}
      />
    </AppStack.Navigator>
  );
}

export default Routes;
