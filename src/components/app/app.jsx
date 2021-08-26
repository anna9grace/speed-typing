import React from 'react';
import {Switch, Route } from 'react-router-dom';
// import LoadingScreen from '../loading-screen/loading-screen';
import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoginScreen from '../login-screen/login-screen';
import ResultScreen from '../result-screen/result-screen';
import styles from './app.module.scss';
import { AppRoutes } from '../../constants';

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

        <Route exact path={AppRoutes.RESULT}
          render={() => <ResultScreen />}
        />

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
