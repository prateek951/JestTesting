//Cover all the execution paths 
const lib = require('./lib');
//Grouping the tests
//All the tests pertaining to the absolute function
//should go in one describe block

describe('absolute', () => {

    it('absolute- should return a positive number if the number is positive', () => {
        expect(lib.absolute(3)).toBe(3);
        // expect(lib.absolute(3)).toBeGreaterThan(6);
    })
    it(`should return a positive number if number is negative`, () => {
        expect(lib.absolute(-1)).toBe(1);
    });

    it('should return 0 if input is 0', () => {
        expect(lib.absolute(0)).toBe(0);
    });
});

//Your tests should be neither too general nor too specific

//if general it may not give the right confidence that your code works
//if specific your code may easily break

describe('greet',() => {

    it('should return the greeting message',() => {
        // expect(lib.greet('Prateek')).toBe('Welcome Prateek');
        //Use regex
        expect(lib.greet('Prateek')).toMatch(/Prateek/);
        expect(lib.greet('Prateek')).toContain('Prateek');
    })



});

