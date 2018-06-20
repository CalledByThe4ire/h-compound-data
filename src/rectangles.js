/* eslint-disable import/prefer-default-export */
import {
  makePoint,
  getX,
  getY,
  quadrant,
  toString as pointToString, // eslint-disable-line no-unused-vars
} from 'hexlet-points';
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line no-unused-vars

// BEGIN (write your solution here)
// @flow
type Pair = {
  x: number,
  y: number,
};

type Rectangle = {
  point: Pair,
  dimensions: Pair
};

export const makeRectangle = (
  point: Pair,
  width: number,
  height: number,
): Rectangle => cons(point, cons(width, height));

export const getStartPoint = (rect: Rectangle) => car(rect);

export const getWidth = (rect: Rectangle) => car(cdr(rect));

export const getHeight = (rect: Rectangle) => cdr(cdr(rect));

export const square = (rect: Rectangle): number =>
  getWidth(rect) * getHeight(rect);

export const perimeter = (rect: Rectangle): number =>
  2 * (getWidth(rect) + getHeight(rect));

export const containsTheOrigin = (rect: Rectangle): boolean => {
  const topLeftPoint = getStartPoint(rect);
  const x = getX(topLeftPoint) + getWidth(rect);
  const y = getY(topLeftPoint) - getHeight(rect);
  const bottomRightPoint = makePoint(x, y);

  return quadrant(topLeftPoint) === 2 && quadrant(bottomRightPoint) === 4;
};
// END
