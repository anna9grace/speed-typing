import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_IS_STARTED: 'training/setIsStarted',
  RESET_TRAINING: 'training/resetTraining',
};

export const setIsStarted = createAction(ActionType.SET_IS_STARTED);
export const resetTraining = createAction(ActionType.RESET_TRAINING);
