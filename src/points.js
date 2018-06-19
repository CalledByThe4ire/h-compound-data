import { makePoint, getX, getY } from 'hexlet-points'; // eslint-disable-line
/* eslint-disable import/prefer-default-export */

// @flow
type Point = {
  x: number,
  y: number,
};

// BEGIN (write your solution here)
export const getQuadrant = (point: Point): number | null => {
  if (getX(point) > 0 && getY(point) > 0) {
    return 1;
  } else if (getX(point) < 0 && getY(point) > 0) {
    return 2;
  } else if (getX(point) < 0 && getY(point) < 0) {
    return 3;
  } else if (getX(point) > 0 && getY(point) < 0) {
    return 4;
  }
  return null;
};

export const getSymmetricalPoint = (point: Point): Point => makePoint(-getX(point), -getY(point));

export const calculateDistance = (point1: Point, point2: Point): number => {
  const x: number = getX(point2) - getX(point1);
  const y: number = getY(point2) - getY(point1);
  return Math.sqrt((x ** 2) + (y ** 2));
};
// END
