
const age = [24, -25, 32, -39, 29, -12];

// const filteredAge = age.filter(function(y) {
//     return y > 0;
// });

// console.log(age);
// console.log(filteredAge);

// const validAge = [];
// for (const y of age) {
//     if (y < 0) {
//         validAge.push(y);
//     }
// }

// console.log(validAge);


const validAge = age.filter(y => y < 0);
console.log(validAge);