import {createReducer} from '@reduxjs/toolkit';

import {startTraining, resetTraining, setWrongSymbol, increaseMistakes, changeCurrentSymbol} from './action';

const initialState = {
  isTrainingStarted: false,
  currentSymbolNumber: 0,
  wrongSymbolNumber: null,
  startTime: null,
  mistakesCount: 0,
  trainingText: 'Picanha ham chicken beef.',
  messageText: 'Начните печатать, когда будете готовы!',
  user: 'Anna',
};

// Brisket jerky turducken prosciutto ham hock, veniam occaecat ipsum pancetta ex andouille pig ut fatback salami.

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(startTraining, (state) => {
      state.isTrainingStarted = true;
      state.startTime = `${new Date()}`;
    })
    .addCase(resetTraining, (state) => {
      state.isTrainingStarted = false;
      state.currentSymbolNumber = 0;
      state.symbolsTypedCount = 0;
      state.wrongSymbolNumber = null;
      state.startTime = null;
      state.mistakesCount = 0;
    })
    .addCase(setWrongSymbol, (state) => {
      state.wrongSymbolNumber = state.currentSymbolNumber;
    })
    .addCase(increaseMistakes, (state, action) => {
      state.mistakesCount = state.mistakesCount + action.payload;
    })
    .addCase(changeCurrentSymbol, (state, action) => {
      state.currentSymbolNumber = state.currentSymbolNumber + action.payload;
    });
});

export default reducer;
