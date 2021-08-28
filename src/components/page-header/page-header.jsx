import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

import { systemLogout } from '../../store/api-actions';
import { getUserInfo } from '../../store/selectors';
import styles from './page-header.module.scss';
import { AppRoutes } from '../../constants';

const renderAuthNavbar = (userName, onLogout) => (
  <React.Fragment>
    <li className={styles.navlink}>
      <Link className="nav-link" to="/">Статистика {userName}</Link>
    </li>
    <li className={styles.navlink}>
      <Link
        className="nav-link"
        onClick={(evt) => {
          evt.preventDefault();
          onLogout();
        }}
        to={AppRoutes.ROOT}
      >
        Выйти
      </Link>
    </li>
  </React.Fragment>
);

const renderNoAuthNavbar = (isLogin) => (
  <li className={styles.navlink}>
    {isLogin || <Link className="nav-link" to={AppRoutes.LOGIN}>Войти</Link>}
  </li>
);

function PageHeader(props) {
  const {isMain, isLogin} = props;
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(systemLogout());

  return (
    <header className={styles.container}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {
            isMain
              ? <span className="navbar-brand">Тренажер быстрой печати</span>
              : <Link className="navbar-brand" to={AppRoutes.ROOT}>Тренажер быстрой печати</Link>
          }
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {(userInfo.name && renderAuthNavbar(userInfo.name, onLogout)) || renderNoAuthNavbar(isLogin)}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}


PageHeader.propTypes = {
  isMain: PropTypes.bool,
  isLogin: PropTypes.bool,
};

export default PageHeader;
