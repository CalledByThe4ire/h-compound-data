/* eslint-disable import/prefer-default-export, function-paren-newline */
import {
  makePoint,
  getX,
  getY,
  toString as pointToString
} from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
// @flow

type Point = {
  x: number,
  y: number
};

type Segment = {
  a: Point,
  b: Point
};

export const makeSegment = (point1: Point, point2: Point): Segment =>
  cons(point1, point2);
export const startSegment = (segment: Segment) => car(segment);
export const endSegment = (segment: Segment) => cdr(segment);
export const segmentToString = (segment: Segment) =>
  `[${pointToString(startSegment(segment))}, ${pointToString(
    endSegment(segment),
  )}]`;
export const midpointSegment = (segment: Segment): Point => {
  // variables
  const pointA = startSegment(segment);
  const pointB = endSegment(segment);
  const x = (getX(pointA) + getX(pointB)) / 2;
  const y = (getY(pointA) + getY(pointB)) / 2;

  return makePoint(x, y);
};
// END
