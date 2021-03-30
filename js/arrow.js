// arrow function => penulisan sederhana dari function pada umumnya


// Function expresion
let sapa = function (nama){
    return console.log(`Halo ${nama}`);
}

sapa("Hanif");

// arrow function
// contoh 1 :
let siang = (nama) => `Selamat Siang ${nama}`;

console.log(siang("Zuhdi"));

// contoh 2 : 
const santri = ["Hanif", "Ihsan", "Faiz", "Zaimmm"];

// map tanpa arrow function
// let jmlSantri = santri.map(function (nama) {
//     return nama.length;
// });

// map dengan arrow func
// let jmlSantri = santri.map(nama => nama.length);

// object dengan arrow func
let jmlSantri = santri.map(nama => ({nama, jumlah: nama.length}));

console.table(jmlSantri);