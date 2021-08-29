import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoginScreen from '../login-screen/login-screen';
import ResultScreen from '../result-screen/result-screen';
import styles from './app.module.scss';
import { AppRoutes } from '../../constants';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className={styles.layout}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <MainScreen />
        </Route>

        <Route exact path={AppRoutes.LOGIN}>
          <LoginScreen />
        </Route>

        <Route exact path={AppRoutes.RESULT}>
          <ResultScreen />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>

      <ToastContainer
        autoClose={false}
      />
    </div>
  );
}

export default App;
