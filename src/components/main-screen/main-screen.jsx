import React, { useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './main-screen.module.scss';
import { getTrainingStatus, getMessageText, getTrainingText, getCurrentSymbol, getLoadingStatus } from '../../store/selectors';
import { startTraining, setWrongSymbol, increaseMistakes, changeCurrentSymbol, setMessage } from '../../store/action';
import { fetchTrainingText } from '../../store/api-actions';
import { checkSymbol } from '../../utils';
import { AppRoutes, MessageTexts } from '../../constants';

import PageHeader from '../page-header/page-header';
import LoadingScreen from '../loading-screen/loading-screen';
import Message from '../message/message';
import TrainingBlock from '../training-block/training-block';

function MainScreen() {
  const dispatch = useDispatch();
  const symbolRef = useRef();

  const trainingStatus = useSelector(getTrainingStatus);
  const message = useSelector(getMessageText);
  const currentSymbol = useSelector(getCurrentSymbol);
  const text = useSelector(getTrainingText);
  const loadingStatus = useSelector(getLoadingStatus);

  const onKeydown = (evt) => {
    if (!checkSymbol(evt.key) || loadingStatus) {
      return;
    }
    evt.preventDefault();

    if (!trainingStatus) {
      dispatch(startTraining());
    }

    if (evt.key === symbolRef.current.textContent) {
      dispatch(changeCurrentSymbol());
    } else {
      dispatch(setWrongSymbol());
      dispatch(increaseMistakes());
    }
  };

  useEffect(() =>   dispatch(fetchTrainingText()), []);

  useEffect(() => {
    dispatch(setMessage(`${!trainingStatus ? MessageTexts.START : ''}`));

    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [trainingStatus, loadingStatus]);

  if (text && currentSymbol === text.length) {
    return <Redirect to={AppRoutes.RESULT} />;
  }

  const renderMainContent = () => (
    <React.Fragment>
      <div className={classNames(styles.container, message ? '' : styles.hidden)}>
        <Message>{message}</Message>
      </div>
      <TrainingBlock classNames={styles.container} currentRef={symbolRef} />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <PageHeader isMain />
      <main>
        {(!text && <LoadingScreen />) || renderMainContent()}
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
