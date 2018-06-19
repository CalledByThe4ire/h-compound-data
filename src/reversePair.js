import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow

type Pair = {
  firstValue: mixed,
  secondValue: mixed,
};

const reversePair = (pair: Pair): Pair => cons(cdr(pair), car(pair));

// END
export default reversePair;
