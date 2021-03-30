// BEBERAPA CARA MEMBUAT OBJECT PADA JAVASCRIPT

// 1. object literal => Pembuatan object dengan cara biasa
// Problem : tidak efektif untuk pembuatan object yang berulang ulang

let santri = {
    nama: "Hanif",
    tabungan: 1000,
    nabung: function (jumlah){
        this.tabungan += jumlah
        console.log(`tabungan anda bertambah ${jumlah}, total sekarang ${this.tabungan}`)
    },
    tarik: function (jumlah){
        if (this.tabungan < jumlah){
            return 'uangmu kurang!'
        }
        this.tabungan -= jumlah
        console.log(`tabungan anda berkurang ${jumlah}, total sekarang ${this.tabungan}`)
    }
}

// 2. function declaration => konsep nya hambir mirip dengan oop
// Problem : sama seperti object literal, object akan dibuat berulang-ulang

function Santri(nama, tabungan){
    let santri = {}

    santri.nama = nama
    santri.tabungan = tabungan
    santri.nabung = function (jumlah){
        santri.tabungan += jumlah
        console.log(`tabungan anda bertambah ${jumlah}, total sekarang ${santri.tabungan}`)
    }
    santri.tarik = function (jumlah){
        if (santri.tabungan < jumlah){
            return 'uangmu kurang!'
        }
        santri.tabungan -= jumlah
        console.log(`tabungan anda berkurang ${jumlah}, total sekarang ${santri.tabungan}`)
    }

    return santri;
}

let hanif = Santri("Hanif", 1000);
let ihsan = Santri("Ihsan", 2000);

// 3. constructor function => mirip dengan function declaration, bedanya tidak perlu mendeklarasikan variable terlebih dulu dan return hasilnya. pemanggilannya harus menggunakan new

function SantriNew(nama, tabungan){
    this.nama     = nama
    this.tabungan = tabungan
    this.nabung   = function (jumlah){
        this.tabungan += jumlah
        console.log(`tabungan anda bertambah ${jumlah}, total sekarang ${this.tabungan}`)
    }
    this.tarik = function (jumlah){
        if (this.tabungan < jumlah){
            return 'uangmu kurang!'
        }

        this.tabungan -= jumlah
        console.log(`tabungan anda berkurang ${jumlah}, total sekarang ${this.tabungan}`)
    }
}

let haniff = new SantriNew("Haniff", 3000);


// 4. object.create => Konsepnya mirip dengan pewarisan yang ada di oop

const methodSantri = {
    nabung: function (jumlah){
        this.tabungan += jumlah
        console.log(`tabungan anda bertambah ${jumlah}, total sekarang ${this.tabungan}`)
    },

    tarik: function (jumlah){
        if (this.tabungan < jumlah){
            return 'uangmu kurang!'
        }

        this.tabungan -= jumlah
        console.log(`tabungan anda berkurang ${jumlah}, total sekarang ${this.tabungan}`)
    }
}

function SantriCreate (nama, tabungan){
    // Semua method yang ada di const methodSantri akan terdaftar disini
    let santri = Object.create(methodSantri)

    santri.nama = nama
    santri.tabungan = tabungan

    return santri
}

let zuhdi = SantriCreate("Zuhdi", 2000);
