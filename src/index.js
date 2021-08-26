import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import './index.scss';

import reducer from './store/reducer';
// import { createAPI } from './services/api';

// export const api = createAPI(
//   () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
// );

const store = configureStore({
  reducer: reducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: api,
  //     },
  //   }),
});

// store.dispatch(checkAuth(true));
// store.dispatch(fetchFilmsList());
// store.dispatch(fetchPromoFilm());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
