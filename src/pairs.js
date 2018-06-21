/* eslint-disable import/prefer-default-export */
export const cons = (x, y) => f => f(x, y);

// BEGIN (write your solution here)
// @flow
const T = (thn: mixed, els: mixed): mixed => thn; // eslint-disable-line
const F = (thn: mixed, els: mixed): mixed => els; // eslint-disable-line

export const car = cons(T);
export const cdr = cons(F);

// END
