import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_IS_STARTED: 'training/setIsStarted',
};

export const setIsStarted = createAction(ActionType.SET_IS_STARTED);
