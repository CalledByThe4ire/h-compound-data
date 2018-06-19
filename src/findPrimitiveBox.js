import { car, cdr, isPair, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow

type Pair = {
  a: mixed,
  b: mixed,
};

const findPrimitiveBox = (pair: Pair): Pair => {
  if (!isPair(car(pair)) && !isPair(cdr(pair))) {
    return pair;
  }
  if (isPair(car(pair))) {
    return findPrimitiveBox(car(pair));
  }
  return findPrimitiveBox(cdr(pair));
};

// END

export default findPrimitiveBox;
