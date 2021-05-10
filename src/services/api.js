import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crudcrud.com/api/54e3e13de1344e7aae5146aa7b073689',
});

export async function createUser(user) {
  await api.post('/users', user);
}

export async function getAllUsers() {
  const response = await api.get('/users');
  return response.data;
}

export async function deleteUser(id) {
  await api.delete(`/users/${id}`);
}
