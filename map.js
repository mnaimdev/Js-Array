
// const newList = [];

// for (const count of list) {
//     let value = count * rate;
//     newList.push(value);
// }

// console.log(list);
// console.log(newList);

const list = [2, 4, 6, 8, 10];

const rate = 2;

const countValue = list.map((count) => count * rate);

console.log(list);
console.log(countValue);


const movement = [2, 4, -5, 8, -9, 10, 20];


const movements = movement.map((move, i) => {
    console.log(`Balance ${i}: of ${move > 0 ? 'Deposite': 'Withdraw'} amount ${move * 2}`);
});


console.log(movement);
console.log(movements);