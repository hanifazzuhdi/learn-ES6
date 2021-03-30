// FILTER

// memfilter tanpa menggunakan fungsi filter
const angka = [1, 2, 4 , 5, 15, 10, 4, 2, 12];

let res = [];

for (let i = 0; i < angka.length; i++){
    if (angka[i] >= 10){
        res.push(angka[i]);
    }
}

console.log(res.sort());

// dengan fungsi filter
let newAngka = angka.filter((a) => a >= 10);
console.log(newAngka.sort());
