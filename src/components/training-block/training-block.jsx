import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getLoadingStatus } from '../../store/selectors';
import { resetTraining, setIsLoading } from '../../store/action';
import { fetchTrainingText } from '../../store/api-actions';
import styles from './training-block.module.scss';
import Button from '../button/button';
import CurrentSpeedResult from '../current-speed-result/current-speed-result';
import TrainingText from '../training-text/training-text';

function TrainingBlock(props) {
  const { currentRef } = props;
  const loadingStatus = useSelector(getLoadingStatus);
  const dispatch = useDispatch();

  const onChangeClickHandler = () => {
    if (loadingStatus) {
      return;
    }
    dispatch(setIsLoading(true));
    dispatch(fetchTrainingText());
    dispatch(resetTraining());
  };

  return (
    <div
      className={classNames('row', 'justify-content-center', styles.container)}
    >
      <div className={classNames('col-10', 'col-md-6', styles.wrapper)}>
        <div className={styles.header}>
          <p className={styles.result}>
            Скорость печати:&nbsp;
            <CurrentSpeedResult className={styles.rate} />
          </p>

          <Button
            className={styles.button}
            disabled={loadingStatus}
            modifier='dark'
            onBtnClick={onChangeClickHandler}
          >
            сменить текст
          </Button>

          <Button
            className={styles.button}
            disabled={loadingStatus}
            modifier='dark'
            onBtnClick={() => {
              !loadingStatus && dispatch(resetTraining());
            }}
          >
            начать заново
          </Button>
        </div>

        <TrainingText currentRef={currentRef} />
      </div>
    </div>
  );
}

TrainingBlock.propTypes = {
  currentRef: PropTypes.object.isRequired,
};

export default TrainingBlock;
