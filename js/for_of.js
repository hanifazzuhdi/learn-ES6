// iterable Object :
// 1. string
// 2. array
// 3. arguments / Nodelist 
// 4. TypedArray 
// 5. map
// 6. set
// 7. user-defined iterables

// for..of adalah perulangan yang dapat melooping atau melakukan penelusuran pada object" yang iterable

// Implementasi :



// === String ===

// dengan for...of
// let string = "Hanif";

// for(a of string){
//     console.log(a);
// }

// tidak bisa karena string bukan function
// string.forEach(a => console.log(a));


// === Array ===

// const angka = [1, 2, 3, 4, 5];

// bisa dengan foreach 
// angka.forEach((a, i) => console.log(`${a} angka index ke-${i}`));

// dengan for..of tidak bisa menambahkan parameter ke 2 seperti foreach
// for (a of angka){
//     console.log(a);
// }

// untuk mengakalinya bisa menggunakan array destructuring dan fungsi entries
// for ([index, val] of angka.entries()){
//     console.log(`angka ${val} adalah index ke-${index}`);
// }


// === NodeList ===
// const data = document.querySelectorAll('ol li[data-duration]');

// bisa menggunakan foreach
// data.forEach(a => console.log(a.textContent));

// bisa menggunakan for...of
// for ([i, a] of data.entries()){
//     console.log(`Key ke-${i} berisi ${a.textContent}`);
// }


// === Arguments ===
function kembalikan (){
    // arguments.forEach((a) => console.log(a));                    => arguments tidak bisa menggunakan foreach
    // console.log(arguments.reduce((acc, val) => acc + val));      => tidak bisa menggunakan reduce
    console.log(arguments);

    let jumlah = 0;
    for (a of arguments){
        jumlah += a;
    }
    return jumlah;
}   

console.log(kembalikan(1, 2, 3, 4, 5));