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

describe('getCurrencies',() => {
    it('should return supported currencies',() => {
            //Too general
            // expect(lib.getCurrencies).toBeDefined();
            // expect(lib.getCurrencies).not.toBeNull();

            //Too specific
            // expect(lib.getCurrencies()[0]).toBe('USD');
            // expect(lib.getCurrencies.length).toBe(3);

            //Proper way
            expect(lib.getCurrencies()).toContain('USD');
            expect(lib.getCurrencies()).toContain('AUD');

            //Ideal way
            expect(lib.getCurrencies())
            .toEqual(expect.arrayContaining(['EUR','USD','AUD']));
        });
});

describe('getProduct',() => {
    it('should return the product with the given id',() => {
        //To specific
        // expect(lib.getProduct(1)).toEqual({id : 1,price:10,category:'Node'});
        expect(lib.getProduct(1)).toMatchObject({id:1,price:10});
        
    })
});

describe('registerUser',() => {

    it('should throw if username is falsy',() => {
        //0 false null NaN '' false
        const args = [null,undefined,NaN,'',0,false];
        args.forEach(ex => expect(() => lib.registerUser(ex)).toThrow());
    });

    it('should return a user object if valid username is passed',()=> {
        expect(lib.registerUser('prateek')).toMatchObject({username:'prateek'});
        expect(lib.registerUser('prateek').id).toBeGreaterThan(0);
    })

})