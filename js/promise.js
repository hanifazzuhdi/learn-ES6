
// Promise => Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynvhronous dimasa yang akan datang 
// Biasa digunakan untuk api

// Janji (terpenuhi / diingkari) => analogi promise

// di JS "Janji" ini disebut dengan states, ada 3 macam states,. dan untuk menjalankan nya ada 3 fungsi callback
// states (fullfiled, rejected, pending) 
// callback (resolve, reject, finally)
// aksi (then -> jika resolve, catch -> jika reject)

// callback finally selalu dijalankan apapun hasil dari state nya

// contoh : 

// let janji = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (janji){
//         resolve("Janji sudah ditepati");
//     } else {
//         reject("Janji tidak ditepati");
//     }
// })

// // jika langsung melakukan ini, maka akan menampilkan promise nya kedalam console 
// console.log(janji1);

// // untuk menampilkan isi dari promise tersebut bisa memggunakan aksi yang sudah ditulis diatas
// janji1.then(result => console.log(result)).catch(err => console.log(err));


// contoh 2 : 

// let janji = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (janji){
//         setTimeout(() => {
//             resolve("Janji sudah ditepati");
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             reject("Janji tidak ditepati!");
//         }, 300);
//     }
// })

// // dengan melakukan ini maka akan terlihat bahwa program sedang menjalankan asynchronous

// console.log("Mulai ...");

// console.log(janji2.finally("Program janji2 Running...").then(result => console.log(result)).catch(err => console.log(err)));

// console.log("Selesai ...");



// contoh 3 => promise all -> menjalankan bebrapa promise sekaligus

const Film = new Promise(resolve => {
    setTimeout(() => {
        resolve("Film nya bagus");
    }, 2000)
});

const Cuaca = new Promise(reject => {
    setTimeout(() => {
        reject("Cuaca nya tidak bagus");
    }, 500)
})

// hanya perlu 1 then
Promise.all([Film, Cuaca])
.then(res => {

    // bisa juga memisahkan array nya dengan menggunakan destructuring operator, karena secara default hasilnya bergabung menjadi array yang sama
    let [film , cuaca] = res;

    console.log(film);
    console.log(cuaca);
});