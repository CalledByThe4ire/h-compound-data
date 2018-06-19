import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow

type Pair = {
  x: number,
  y: number
};

const sumOfPairs = (pair1: Pair, pair2: Pair): Pair => {
  const x = car(pair1) + car(pair2);
  const y = cdr(pair1) + cdr(pair2);
  return cons(x, y);
};
// END
export default sumOfPairs;
