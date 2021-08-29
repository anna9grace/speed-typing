import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button ({children, modifier, className, onBtnClick, disabled, ...attrs}) {
  const modifierClass = modifier ? `btn--${modifier}` : '';
  return (
    <button
      className={classNames(styles.btn, styles[modifierClass], className)}
      {...attrs}
      disabled={disabled}
      onClick={onBtnClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  modifier: PropTypes.string,
  className: PropTypes.string,
  onBtnClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
