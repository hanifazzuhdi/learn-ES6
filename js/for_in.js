
// hanya bisa digunakan untuk melooping enumerable / property pada object

// contoh : 

const santri = {
    nama: "Hanif",
    asal: "Sidoarjo"
}

console.log('Isi dari object : ');

for (s in santri){
    console.log(`${s} : ${santri[s]}`);
}