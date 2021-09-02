import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './result.module.scss';

import { ResultType } from '../../constants';


function Result (props) {
  const {resultType, result, className} = props;

  const getResult = () => {
    switch(resultType) {
      case ResultType.SPEED:
        return `${result} знак/мин`;

      case ResultType.PRECISION:
        return `${result}%`;

      default:
        return '';
    }
  };

  return (
    <span className={classNames(className, styles.item)}> {getResult()}</span>
  );
}

Result.propTypes = {
  resultType: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Result;
