import React from 'react';
import { ResultType } from '../../constants';
import PropTypes from 'prop-types';

const getResult = (resultType) => {
  switch(resultType) {
    case ResultType.SPEED:
      return '150 знак/мин';

    case ResultType.PRECISION:
      return '65%';

    default:
      return '';
  }
};

function CurrentResult (props) {
  const {resultType, className} = props;

  return (
    <span className={className}> {getResult(resultType)}</span>
  );
}

CurrentResult.propTypes = {
  resultType: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CurrentResult;
