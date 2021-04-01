
// pada dasarnya kode javascript berjalan satu per satu / bertahap
// asynchronous => program tidak akan dieksekusi dulu sebelum program yang bersifat sync berjalan


// Asynchronous callback

// request ajax vanilla js
function getDataProduct(url, success, error){

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4){
            if (xhr.status == 200){
                success(xhr.response);
            } else {
                error("error 4**")
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

console.log('Mulai...');

getDataProduct('http://mini-project-d.herokuapp.com/api/public', (result) => {
    let data = JSON.parse(result);

    data.data.map(a => console.log(a.product_name));
    
},(e) => console.log(e));

// console.log ini akan dijalankan terlebih dulu sebelum proses ajax, karena proses ajax bersifat async 
console.log('Berhasil Ambil Data...');

