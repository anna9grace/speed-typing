import React from 'react';
import {useSelector} from 'react-redux';
import styles from './training-text.module.scss';

import { getTrainingText, getCurrentSymbol } from '../../store/selectors';

function TrainingText () {
  const text = useSelector(getTrainingText);
  const currentSymbol = useSelector(getCurrentSymbol);

  return (
    <p className={styles.container}>
      <span className={styles.completed}>
        {currentSymbol > 0 && text.slice(0, currentSymbol)}
      </span>

      <span className={styles.current}>
        {text.slice(currentSymbol, currentSymbol + 1)}
      </span>

      <span className={styles.uncompleted}>
        {text.slice(currentSymbol + 1)}
      </span>
    </p>
  );
}

export default TrainingText;
