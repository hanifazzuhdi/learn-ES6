
// penulisan template literals dengan menggunakan backtik (``)
// Banyak manfaat dari template literals. diantarnya :

// 1. html fragments / multi line string
let el = 
`<div>
    <p>Hallo Gaess</p>
</div>`;

console.log(el);

// 2. embeded expression
const nama = "Hanif";
let embeded = `Halo nama saya ${nama}`;

console.log(embeded);

// 3. expression interpolation
const a = 10;
const b = 30;
let interpolation = `jumlah ${a} + ${b} adalah : ${a + b}`;

console.log(interpolation);
