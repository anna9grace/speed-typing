import React, {useRef, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import { getTrainingStatus, getMessageText, getTrainingText, getCurrentSymbol } from '../../store/selectors';
import { startTraining, setWrongSymbol, increaseMistakes, changeCurrentSymbol } from '../../store/action';
import { checkSymbol } from '../../utils';
import { AppRoutes } from '../../constants';

import PageHeader from '../page-header/page-header';
import Message from '../message/message';
import TrainingBlock from '../training-block/training-block';

function MainScreen() {
  const dispatch = useDispatch();
  const trainingStatus = useSelector(getTrainingStatus);
  const message = useSelector(getMessageText);
  const currentSymbol = useSelector(getCurrentSymbol);
  const symbolRef = useRef();
  const textLength = useSelector(getTrainingText).length;

  const onKeydown = (evt) => {
    if (!checkSymbol(evt.key)) {
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

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [trainingStatus]);

  if (currentSymbol === textLength) {
    return <Redirect to={AppRoutes.RESULT} />;
  }

  return (
    <React.Fragment>
      <PageHeader isMain/>
      <main>
        <Message>{message}</Message>
        <TrainingBlock currentRef={symbolRef}/>
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
