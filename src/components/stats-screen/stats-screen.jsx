import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './stats-screen.module.scss';

import PageHeader from '../page-header/page-header';
import LoadingScreen from '../loading-screen/loading-screen';
import { getResults, getUserInfo, getLoadingStatus } from '../../store/selectors';
import { fetchResults } from '../../store/api-actions';

function StatsScreen () {
  const results = useSelector(getResults);
  const user = useSelector(getUserInfo);
  const loadingStatus = useSelector(getLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    user.id && dispatch(fetchResults(user));
  }, [user]);

  // if (!user.id && !loadingStatus) {
  //   // dispatch(setIsLoading(false));
  //   return <Redirect to={AppRoutes.ROOT} />;
  // }

  const renderMainContent = () => (
    <div className={classNames('row', 'justify-content-center', 'align-items-center')}>
      <h1 className={styles.title}>Результаты пользователя <span>{user.name}</span></h1>
      <div className={classNames('col-4', 'row', 'justify-content-center', 'align-items-center', styles.wrapper)}>

        <ol >
          {results.map((res, index) => (
            <li key={`${res.id}${index}`}>
              <p>Скорость: <span className={styles.result}>{res.speed}</span></p>
              <p>Точность: <span className={styles.result}>{res.precision}</span></p>
              {index !== results.length - 1 && <hr/>}
            </li>
          ))}
        </ol>

      </div>
    </div>
  );

  return (
    <React.Fragment>
      <PageHeader />
      <main className={classNames('row', 'align-items-center')}>
        {(loadingStatus && <LoadingScreen />) || renderMainContent()}
      </main>
    </React.Fragment>
  );
}

export default StatsScreen;
