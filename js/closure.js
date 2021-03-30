// yang disebut closure adalah jika inner function membutuhkan property yang ada di outer function nya
// berhubungan erat dengan lexical scope

function outer (sapa){

    let nama = "Hanif";
    let waktu = sapa;
    
    return function (jam){
        console.log(nama + `. Selamat ${waktu} sekarang jam : ${jam}`);
    }

    // jika dilihat disini terdapat scope closure berisi nama dari variabel fungsi outer
    // console.dir(inner);

}

let inner = outer("siang");
inner("07:00");



// IIFE => immediately invoked function expression

let add = (function (){
    let counter = 1;

    return function (){
        return counter++;
    }
})();

console.log(add());
console.log(add());
console.log(add());