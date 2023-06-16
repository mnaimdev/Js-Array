const movements = [200, -300, 400, 500, -100, 900];

for (const [i, mov] of movements.entries()) {
    if (mov > 0) {
        console.log(`You send ${i + 1}: ${mov} money`);
    } else {
        console.log(`You withdraw ${i + 1}: ${Math.abs(mov)} money`);
    }
}

console.log('----------- Foreach -------------');

movements.forEach((movement, index, array) => {
    if (movement > 0) {
        console.log(`You send ${index} ${movement} money`);
    } else {
        console.log(`You withdraw ${Math.abs(movement)} money`);
    }
});