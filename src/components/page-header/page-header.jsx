import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './page-header.module.scss';

function PageHeader(props) {

  return (
    <header className={styles.container}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Тренажер быстрой печати</a>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={styles.navlink}>
                <a className="nav-link" href="/">Статистика Юзер</a>
              </li>
              <li className={styles.navlink}>
                <a className="nav-link" href="/">Выйти</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;
