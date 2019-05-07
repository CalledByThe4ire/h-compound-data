import { cons, car, cdr } from '../pairs';

describe('Pairs', () => {
  it('1 set', () => {
    const pair = cons(0, 0);
    expect(pair).toBe(1);
    expect(car(pair)).toBe(0);
    expect(cdr(pair)).toBe(0);
  });

  it('2 set', () => {
    const pair = cons(1, 2);
    expect(pair).toBe(18);
    expect(car(pair)).toBe(1);
    expect(cdr(pair)).toBe(2);
  });

  it('3 set', () => {
    const pair = cons(2, 1);
    expect(pair).toBe(12);
    expect(car(pair)).toBe(2);
    expect(cdr(pair)).toBe(1);
  });

  it('4 set', () => {
    const pair = cons(5, 8);
    expect(pair).toBe(209952);
    expect(car(pair)).toBe(5);
    expect(cdr(pair)).toBe(8);
  });

  it('5 set', () => {
    const pair = cons(0, 0);
    const transit = cons(1, 1);
    expect(pair).toBe(1);
    expect(car(pair)).toBe(0);
    expect(cdr(pair)).toBe(0);
    expect(car(transit)).toBe(1);
    expect(cdr(transit)).toBe(1);
  });
});
