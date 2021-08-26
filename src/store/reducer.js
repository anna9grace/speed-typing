import {createReducer} from '@reduxjs/toolkit';

import {setIsStarted} from './action';

const initialState = {
  isTrainingStarted: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsStarted, (state) => {
      state.isTrainingStarted = true;
    });
});

export default reducer;
