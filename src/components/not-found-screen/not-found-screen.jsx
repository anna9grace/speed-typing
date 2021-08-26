import React from 'react';
import {Link} from 'react-router-dom';
import styles from './not-found-screen.module.scss';

function NotFoundScreen() {
  return (
    <div className={styles.container}>
      <h1>404. Page not found</h1>
      <Link to='/'>Go to main page</Link>
    </div>
  );
}

export default NotFoundScreen;
