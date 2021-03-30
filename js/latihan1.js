// Latihan impplementasi map, filter, reduce

// note : 
// fungsi Array.from untuk merubah node list menjadi array


// Latihan : 

// Ambil semua data
let data = Array.from(document.querySelectorAll('.data li[data-duration]'));

// FIilter Lanjutan
let newData = data.filter((a) => a.textContent.includes('Lanjutan'))
// Ambil data durasi 
.map((a) => a.dataset.duration )
// ubah menjadi detik
.map((a) => {
    const waktu = a.split(":").map((waktu) => parseInt(waktu))

    return waktu[0] * 60 + waktu[1];
}).reduce((acc, cur) => acc + cur);
// masukkan ke DOM

const jam = Math.floor(newData / 3600);
newData = newData - (jam * 3600);
const menit = Math.floor(newData / 60);
const detik = newData - (menit * 60);

const jmlVideo = document.querySelector('.jmlVideo')
jmlVideo.textContent = data.filter((a) => a.textContent.includes('Lanjutan')).length;

const drsVideo = document.querySelector('.drsVideo');
drsVideo.textContent = `${jam} jam ${menit} menit ${detik} detik`;
