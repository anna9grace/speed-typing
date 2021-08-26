import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button ({children, modifier, className, ...attrs}) {
  const modifierClass = modifier ? `btn--${modifier}` : '';
  return (
    <button className={classNames(styles.btn, styles[modifierClass], className)} {...attrs}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  modifier: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
