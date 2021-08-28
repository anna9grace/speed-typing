import { toast } from 'react-toastify';
import { loadText } from './action';

import { BASE_URLS } from '../constants';
import { APIRoute } from '../constants';
import { AuthorizationStatus } from '../constants';
import { requireAuthorization, logout } from './action';


export const fetchTrainingText = () => (dispatch, _getState, api) => (
  api.get(BASE_URLS.TEXT)
    .then(({ data }) => dispatch(loadText(data)))
    .catch((error) => toast(error.message))
);


export const checkAuth = (isInitial) => (dispatch, _getState, api) => (
  api.get(`${BASE_URLS.AUTHORIZATION}/${APIRoute.LOGIN}`)
    .then(({ data }) => dispatch(requireAuthorization(AuthorizationStatus.AUTH, data)))
    .catch((error) => {
      if (!isInitial) {
        toast(error.message);
      }
    })
);

export const login = (authData) => (dispatch, _getState, api) => (
  api.post(`${BASE_URLS.AUTHORIZATION}/${APIRoute.LOGIN}`, { ...authData })
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      return data;
    })
    .then((data) => dispatch(requireAuthorization(AuthorizationStatus.AUTH, data)))
    .catch((error) => toast(error.message))
);

export const systemLogout = () => (dispatch, _getState, api) => (
  api.delete(`${BASE_URLS.AUTHORIZATION}/${APIRoute.LOGOUT}`)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logout()))
    .catch((error) => toast(error.message))
);
