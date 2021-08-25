import React from 'react';
import styles from './training-block.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function TrainingBlock({children, ...attr}) {
  return (
    <div
      className={classNames('row', 'justify-content-center', styles.container)}
    >
      <div className={classNames('col-10', 'col-md-6', styles.wrapper)}>
        <p>{children}</p>
      </div>
    </div>
  );
}

TrainingBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrainingBlock;
