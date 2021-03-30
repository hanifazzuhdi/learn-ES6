// mirip dengan OOP
// secara default fungsi js selalu memiliki object prototype
// pada konsep ini kita memakai object prototype yang ada dan menambahka bebrapa method ke dalam object tersebut

function Santri (nama, tabungan){
    this.nama = nama
    this.tabungan = tabungan
}

Santri.prototype.nabung = function (jumlah){
    this.tabungan += jumlah
    console.log(`tabungan anda bertambah ${jumlah}, total sekarang ${this.tabungan}`)
}

Santri.prototype.tarik = function (jumlah){
    this.tabungan += jumlah
    console.log(`tabungan anda berkurang ${jumlah}, total sekarang ${this.tabungan}`)
}

Santri.prototype.sapa = "Haloo Gaess ini JS";

let hanif = new Santri("Hanif", 1000);