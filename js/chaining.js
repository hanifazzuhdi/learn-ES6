
// Chaining method

const angka = [1, 2, 4 , 5, 15, 10, 4, 2, 12];
// 5, 10, 12, 15

let newAngka = angka.filter((a) => a >= 5).map( (a) => a * 3 ).reduce((acc, curr) => acc + curr);

console.log(newAngka);