
// arrow function tidak memiliki konsep this. this pada arrow akan mengembalikan window / pada lexical scopenya

let box = document.querySelector('.box');

box.addEventListener('click', function () {
    let satu = 'size';
    let dua  = 'color';

    if (this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    
    setTimeout(() => {
        this.classList.toggle(dua);
        console.log(this)
    }, 500);    
})
