import React, {createContext, useState, useContext, useEffect} from 'react';
import * as api from '../services/api';

const UsersContext = createContext({
  users: [],
  addUser: newUser => {},
  removeUser: id => {},
  loading: false,
  refreshUsers: () => {},
});

export function UsersContextProvider({children}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshUsers = async () => {
    setLoading(true);

    const newUsers = await api.getAllUsers();
    setUsers(newUsers);

    setLoading(false);
  };

  const addUser = async newUser => {
    setLoading(true);

    await api.createUser(newUser);
    refreshUsers();
  };

  const removeUser = async id => {
    setLoading(true);

    await api.deleteUser(id);
    refreshUsers();
  };

  useEffect(() => {
    refreshUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{users, addUser, removeUser, loading, refreshUsers}}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsersContext() {
  const context = useContext(UsersContext);

  return context;
}
