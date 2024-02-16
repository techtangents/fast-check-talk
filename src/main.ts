export const sort = <T> (array: readonly T[], compareFn?: (a: T, b: T) => number): readonly T[] =>
   [...array].sort(compareFn)

