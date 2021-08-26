import { Symbols } from './constants';

export const checkSymbol = (symbol) => {
  const isSymbolValid =
    Symbols.LETTERS.includes(symbol) ||
    Symbols.OTHER_SYMBOLS.includes(symbol);

  return isSymbolValid;
};
