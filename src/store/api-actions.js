import { toast } from 'react-toastify';
import { loadText } from './action';

import { BASE_URLS } from '../constants';
import { APIRoute } from '../constants';
import { AuthorizationStatus } from '../constants';
import { requireAuthorization, logout, setIsLoading, loadResults } from './action';


export const fetchTrainingText = () => (dispatch, _getState, api) => (
  api.get(BASE_URLS.TEXT)
    .then(({ data }) => dispatch(loadText(data)))
    .then(() => dispatch(setIsLoading(false)))
    .catch((error) => {
      dispatch(setIsLoading(false));
      toast(error.message);
    })
);

export const fetchResults = (user) => (dispatch, _getState, api) => (
  api.get(`${BASE_URLS.RESULTS}/${user.name}${user.id}`)
    .then(({ data }) => dispatch(loadResults(data.userResults)))
    .then(() => dispatch(setIsLoading(false)))
    .catch((error) => {
      dispatch(setIsLoading(false));
      toast(error.message);
    })
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


export const getUpdatedResults = (speed, precision, user, api) => (
  new Promise((resolve) => {
    api.get(BASE_URLS.RESULTS)
      .then(({ data }) => {
        let newRes = null;
        let isNewUser = true;
        const index = data.findIndex((res) => res.id === `${user.name}${user.id}`);

        if (index > -1) {
          isNewUser = false;
          newRes = data[index];
          newRes.userResults.push({speed, precision});
        } else {
          newRes = {
            id: `${user.name}${user.id}`,
            userResults: [
              {
                speed: speed,
                precision: precision,
              },
            ],
          };
        }
        resolve([newRes, isNewUser]);
      })
      .catch((error) => {
        toast(error.message);
      });
  })
);

export const saveResults = ({speed, precision}, user) => (dispatch, _getState, api) => {
  getUpdatedResults(speed, precision, user, api)
    .then(([results, isNewUser]) => {
      if (isNewUser) {
        api.post(BASE_URLS.RESULTS, results);
      } else {
        api.put(`${BASE_URLS.RESULTS}/${user.name}${user.id}`, results);
      }
    })
    .catch((error) => {
      toast(error.message);
    });
};
