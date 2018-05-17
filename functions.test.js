const functions = require('./functions');

test('Adds 2 + 2 to equal 4',() => {
    expect(functions.add(2,2)).toBe(4)
});

test('Add 2 + 2 to not equal 5',() => {
    expect(functions.add(2,2)).not.toBe(5)
});

test('Should be null',() => {
    expect(functions.isNull()).toBeNull()
});

test('Should be falsy',() => {
    expect(functions.checkValue(0)).toBeFalsy();
});

//toBe is for primitive types
//toEqual is for reference types(objects and arrays)

test('should create a user',() => {
    expect(functions.createUser()).toEqual({
        firstname: 'Prateek',
        lastname : 'Madaan'
    });
});

test('Should be under 1600',() => {
    const load1 = 400;
    const load2 = 400;
    expect(load1+load2).toBeLessThan(1600);
});

test('There is no I in team',() => {
    expect('team').not.toMatch(/I/i);
});

test('Admin should be in usernames',() => {
    usernames = ['prateek','node','admin'];
    expect(usernames).toContain('admin');
});

//Working with async data (use assertions )
test('User fetched name should be Prateek Madaan',() => {
    expect.assertions(1);
    functions.fetchUser()
    .then(data => {
        expect(data.name.toEqual('Prateek Madaan'));
    });
});

//Async await
test('User fetched name should be Prateek Madaan',async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
        // .then(data => {
            expect(data.name.toEqual('Prateek Madaan'));
        // });
});
