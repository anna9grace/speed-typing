import React from 'react';

import PropTypes from 'prop-types';

import { ResultType } from '../../constants';


const MILLISECONDS_IN_MINUTE = 60000;

const getTypeSpeed = (resultData) => {
  const spendTime = (resultData.end - new Date(resultData.start)) / MILLISECONDS_IN_MINUTE;
  const symbolsCount = resultData.rightSymbols + resultData.mistakes;

  return Math.round(symbolsCount / spendTime);
};


function Result (props) {
  const {resultType, result, className} = props;

  const getResult = () => {
    switch(resultType) {
      case ResultType.SPEED:
        return `${getTypeSpeed(result)} знак/мин`;

      case ResultType.PRECISION:
        return `${result}%`;

      default:
        return '';
    }
  };

  return (
    <span className={className}> {getResult()}</span>
  );
}

Result.propTypes = {
  resultType: PropTypes.string.isRequired,
  result: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Result;
