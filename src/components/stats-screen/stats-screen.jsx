import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { Redirect } from 'react-router';
import { nanoid } from 'nanoid';

import styles from './stats-screen.module.scss';

import PageHeader from '../page-header/page-header';
import LoadingScreen from '../loading-screen/loading-screen';
import { getResults, getUserInfo, getLoadingStatus, getAuthStatus } from '../../store/selectors';
import { fetchResults } from '../../store/api-actions';
import { AppRoutes, AuthorizationStatus } from '../../constants';

function StatsScreen () {
  const results = useSelector(getResults);
  const user = useSelector(getUserInfo);
  const loadingStatus = useSelector(getLoadingStatus);
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);

  useEffect(() => {
    user.id && dispatch(fetchResults(user));
  }, [user]);


  if (authStatus === AuthorizationStatus.NO_AUTH) {
    return <Redirect to={AppRoutes.ROOT} />;
  }

  const renderMainContent = () => (
    <div className={classNames('row', 'justify-content-center', 'align-items-center', styles.container)}>
      <h1 className={styles.title}>Результаты пользователя <span>{user.name}</span></h1>
      <div className={classNames('col-4', 'row', 'justify-content-center', 'align-items-center', styles.wrapper)}>
        {
          results.length === 0
            ? <p>У вас пока нет сохраненных результатов</p>
            : (
              <ol >
                {results.map((res, index) => (
                  <li key={nanoid()}>
                    <p>Скорость: <span className={styles.result}>{res.speed}</span></p>
                    <p>Точность: <span className={styles.result}>{res.precision}</span></p>
                    {index !== results.length - 1 && <hr/>}
                  </li>
                ))}
              </ol>
            )
        }
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
