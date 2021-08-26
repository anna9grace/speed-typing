import { Symbols } from './constants';

export const checkSymbol = (symbol) => {
  const isSymbolValid =
    (symbol >= Symbols.FIRST_LETTER && symbol <= Symbols.LAST_LETTER) ||
    Symbols.OTHER_SYMBOLS.includes(symbol);

  return isSymbolValid;
};
