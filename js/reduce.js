// Reduce  =>  Melakukan perhitungan matematika


// Contoh kw 1 :
const angka = [1, 2, 3, 4, 5];

let newAngka = angka.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(newAngka);

// contoh ke 2 :
let neww = angka.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 10);

// parameter ke 2 setelah fungsi opsional, jika digunakan nilai akan ditambahkan mulai dari parameter tersebut
console.log(neww);