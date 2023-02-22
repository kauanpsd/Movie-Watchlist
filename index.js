document.getElementById("search-btn").addEventListener('click', ()=>{
    let searchValue = document.getElementById("input-text-movie")
    
    document.getElementById("movie-list").innerHTML = searchMovie(searchValue.value)
    searchValue.value = ''
})




const moviesInfo = (iDimbd) =>{
   
    fetch(`https://www.omdbapi.com/?i=${iDimbd}&apikey=29e3c4c9&/`)
         .then(res => res.json())
         .then(data => console.log(data))
  
     }



const searchMovie = (searchId)=> {



    fetch(`https://www.omdbapi.com/?s=${searchId}&apikey=29e3c4c9&/`)
    .then(res=>res.json())
    .then(data => data.Search.forEach(movieId => {

        moviesInfo(movieId.imdbID)
        
    }))

}


