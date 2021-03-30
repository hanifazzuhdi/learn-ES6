// MAP => mirip dengan foreach
// menghasilkan array baru

// contoh 1 : 
const angka = [1, 2, 3, 4, 5, 6, 7, 8];

let newAngka = angka.map( (a) => a + 2 );

console.log(newAngka);

// contoh 2 : 
const santri = [
    {
        nama: "hanif",
        umur: 19
    },
    {
        nama: "Ihsan",
        umur: 19
    },
    {
        nama: "Faiz",
        umur: 18
    }
]

// parameter pertama adalah valuenya, parameter ke 2 index nya
let newSantri = santri.map( (a, b) => console.log(`nama : ${a.nama}, umur : ${a.umur}`) )