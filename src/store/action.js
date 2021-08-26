import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_IS_STARTED: 'training/setIsStarted',
  RESET_TRAINING: 'training/resetTraining',
  SET_WRONG_SYMBOL: 'training/setWrongSymbol',
  INCREASE_MISTAKES: 'training/increaseMistakes',
  CHANGE_CURRENT_SYMBOL: 'training/changeCurrentSymbol',
};

export const setIsStarted = createAction(ActionType.SET_IS_STARTED);
export const resetTraining = createAction(ActionType.RESET_TRAINING);
export const setWrongSymbol = createAction(ActionType.SET_WRONG_SYMBOL);
export const increaseMistakes = createAction(ActionType.INCREASE_MISTAKES, () => ({
  payload: 1,
}));
export const changeCurrentSymbol = createAction(ActionType.CHANGE_CURRENT_SYMBOL, () => ({
  payload: 1,
}));
