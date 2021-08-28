import { toast } from 'react-toastify';
import { loadText } from './action';

import { BASE_URLS } from '../constants';


export const fetchTrainingText = () => (dispatch, _getState, api) => (
  api.get(BASE_URLS.TEXT)
    .then(({ data }) => dispatch(loadText(data)))
    .catch((error) => toast(error.message))
);
