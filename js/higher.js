// Higher order function => function yang memliliki parameter berupa function atau mengembalikan function 

// function yang menjadi parameter atau return nya disebut dengan callback, sedangankan function yang memiliki closure disebut dengan higher order function 

function ujian (nama, selesai) {
    
    console.log(`Ujian ${nama} dimulai`);

    let counter = 3;

    let int = setInterval(() => {
        console.log(counter--);

        if (counter == 0){
            selesai();
            clearInterval(int);
        }
    }, 500);
}

function selesai (){
    alert('waktu habis');
}

ujian("matematika", selesai);
