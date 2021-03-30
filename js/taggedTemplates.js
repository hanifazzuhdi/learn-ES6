
// Bentuk yang lebih komplek dari template literal
// argument pertama pada fungsi adalah string yang dikirim parameter dan akan berubah menjadi array
// sedangkan argumen ke 2 nya adalah expression yang dikirimkan dan akan berubah menjadi array juga

const nama = "Hanif";
const umur = 19;
const alamat = "Sidoarjo";

// menggunakan fungsi biasa
// function template (strings, ...args){
//     let el = '';
//     strings.forEach((e, i) => {
//         el += `${e}${args[i] || ''}`;
//     })

//     return el;
// }

// dengan menggunakan high order function reduce
function template (strings, ...args){
    return strings.reduce((str, val, i) => {
        return `${str}${val}<span class="hl">${args[i] ?? ''}</span>`
    }, '');
}

// taged template
const str = template`Halo nama saya ${nama}, saya umur ${umur} tahun dan saya berasal dari ${alamat}.`;

console.log(str);

const literal = document.querySelector('.literal');
literal.innerHTML = str;