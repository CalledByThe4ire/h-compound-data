import { car, cdr, isPair, toString } from "hexlet-pairs"; // eslint-disable-line

// BEGIN (write your solution here)
// @flow

type Pair = {
  a: mixed,
  b: mixed
};

const findPrimitiveBox = (pair: Pair): Pair => {
  const first: Pair | null = car(pair);
  const last: Pair | null = cdr(pair);

  if (!isPair(first) && !isPair(last)) {
    return pair;
  }

  const next: Pair = isPair(first) ? first : last;
  return findPrimitiveBox(next);
};

// END

export default findPrimitiveBox;
