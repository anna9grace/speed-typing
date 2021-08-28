import axios from 'axios';
import { BASE_URLS } from '../constants';

const REQUEST_TIMEOUT = 5000;
const UNAUTHORIZED_CODE = 401;

let token = '';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === UNAUTHORIZED_CODE) {
      onUnauthorized();
    }
    throw err;
  };

  api.interceptors.request.use((config) => {
    token = localStorage.getItem('token') ?? '';
    if (config.url !== BASE_URLS.TEXT) {
      config.headers.common['x-token'] = token;
    }
    return config;
  });

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
