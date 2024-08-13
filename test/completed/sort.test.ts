import fc from 'fast-check';
import {sort} from '../../src/main';
import {assertSorted} from "../utils/testutils";
import {mergeSort} from "../../src/mergeSort";

describe('sort', () => {

  const ordNumbers = (a: number, b: number) => a - b;

  it('produces a sorted list', () => {
    fc.assert(fc.property(
      fc.array(fc.nat(), {minLength: 2}),
      input => {
        const output = sort(input, ordNumbers);
        assertSorted(output);
      }
    ));
  });

  it('is consistent with mergeSort', () => {
    fc.assert(fc.property(
      fc.array(fc.nat(), {minLength: 2}),
      input => {
        const output1 = sort(input, ordNumbers);
        const output2 = mergeSort(input);
        expect(output1).toEqual(output2);
      }
    ));
  });

  it('is idempotent', () => {
    fc.assert(fc.property(
      fc.array(fc.string()),
      input => {
        expect(sort(sort(input))).toEqual(sort(input));
      }
    ));
  });

  it('every input appears in the output', () => {
    fc.assert(fc.property(
      fc.array(fc.string()),
      input => {
        const output = sort(input);
        for (const o of input) {
          expect(output.includes(o)).toEqual(true);
        }
      }
    ));
  });

  it('every output appears in the input', () => {
    fc.assert(fc.property(
      fc.array(fc.string()),
      input => {
        const output = sort(input);
        for (const o of output) {
          expect(input.includes(o)).toEqual(true);
        }
      }
    ));
  });

  it('outputs a list the same length', () => {
    fc.assert(fc.property(
      fc.array(fc.string()),
      input => {
        expect(sort(input).length).toBe(input.length);
      }
    ));
  });

  it('sorting a single-element array is identity', () => {
    fc.assert(fc.property(
      fc.string(),
      x => {
        const input = [x];
        expect(sort(input)).toEqual(input);
      }
    ));
  });

  it('copies the array', () => {
    fc.assert(fc.property(
      fc.array(fc.string()),
      input => {
        expect(sort(input)).not.toBe(input);
      }
    ));
  });
});