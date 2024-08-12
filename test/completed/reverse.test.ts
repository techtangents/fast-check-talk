import fc from "fast-check";
import {reverse} from "../../src/main";

describe('reverse', () => {
  it('reverses some hard-coded lists', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it('it its own inverse', () => {
    fc.assert(fc.property(fc.array(fc.nat()), array => {
      expect(reverse(reverse(array))).toEqual(array);
    }));
  });

  it('reverse([a, ...xs]) === [...reverse(xs), a]', () => {
    fc.assert(fc.property(fc.nat(), fc.array(fc.nat()), (a, xs) => {
      expect(reverse([a, ...xs])).toEqual([...reverse(xs), a]);
    }));
  });

  it('preserves length', () => {
    fc.assert(fc.property(
      fc.array(fc.string()),
      input => {
        expect(reverse(input).length).toBe(input.length);
      }
    ));
  });
});