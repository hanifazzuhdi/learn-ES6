
// fungsi spread operator memecah iterable object menjadi single item
// ditulis dengan ... didepan


// pada string
const string = "Hanif Zuhdi";

// console.log(...string);


// menggabungankan array
const arr1 = ["Hanif", "Radiant"];
const arr2 = ["Rizky", "Fauzil"];

// cara ini lebih fleksibel dibandingan menggunakan fungsi concat, karena bisa menambahkan sesuatu diantaranya
const tim = [...arr1, 'Ini Oke' ,...arr2];

const concatTim = arr1.concat(arr2);

// console.log(tim);
// console.log(concatTim);


// Pada DOM

const nama = document.querySelector('.nama');

const newNama = [...nama.textContent]
.map((a) => {
    return `<span>${a}</span>`
}).join('');

nama.innerHTML = newNama;

// console.log(newNama);