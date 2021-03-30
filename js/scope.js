/**  
 *  Ada beberapa scope dalam JS
 * 
 * */

// 1. GLobal scope => scope global / window
let kelereng = "hijau";

console.log(kelereng);

// 2. local scope => scope yang dibuat ketika mendeklarasikan sebuah function
function coba (warna){
    // variable kelereng tidak akan terpengaruh oleh variable kelereng diluar
    let kelereng = warna;

    return kelereng;
}

console.log(coba("Merah"));

// 3. block scope => scope yang dibuat ketika menjalankan statement if ... else
function test (warna){
    var kelereng = warna;

    if (true){
        let kelereng = "hitam";
    }

    return kelereng;
}

// Hasilnya ungu bukan hitam karena menggunakan let
console.log(test('ungu'));

// 4. lexical scope => fungsi yang ada didalam sebuah fungsi dapat memanggil property yang ada pada fungsi luarnya
function lexical (){
    let kelereng = "pink";

    function lexicalDalam (){       // inner function
        console.log( kelereng );
    }

    lexicalDalam();
}

lexical();