const poster = document.querySelector('.movie-poster')
const title = document.querySelector('.movie-title')
const overview = document.querySelector('.movie-overview')
const close = document.querySelector('.close-container')
const stars = document.querySelector('.star-rater')

class MP{
    constructor(){
        this.movies = JSON.parse(localStorage.getItem('movies'))
        this.loadMovieData(this.currentMovie())
        this.mappingClose()
    }

    loadMovieData(movie){
        title.innerHTML = movie.title
        overview.innerHTML = movie.overview
        stars.setAttribute('rate', movie.vote_average)

        if(movie.local_status){
            poster.src = `../../assets/imgs/${movie.file_name}`
        }
        else{
            poster.src = movie.poster_path
        }
    }

    currentMovie(){
        return this.movies.find(mov => mov.id === Number(sessionStorage.getItem('movie')))
    }

    mappingClose(){
        close.addEventListener('click', () => {
            window.history.back()
        })
    }
}

const MoviePage = new MP()