
// destructuring assignment => memecah expression pada array atau object menjadi variable sendiri 

// Contoh pada array : 

// Destructing array => menggunakan kurung siku atau simbol array
// const angka = [1, 2, 3, 4, 5];
// let [a, b] = angka

// console.log(a);

// skiping items => melewati item, bisa dengan menulisakan koma tanpa variable nya
// let [a, , ,b,] = angka
// console.log(b);

// swap variable => membalikkan nilai
// const swap = [1, 2];
// let [b, a] = swap

// console.log(a);
// console.log(b);

// rest parameter => bisa juga menerima rest parameter
// let [a, b, ...args] = angka

// console.log(a);
// console.log(b);
// console.log(args);


// Contoh pada object :

// destructing object => menggunakan kurung kurawal, dan nama variable harus sama dengan property
const mhs = {
    id: 198,
    nama: "Hanif",
    asal: "Sidoarjo",
    umur: "19 Tahun"
}

// let {nama, asal} = mhs

// console.log(nama);
// console.log(asal);

// rest parameter => sama seperti pada array
// let {asal, ...args} = mhs;

// console.log(args);

// Customing variable name dan default value params
// let {nama: a, asal: b, umur = "19 Tahun"} = mhs

// console.log(a);

// Tanpa declaration object
// let {nama , umur} = {
//     nama: "Hanif",
//     umur: "19 Tahun"
// }

// console.log(nama);

// mengambul field pada object untuk params function
// function getIdMhs ({id}){
//     return id;
// }

// console.log(getIdMhs(mhs));