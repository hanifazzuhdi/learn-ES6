
// Destructuring Function


// destructuring return function 
function kalkulasi (a, b){
    // kembalikan bentuk array
    // return [a + b, a - b, a * b, a / b];
    
    // kembalikan bentuk object
    return {
        tambah: a + b,
        kurang: a - b,
        kali  : a * b,
        bagi  : a / b,
    }
}

// urutan disini sangat berpengaruh karena pengembalian menggunakan array, jika ingin tidak berpengaruh bisa mengembalikan menjadi object

// let [tambah, kurang, kali, bagi] = kalkulasi(2, 3);

// bentuk object
let {kurang, kali, tambah, bagi} = kalkulasi(2, 3);

console.log(tambah);
console.log(kurang);


// destructuring arguments function 
const santri = {
    nama: "Hanif",
    umur: "19 Tahun",
    asal: "Sidoarjo",
    nilai: {
        uts: 90,
        uas: 95,
        unas: 100
    }
}

// bungkus argument dengan menggunakan kurung kurawal
function getSantri ({nama, asal, nilai: {uts, uas, unas}}){
    return `Nama santri : ${nama}, Asal : ${asal}, nilai unas : ${unas}`;
}

// kirim argument dengan object
console.log(getSantri(santri));