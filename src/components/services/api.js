import axios from 'axios';
// import { ResponseCode } from '../const';

const BACKEND_URL = 'https://baconipsum.com/api/?type=all-meat';
const REQUEST_TIMEOUT = 5000;


// let token = '';

// export const createAPI = (onUnauthorized) => {
export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    // const {response} = err;

    // if (response.status === ResponseCode.UNAUTHORIZED) {
    //   onUnauthorized();
    // }

    throw err;
  };

  // api.interceptors.request.use((config) => {
  //   token = localStorage.getItem('token') ?? '';
  //   config.headers.common['x-token'] = token;
  //   return config;
  // });

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
