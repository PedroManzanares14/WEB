import api from '../services/Api';

export const loginUser = async (credentials) => {
  const { data } = await api.post('/users/login', credentials);
  return data;
};

export const registerUser = async (userData) => {
  const { data } = await api.post('/users/register', userData);
  return data;
};
