import { cons, car, cdr, toString } from "hexlet-pairs"; // eslint-disable-line

// BEGIN (write your solution here)
// @flow

type Pair = {
  x: number,
  y: number
};

const sumOfPairs = (pair1: Pair, pair2: Pair): Pair =>
  cons(car(pair1) + car(pair2), cdr(pair1) + cdr(pair2));
// END
export default sumOfPairs;
