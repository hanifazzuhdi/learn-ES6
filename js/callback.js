
// Pengertian callback => fungsi yang dijadikan sebagai parameter fungsi yang lainnya / sebagai return fungsi didalam fungsi yang lain 

// callback hell terjadi jika kita terlalu banyak membuat callback di dalam callback itu sendiri

// contoh callback : 

// Synchronous callback
// function sapa (nama){
//     alert(`Halo ${nama}`);
// }

// function jalankanFungsi (callback){
//     const nama = prompt("Nama kamu : ");
//     callback(nama);
// }

// jalankanFungsi(sapa);


// Asynchronous callback => contohnya ada di file asynchronous.js
