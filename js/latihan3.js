
// Latihan Callback

// Ingat Callback adalah fungsi yang ada didalam fungsi

$(function (){
    console.log('jquery aktif');

    let btn = document.querySelector('#search');
    btn.addEventListener('click', () => {
        let key = document.querySelector('.form-group input').value;
        
        $.ajax({
            url: `http://www.omdbapi.com?apikey=8479c7d9&s=${key}`,
            method: 'GET',
            success: datas => {
                let movies = datas.Search;

                let el =  movies.map((v) => {
                return `
                <div class="col-md-4 my-3">
                    <div class="card">
                        <img src="${v.Poster}" class="card-img-top" height=350px>
                        <div class="card-body">
                        <h5 class="card-title">${v.Title}</h5>
                        <p class="card-subtitle card-muted">${v.Year}</p>
                        </div>
                        <div class="card-footer">
                            <a class="btn btn-primary" data-id="${v.imdbID}" data-target="#modal" data-toggle="modal">Details</a>
                        </div>
                    </div>
                </div>
                ` 
                }).join('');

                const body = document.querySelector('#card');
                body.innerHTML = el;

                $('a[data-target="#modal"]').click(function (){
                    id = $(this).data('id');

                    $.ajax({
                        url: `http://www.omdbapi.com?apikey=8479c7d9&i=${id}`,
                        method: 'GET',
                        success: data => {
                            $('img[alt="Poster"]').attr('src', data.Poster);
                            $('.title').html(data.Title);
                            $('.released').html(data.Released);
                            $('.genre').html(data.Genre);
                            $('.aktor').html(data.Actors);
                            $('.plot').html(data.Plot);
                        },
                        error: () => {
                            alert('Film tidak ditemukan !');
                        }
                    });
                });

            },
            error: () => {alert('Ada yang salah dengan permintaan !')}
        })  
    });

    console.log('masih jalan..');
});