import {createReducer} from '@reduxjs/toolkit';

import {setIsStarted, resetTraining, setWrongSymbol, increaseMistakes, changeCurrentSymbol} from './action';

const initialState = {
  isTrainingStarted: false,
  currentSymbolNumber: 0,
  wrongSymbolNumber: null,
  timePassed: 0,
  mistakesCount: 0,
  trainingText: 'Picanha ham chicken beef.  Brisket jerky turducken prosciutto ham hock, veniam occaecat ipsum pancetta ex andouille pig ut fatback salami.  Chislic ea lorem adipisicing, pig laborum corned beef magna do turkey sed swine.  Velit swine chicken mollit id ut shankle beef elit do.  Beef ribs meatloaf irure pork loin enim tongue cupidatat capicola drumstick landjaeger bresaola est alcatra.  Brisket adipisicing laboris in swine mollit ea veniam do.","Pariatur doner consectetur, tenderloin short ribs nulla sed tail irure in shank dolore.',
  messageText: 'Начните печатать, когда будете готовы!',
  user: 'Anna',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsStarted, (state) => {
      state.isTrainingStarted = true;
    })
    .addCase(resetTraining, (state) => {
      state.isTrainingStarted = false;
      state.currentSymbolNumber = 0;
      state.wrongSymbolNumber = null;
      state.timePassed = 0;
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
