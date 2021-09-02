import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoginScreen from '../login-screen/login-screen';
import ResultScreen from '../result-screen/result-screen';
import StatsScreen from '../stats-screen/stats-screen';
import styles from './app.module.scss';
import { AppRoutes } from '../../constants';
import { isCheckedAuth } from '../../utils';
import { getAuthStatus } from '../../store/selectors';

import 'react-toastify/dist/ReactToastify.css';
import LoadingScreen from '../loading-screen/loading-screen';


const renderAppScreen = () => (
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

      <Route exact path={AppRoutes.STATS}>
        <StatsScreen />
      </Route>

      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>

  </div>
);


function App(props) {
  const { authorizationStatus } = props;
  const isPageSuccess = isCheckedAuth(authorizationStatus);

  return (
    <React.Fragment>
      {(isPageSuccess && renderAppScreen()) || <LoadingScreen />}

      <ToastContainer
        autoClose={false}
      />
    </React.Fragment>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});

export { App };
export default connect(mapStateToProps, null)(App);
