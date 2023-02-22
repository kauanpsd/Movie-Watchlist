



document.getElementById("search-btn").addEventListener('click', ()=>{
    let searchValue = document.getElementById("input-text-movie")
    
    document.getElementById("movie-list").innerHTML = searchMovie(searchValue.value)
    searchValue.value = ''
})




let moviesInfo = (iDimbd) =>{
   
    fetch(`https://www.omdbapi.com/?i=${iDimbd}&apikey=29e3c4c9&/`)
         .then(res => res.json())
         .then(data => render(data))
  
     }



const searchMovie = (searchId)=> {



    fetch(`https://www.omdbapi.com/?s=${searchId}&apikey=29e3c4c9&/`)
    .then(res=>res.json())
    .then(data => data.Search.forEach(movieId => {

        moviesInfo(movieId.imdbID)
        
    }))

}

/* document.getElementById("movies").innerHTML += `${data.Title}` */
function render(data){
    document.getElementById("movies").innerHTML += `
            <div class="movie-card">
            <img src="imgs/image 33.png" alt="" class="movie-poster">

                <div class="movie-text">

                    <div class="movie-title">
                        <h2>
                            ${data.Title}
                            <img src="imgs/star.svg" class="star" alt="">
                            <p>8.1</p>
                        </h2>
                    </div>

                    <div class="movie-info">
                        <p>116min</p>
                        <p>Drama, Mystery, Sci-fi</p>
                        <a href="">
                            <img src="imgs/PlusIcon.svg" class="plus-icon" alt="">
                            Watchlist
                        </a>
                    </div>

                    <p class="movie-description">
                        A blade runner must pursue and terminate four
                        replicants who stole a ship in space, and
                        have returned to Earth to find their creator.
                    </p> 
            </div>
        </div>
        <div class="line"></div>
    `
}