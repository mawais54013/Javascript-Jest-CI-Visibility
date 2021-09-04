// import { functions } from "functions.js"
const reverseString = require('./reverseString');
// This line must come before importing any instrumented module.
require('dd-trace').init({
    service: 'my-javascript-app',
    // To guarantee test span delivery
    flushInterval: 300000
  })
  
  // jest-environment-jsdom is an option too
  module.exports = require('jest-environment-node')

// to be
// test("Adds 2 + 2 to equal 4", () => {
//     expect(functions.add(2, 2)).toBe(4);
// });

// // not to be
// test("Adds 2 + 2 to NOT equal 5", () => {
//     expect(functions.add(2, 2)).not.toBe(5);
// });

// to be null
// test("Should be null", () => {
//     expect(functions.isNull()).toBeNull();
// });

//  to be falsy
// test("Should be falsy", () => {
//     expect(functions.checkValue(null)).toBeFalsy();
// });

// toEqual
// test("user should be Brad Traversy object", () => {
//     expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Traversy' });
// });

// working with async data
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// });

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
});

test.each([[1,2,3], [3,4,7]])('sums correctly %i and %i', (a,b,expected) => {
    expect(a+b).toEqual(expected)
  })

  module.exports = require('jest-environment-node')
  module.exports = {
    testRunner: 'jest-circus/runner',
    testEnvironment: './testEnvironment.js',
};