//Cover all the execution paths 
const lib = require('./lib');

test('absolute- should return a positive number if the number is positive',() => {
    expect(lib.absolute(3)).toBe(3);
    // expect(lib.absolute(3)).toBeGreaterThan(6);
})
test(`should return a positive number if number is negative`,() => {
    expect(lib.absolute(-1)).toBe(1);
});

test('should return 0 if input is 0',() => {
    expect(lib.absolute(0)).toBe(0);
});