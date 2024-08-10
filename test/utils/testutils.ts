const assertSorted = (ts: readonly number[]): void => {
    for (let i = 0; i < ts.length - 1; i++){
        const a = ts[i];
        const b = ts[i + 1];
        expect(a).toBeLessThanOrEqual(b);
    }
}

export {
    assertSorted
};