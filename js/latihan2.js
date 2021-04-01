
// Template literals latihan

// 1. html fragments biasa
// const nama = "Hanif";
// let el = `<div>
//     <p>Latihan html fragments</p>
//     <span> Selamat datang ${nama} </span>
// </div>`


// 2. looping
// const santri = [
//     {
//         nama: "Hanif",
//         umur: "19 tahun"
//     },
//     {
//         nama: "Ihsan",
//         umur: "19 tahun"
//     },
//     {
//         nama: "Faiz",
//         umur: "18 tahun"
//     },
// ]

// let el = `<div>
//     <p>Santri Pondok IT : </p>
//         ${santri.map((a) => `<ul> 
//             <li> ${a.nama} </li>
//             <li> ${a.umur} </li>
//         </ul>`).join('')}
// </div>`


// 3. Condition
// let santri = {
//     nama: "Hanif",
//     umur: "19 tahun",
//     kelas: 10
// }

// let el = `<div>
//     <p>Detail Santri : </p>
//     <ul>
//         <li> Nama : ${santri.nama} </li>
//         <li> Umur : ${santri.umur} </li>
//         <li> Kelas : ${(santri.kelas ?? 'Belum terdaftar di kelas')} </li>
//     </ul>
// </div>`


// 4. Nested => ada banyak cara untuk membuatnya
const jurusan = {
    nama: 'Backend',
    jmlSantri: 10,
    sprint: [
        'PHP Native',
        'PHP OOP',
        'Composer',
        'Jquery',
        'Laravel'
    ]
}

// function elNested (matkul) {
//     return `
//     <ol> 
//          ${matkul.map((a) => `<li> ${a} </li>`).join('')} 
//     </ol>`
// }

let el = `<div>
    <p>Nama Jurusan : ${jurusan.nama}</p>
    <span>Jumlah Santri : ${jurusan.jmlSantri}</span>
    <p>Materi sprint : </p>
    <ol>
        ${jurusan.sprint.map((a) => `<li> ${a} </li>`).join('')} 
    </ol>
</div>`

const literals = document.querySelector('.literals');

literals.innerHTML = el
