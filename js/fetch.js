
// fungsi nya sama seperti ajax, tapi untuk peforma lebih bagus fetch karena tidak memerlukan komponen external
// penulisannya = fetch(resources: (bisa url, bisa object request), init: konfigurasi, sama seperti ajax)

const btn = document.querySelector('#search');
btn.addEventListener('click', function () {
    
    let key = document.querySelector('input.form-control').value;

    fetch(`http://www.omdbapi.com?apikey=8479c7d9&s=${key}`)
        .then(result => result.json())
        .then(result => {
            let el = result.Search.map(r => elCards(r)).join('');

            const card = document.querySelector('#card');
            card.innerHTML = el;

            let select = document.querySelectorAll('.select');

            select.forEach((sel) => {
                sel.addEventListener('click', function () {
                    const id = sel.dataset.id;

                    fetch(`http://www.omdbapi.com?apikey=8479c7d9&i=${id}`)
                        .then(result => result.json())
                        .then(result => {

                            let img = document.querySelector('img[alt="Poster"]');
                            img.setAttribute('src', result.Poster);
                           
                            function setEl (name, value){
                                const el = document.querySelectorAll('.' + name);
                                
                                el.forEach(a => a.innerHTML = value);
                            }
                            
                            setEl('title', result.Title);
                            setEl('released', result.Released);
                            setEl('genre', result.Genre);
                            setEl('aktor', result.Actors);
                            setEl('plot', result.Plot);
                        })
                });
            })

        }).catch(() => {
            alert('Judul film tidak ada!');
        });
});


// element html kartu untuk ditampilkan
function elCards (r){
    return `<div class="col-md-4 my-3">
        <div class="card">
            <img src="${r.Poster}" class="card-img-top" height=350px>
            <div class="card-body">
            <h5 class="card-title">${r.Title}</h5>
            <p class="card-subtitle card-muted">${r.Year}</p>
            </div>
            <div class="card-footer">
                <a class="btn btn-primary select" data-id="${r.imdbID}" data-target="#modal" data-toggle="modal">Details</a>
            </div>
        </div>
    </div>` 
}
