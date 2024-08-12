import fc from "fast-check";

describe('startsWith', () => {
  it('starts with a string that it starts with', () => {
    fc.assert(fc.property(fc.string(), fc.string(), (a, b) => {
      expect((a + b).startsWith(a)).toBe(true);
    }));
  });

  it('a does not start with b if a and b are non-empty and constructed from different character classes', () => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const num = '1234567890'.split('');

    fc.assert(fc.property(
      fc.stringOf(fc.constantFrom(...alpha)),
      fc.stringOf(fc.constantFrom(...num), {minLength: 1}),
      (a, b) => {
        expect(a.startsWith(b)).toBe(false);
      }
    ));
  });

  it('everything starts with an empty string', () => {
    fc.assert(fc.property(fc.string(), (a) => {
      expect((a).startsWith('')).toBe(true);
    }));
  });

  it('passes specific examples', () => {
    expect('abc'.startsWith('ab')).toBe(true);
    expect('def'.startsWith('fd')).toBe(false);
  });
});