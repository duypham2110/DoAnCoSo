import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'https://8c7a4b8e2bf5.ngrok.io'
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;