import React from 'react';
import styles from './training-block.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button/button';
import CurrentResult from '../current-result/current-result';
import { ResultType } from '../../constants';

function TrainingBlock({ children, ...attrs }) {
  // document.addEventListener('keydown', (evt) => {
  //   console.log(evt.key);
  // });

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
          <Button className={styles.button} modifier='dark'>сменить текст</Button>
          <Button className={styles.button} modifier='dark'>начать заново</Button>
        </div>
        <p>{children}</p>
      </div>
    </div>
  );
}

TrainingBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrainingBlock;
