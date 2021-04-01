
// refactoring fetch.js

const btn = document.querySelector('#search');
btn.addEventListener('click', async function () {
    let keyword = document.querySelector('input.form-control').value;
    let movies = await getMovies(keyword);
    
    try{
        updateCards(movies);
    } catch (e) {
        alert('Judul yang dicari tidak ditemukan');
    }
});


// fetch pencarian judul
function getMovies (keyword){
    return fetch(`http://www.omdbapi.com?apikey=8479c7d9&s=${keyword}`)
        .then(result => result.json())
        .then(data => data.Search)
}

function updateCards (movies){
    const el = movies.map(movie => elCards(movie)).join('');

    const card = document.querySelector('#card');
    card.innerHTML = el;
}

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


// fetch detail movie
// event binding => dilakukan untuk mengakali agar fetch ini tidak berjalan di then fetch pertama
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('select')){
        const id = e.target.dataset.id
        const movie = await getMovie(id);
        updateDetail(movie);
    }
});

function getMovie(id) {
    return fetch(`http://www.omdbapi.com?apikey=8479c7d9&i=${id}`)
    .then(response => response.json())
    .then(data => data);
}

function updateDetail (movie){
    let img = document.querySelector('img[alt="Poster"]');
    img.setAttribute('src', movie.Poster);

    function setEl (name, value){
        const el = document.querySelectorAll('.' + name);
        
        el.forEach(a => a.innerHTML = value);
    }
    
    setEl('title', movie.Title);
    setEl('released', movie.Released);
    setEl('genre', movie.Genre);
    setEl('aktor', movie.Actors);
    setEl('plot', movie.Plot);
}