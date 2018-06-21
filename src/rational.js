/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
// @flow
type Rational = {
  numer: number,
  denom: number
};
export const make = (numer: number, denom: number): Rational =>
  cons(numer, denom);
export const numer = (rat: Rational): number => car(rat);
export const denom = (rat: Rational): number => cdr(rat);
export const toString = (rat: Rational): string => `${numer(rat)} / ${denom(rat)}`;
export const isEqual = (rat1: Rational, rat2: Rational): boolean =>
  numer(rat1) * denom(rat2) === numer(rat2) * denom(rat1);
export const add = (rat1: Rational, rat2: Rational): number => {
  const n: number = (numer(rat1) * denom(rat2)) + (denom(rat1) * numer(rat2));
  const d: number = denom(rat1) * denom(rat2);
  return make(n, d);
};
export const sub = (rat1: Rational, rat2: Rational): number => {
  const n: number = (numer(rat1) * denom(rat2)) - (denom(rat1) * numer(rat2));
  const d: number = denom(rat1) * denom(rat2);
  return make(n, d);
};
export const mul = (rat1: Rational, rat2: Rational): number => {
  const n: number = numer(rat1) * numer(rat2);
  const d: number = denom(rat1) * denom(rat2);
  return make(n, d);
};
export const div = (rat1: Rational, rat2: Rational): number => {
  const n: number = numer(rat1) * denom(rat2);
  const d: number = denom(rat1) * numer(rat2);
  return make(n, d);
};
// END
