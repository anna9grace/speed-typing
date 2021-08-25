import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

function PageHeader(props) {

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Тренажер быстрой печати</a>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Выйти</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Статистика Юзер</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;
