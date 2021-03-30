
// rest parameter ditulis menggunakan ... sama seperti spread operator, tetapi beda fungsinya

// fungsinya untuk mengambil parameter yang dikirim yang tidak tau pasti jumlahnya atau  bisa juga disebut mengambil parameter sisa

// hanya bisa ditempatkan di belakang

// contoh : 

function kelas (guru, ...murid){
    console.log(`Guru kelas ini adalah ${guru}, kelas terdiri dari ${murid.length} siswa. diantaranya : ${murid.join(', ')}`);

    // merubah operator arguments menjadi array : 
    // 1. dengan Array.from()     => return Array.from(arguments)
    // 2. dengan spread operator  => return [...arguments]
}

kelas("Ihsan", "Hanif", "Faiz", "Zaim", "Usman");



// latihan :

function jumlahkan (...angka){

    // Banyak jalan menuju roma

    // high order function
    return angka.reduce((acc, val) => acc + val, 0);

    // for
    // let jumlah = 0;
    // for (let i = 0; i < angka.length; i++){
    //     jumlah += angka[i];
    // }
    // return jumlah;

    // for of
    // let jumlah = 0;
    // for (a of angka){
    //     jumlah += a;
    // }
    // return jumlah;
}

console.log(jumlahkan(1, 2, 3, 4, 5));


function filterBy (type, ...values){

    return values.filter(v => typeof(v) === type);
}

console.log(filterBy('object', 1, 2, 4, 'Hanif', true, false, [1, 2, 3, 4], 'oke'));