import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './result.module.scss';

import { ResultType } from '../../constants';

const MILLISECONDS_IN_MINUTE = 60000;
const PERCENTS = 100;

const getTypeSpeed = (resultData) => {
  const spendTime = (resultData.end - new Date(resultData.start)) / MILLISECONDS_IN_MINUTE;
  const symbolsCount = resultData.rightSymbols + resultData.mistakes;
  return Math.round(symbolsCount / spendTime);
};

const getTypePrecision = (resultData) => {
  const symbolsCount = resultData.rightSymbols + resultData.mistakes;
  return Math.round((resultData.rightSymbols / symbolsCount) * PERCENTS);
};

function Result (props) {
  const {resultType, result, className} = props;

  const getResult = () => {
    switch(resultType) {
      case ResultType.SPEED:
        return `${getTypeSpeed(result)} знак/мин`;

      case ResultType.PRECISION:
        return `${getTypePrecision(result)}%`;

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
  result: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Result;
