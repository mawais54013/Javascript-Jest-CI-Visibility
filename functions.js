const { default: axios } = require("axios");

// export const functions = {
//     add: (num1, num2) => num1 + num2,
//     isNull: () => null, 
//     checkValue: (x) => x,
//     createUser: () => {
//         const user = { firstName: "Brad" }
//         user['lastName'] = "Traversy";
//         return user;
//     }, 
//     fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
//     .then(res => res.data)
//     .catch(err => 'error')
// }
// test.each([[1,2,3], [3,4,7]])('sums correctly %i and %i', (a,b,expected) => {
//     expect(a+b).toEqual(expected)
//   })

module.exports = {
    testRunner: 'jest-circus/runner',
    testEnvironment: './testEnvironment.js',
};