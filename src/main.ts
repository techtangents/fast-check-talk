export const sort = <T> (array: readonly T[], compareFn?: (a: T, b: T) => number): readonly T[] =>
   [...array].sort(compareFn);

export const reverse = <T> (array: readonly T[]): readonly T[] =>
    [...array].reverse();

export const numDataPacks = (usageMB: number, packSizeMB: number): number => {
    if (packSizeMB <= 0) throw new Error('Invalid pack size');
    return Math.ceil(usageMB / packSizeMB);
};
