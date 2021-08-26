import {createReducer} from '@reduxjs/toolkit';

import {setIsStarted, resetTraining} from './action';

const initialState = {
  isTrainingStarted: false,
  currentSymbolNumber: 0,
  currentSymbolTyped: null,
  timePassed: 0,
  mistakesCount: 0,
  trainingText: 'Пребывание на территориях национальных парков (за исключением участков, расположенных в границах населенных пунктов) физических лиц, не являющихся работниками федеральных государственных бюджетных учреждений, осуществляющих управление национальными парками, должностными лицами федерального органа исполнительной власти, в ведении которого находятся национальные парки, допускается только при наличии разрешения федерального государственного бюджетного учреждения, осуществляющего управление национальным парком, или федерального органа исполнительной власти, в ведении которого находятся национальные парки',
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
      state.currentSymbolTyped = null;
      state.timePassed = 0;
      state.mistakesCount = 0;
    });
});

export default reducer;
