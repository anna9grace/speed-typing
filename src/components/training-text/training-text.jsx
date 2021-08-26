import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './training-text.module.scss';

import { getTrainingText, getCurrentSymbol, getWrongSymbolNumber } from '../../store/selectors';

function TrainingText (props) {
  const {currentRef} = props;
  const text = useSelector(getTrainingText);
  const wrongSymbol = useSelector(getWrongSymbolNumber);
  const currentSymbol = useSelector(getCurrentSymbol);

  return (
    <p className={styles.container}>
      <span className={styles.completed}>
        {currentSymbol > 0 && text.slice(0, currentSymbol)}
      </span>

      <span
        className={classNames(styles.current, wrongSymbol === currentSymbol ? styles.wrong : '')}
        ref={currentRef}
      >
        {text.slice(currentSymbol, currentSymbol + 1)}
      </span>

      <span className={styles.uncompleted}>
        {text.slice(currentSymbol + 1)}
      </span>
    </p>
  );
}

TrainingText.propTypes = {
  currentRef: PropTypes.object.isRequired,
};

export default TrainingText;
