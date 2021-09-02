import { Symbols } from './constants';

const MILLISECONDS_IN_MINUTE = 60000;
const PERCENTS = 100;

export const checkSymbol = (symbol) => {
  const isSymbolValid =
    Symbols.LETTERS.includes(symbol) ||
    Symbols.OTHER_SYMBOLS.includes(symbol);

  return isSymbolValid;
};

export const getTypeSpeed = (resultData) => {
  const spendTime = (resultData.end - new Date(resultData.start)) / MILLISECONDS_IN_MINUTE;
  const symbolsCount = resultData.rightSymbols + resultData.mistakes;
  return Math.round(symbolsCount / spendTime);
};

export const getTypePrecision = (resultData) => {
  const symbolsCount = resultData.rightSymbols + resultData.mistakes;
  return Math.round((resultData.rightSymbols / symbolsCount) * PERCENTS);
};
