import React from 'react';
import MainScreen from '../main-screen/main-screen';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.layout}>
      <MainScreen />
    </div>
  );
}

export default App;
