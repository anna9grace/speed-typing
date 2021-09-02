import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import { ResultType } from '../../constants';
import { getTypeSpeed } from '../../utils';
import Result from '../result/result';
import { getMistakesCount, getStartTime, getCurrentSymbol, getTrainingStatus } from '../../store/selectors';

const RESULT_UPDATE_INTERVAL = 1000;

function CurrentSpeedResult (props) {
  const {className} = props;

  const isStarted = useSelector(getTrainingStatus);
  const startTime = useSelector(getStartTime);
  const rightSymbolsCount = useSelector(getCurrentSymbol);
  const mistakesCount = useSelector(getMistakesCount);

  const initialResult = {
    start: 0,
    end: 0,
    rightSymbols: 0,
    mistakes: 0,
  };

  const [result, setResult] = useState(getTypeSpeed(initialResult));
  const [timePassed, setTimePassed] = useState(0);

  useEffect(() => {
    let updateInterval = null;
    let time = 0;

    if (isStarted) {
      updateInterval = setInterval(() => {
        time++;
        setTimePassed(time);
      }, RESULT_UPDATE_INTERVAL);
    }

    return (() => {
      setResult(getTypeSpeed(initialResult));
      clearInterval(updateInterval);
    });
  }, [isStarted]);

  useEffect(() => {
    setResult(getTypeSpeed({
      start: startTime,
      end: new Date(),
      rightSymbols: rightSymbolsCount,
      mistakes: mistakesCount,
    }));
  }, [timePassed, isStarted]);

  return (
    <Result
      resultType={ResultType.SPEED}
      className={className}
      result={result}
    />
  );
}

CurrentSpeedResult.propTypes = {
  className: PropTypes.string,
};

export default CurrentSpeedResult;
