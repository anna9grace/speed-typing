import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import { getUser } from '../../store/selectors';
import styles from './page-header.module.scss';

const renderAuthNavbar = (userName) => (
  <React.Fragment>
    <li className={styles.navlink}>
      <a className="nav-link" href="/">Статистика {userName}</a>
    </li>
    <li className={styles.navlink}>
      <a className="nav-link" href="/">Выйти</a>
    </li>
  </React.Fragment>
);

const renderNoAuthNavbar = () => (
  <li className={styles.navlink}>
    <a className="nav-link" href="/login">Войти</a>
  </li>
);

function PageHeader(props) {
  const {isMain} = props;
  const user = useSelector(getUser);

  return (
    <header className={styles.container}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {
            isMain
              ? <span className="navbar-brand">Тренажер быстрой печати</span>
              : <a className="navbar-brand" href="/">Тренажер быстрой печати</a>
          }
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {(user && renderAuthNavbar(user)) || renderNoAuthNavbar()}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}


PageHeader.propTypes = {
  isMain: PropTypes.bool,
};

export default PageHeader;
