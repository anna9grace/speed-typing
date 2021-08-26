import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import { resetTraining } from '../../store/action';
import styles from './training-block.module.scss';
import Button from '../button/button';
import CurrentResult from '../current-result/current-result';
import { ResultType } from '../../constants';
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
            Скорость печати:
            <CurrentResult className={styles.rate} resultType={ResultType.SPEED}/>
          </p>

          <Button
            className={styles.button}
            modifier='dark'
            onBtnClick={() => {}}
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
