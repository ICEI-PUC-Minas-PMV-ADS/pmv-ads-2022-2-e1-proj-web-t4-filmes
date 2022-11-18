const poster = document.querySelector('.movie-poster')
const title = document.querySelector('.movie-title')
const overview = document.querySelector('.movie-overview')
const close = document.querySelector('.close-container')
const stars = document.querySelector('.star-rater')
const correlateButton = document.querySelector('.correlate-button')
const popupWrapper = document.querySelector('.popup-wrapper')

class MP{
    constructor(){
        this.movies = JSON.parse(localStorage.getItem('movies'))
        this.loadMovieData(this.currentMovie())
        this.mappingClose()
        this.mappingPopup()
        this.correlate()
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

    correlate(){
        correlateButton.addEventListener('click', e => {
            popupWrapper.style = 'display: flex;'
        })
    }

    mappingPopup(){
        window.addEventListener('click', e => {
            if(e.target.classList.contains('popup-wrapper')) popupWrapper.style = 'display: none;'
        })
    }
}


const MoviePage = new MP()