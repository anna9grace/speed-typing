import React, { useEffect } from 'react';
import classNames from 'classnames';
import {useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';

import styles from './result-screen.module.scss';
import PageHeader from '../page-header/page-header';
import Result from '../result/result';
import { ResultType } from '../../constants';
import { getTypeSpeed, getTypePrecision } from '../../utils';
import { getMistakesCount, getStartTime, getCurrentSymbol, getUserInfo } from '../../store/selectors';
import { AppRoutes } from '../../constants';
import { saveResults } from '../../store/api-actions';

function ResultScreen() {
  const startTime = useSelector(getStartTime);
  const rightSymbolsCount = useSelector(getCurrentSymbol);
  const mistakesCount = useSelector(getMistakesCount);
  const user = useSelector(getUserInfo);
  const dispatch = useDispatch();

  const resultsData = {
    start: startTime,
    end: new Date(),
    rightSymbols: rightSymbolsCount,
    mistakes: mistakesCount,
  };

  const results = {
    speed: getTypeSpeed(resultsData),
    precision: getTypePrecision(resultsData),
  };

  useEffect(() => user.name && dispatch(saveResults(results, user)), []);

  if (resultsData.rightSymbols < 1) {
    return <Redirect to={AppRoutes.ROOT} />;
  }

  return (
    <React.Fragment>
      <PageHeader />
      <main className={classNames('row', 'align-items-center')}>
        <div className={classNames('row', 'justify-content-center', 'align-items-center')}>
          <h1 className={styles.title}>Так держать! Ваши результаты:</h1>
          <div
            className={classNames('col-4', 'row', 'justify-content-center', 'align-items-center', styles.wrapper)}
          >
            <div className={classNames('col-10', styles.result)}>
              Скорость печати:&nbsp;
              <Result
                resultType={ResultType.SPEED}
                result={results.speed}
              />
            </div>
            <div className={classNames('col-10', styles.result)}>
              Точность печати:&nbsp;
              <Result
                resultType={ResultType.PRECISION}
                result={results.precision}
              />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default ResultScreen;
