import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './message.module.scss';

function Message({children, ...props}) {
  return (
    <div className={classNames('row', 'justify-content-center', styles.container)}>
      <div className={classNames('col-6', styles.wrapper)}>
        {children}
      </div>
    </div>
  );
}

Message.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Message;
