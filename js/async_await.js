
// Asynchronous function :
// - fungsi yang berjalan secara asynchronous
// - menghasilkan (implisit)  promise
// - Cara penulisannya sam adengan asynchronous biasa


// aynch await sudah pernah dicoba ketik merefactor code fetch


// contoh promise sederhana
function coba (){
    return new Promise((resolve, reject) => {
        const waktu = 6000;
        if (waktu > 5000){
            reject("Terlalu lama jomblo !");
            return;
        }

         setTimeout(() => {
            resolve('Permintaan berhasil');
        }, waktu);
    })
}

// menggunakan then catch
// const cobaAsync = coba();

// cobaAsync
//     .then(res => console.log(res))
//     .catch(res => console.log(res));


// menggunakan async await
// untuk menghandle error pada aync await bisa menggunakan block try catch, karena tidak bisa menggunakan then dan catch
async function jalankanCoba (){
    try{
        const oke = await coba();
        alert(oke);
    } catch (err){
        console.error(err);
    }
}

jalankanCoba()