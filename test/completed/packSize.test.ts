import {numDataPacks} from "../../src/main";
import fc from "fast-check";

describe('packSize', () => {
   it('specific examples', () => {
       expect(numDataPacks(0, 100)).toBe(0);
       expect(numDataPacks(1, 100)).toBe(1);
       expect(numDataPacks(50, 100)).toBe(1);
       expect(numDataPacks(100, 100)).toBe(1);
       expect(numDataPacks(101, 100)).toBe(2);
   });

   it('always covers the data usage', () => {
      fc.assert(fc.property(
          fc.nat(),
          fc.integer({ min: 1 }),
          (usage, packSize) => {
              const provisionedData = numDataPacks(usage, packSize) * packSize;
              expect(provisionedData).toBeGreaterThanOrEqual(usage);
          }
      ));
   });
});