import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import { resetTraining } from '../../store/action';
import { fetchTrainingText } from '../../store/api-actions';
import styles from './training-block.module.scss';
import Button from '../button/button';
import CurrentSpeedResult from '../current-speed-result/current-speed-result';
import TrainingText from '../training-text/training-text';

function TrainingBlock(props) {
  const {currentRef} = props;
  const dispatch = useDispatch();

  return (
    <div
      className={classNames('row', 'justify-content-center', styles.container)}
    >
      <div className={classNames('col-10', 'col-md-6', styles.wrapper)}>
        <div className={styles.header}>
          <p className={styles.result}>
            Скорость печати:&nbsp;
            <CurrentSpeedResult className={styles.rate}/>
          </p>

          <Button
            className={styles.button}
            modifier='dark'
            onBtnClick={() => {
              dispatch(resetTraining());
              dispatch(fetchTrainingText());
            }}
          >
            сменить текст
          </Button>

          <Button
            className={styles.button}
            modifier='dark'
            onBtnClick={() => dispatch(resetTraining())}
          >
            начать заново
          </Button>
        </div>

        <TrainingText currentRef={currentRef}/>
      </div>
    </div>
  );
}

TrainingBlock.propTypes = {
  currentRef: PropTypes.object.isRequired,
};

export default TrainingBlock;
