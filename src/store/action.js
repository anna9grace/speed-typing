import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  START_TRAINING: 'training/startTraining',
  RESET_TRAINING: 'training/resetTraining',
  SET_WRONG_SYMBOL: 'training/setWrongSymbol',
  INCREASE_MISTAKES: 'training/increaseMistakes',
  CHANGE_CURRENT_SYMBOL: 'training/changeCurrentSymbol',
  SET_MESSAGE: 'data/setMessage',
  LOAD_TEXT: 'data/loadText',
  SET_IS_LOADING: 'data/setIsLoading',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  LOGOUT: 'user/logout',
  LOAD_RESULTS: 'data/loadResults',
};

export const startTraining = createAction(ActionType.START_TRAINING);
export const resetTraining = createAction(ActionType.RESET_TRAINING);
export const setWrongSymbol = createAction(ActionType.SET_WRONG_SYMBOL);

export const increaseMistakes = createAction(ActionType.INCREASE_MISTAKES, () => ({
  payload: 1,
}));

export const changeCurrentSymbol = createAction(ActionType.CHANGE_CURRENT_SYMBOL, () => ({
  payload: 1,
}));

export const loadText = createAction(ActionType.LOAD_TEXT, (text) => ({
  payload: text,
}));

export const setMessage = createAction(ActionType.SET_MESSAGE, (text) => ({
  payload: text,
}));

export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (status, data) => ({
  payload: {
    authStatus: status,
    authInfo: data ? data : {},
  },
}));

export const logout = createAction(ActionType.LOGOUT);

export const setIsLoading = createAction(ActionType.SET_IS_LOADING, (status) => ({
  payload: status,
}));

export const loadResults = createAction(ActionType.LOAD_RESULTS, (results) => ({
  payload: results,
}));
