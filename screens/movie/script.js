const poster = document.querySelector('.movie-poster')
const title = document.querySelector('.movie-title')
const overview = document.querySelector('.movie-overview')
const close = document.querySelector('.close-container')
const stars = document.querySelector('.star-rater')
const correlateButton = document.querySelector('.correlate-button')
const popupWrapper = document.querySelector('.popup-wrapper')
const popupSearch = document.querySelector('.popup-search')
const popupResults = document.querySelector('.popup-results')
const data = JSON.parse(localStorage.getItem('movies'))
const verifyAnimationWrapper = document.querySelector('.correlate-animation-wrapper')

class MP{
    constructor(){
        this.movies = JSON.parse(localStorage.getItem('movies'))
        this.loadMovieData(this.currentMovie())
        this.mappingClose()
        this.mappingPopup()
        this.correlate()
        this.searchCorrelate()
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

    searchCorrelate(){
        popupSearch.addEventListener('keydown', e => {
            if(e.key == 'Enter' && e.target.classList.contains('popup-search')){
                const text = popupSearch.value
                this.loadCards(popupResults, this.findMovie(data, text))
            }
        })
    }

    findMovie = (data, word) => {
        const str = word.toLowerCase()
    
        const results = []
    
        data.forEach(mov => {
            if(mov.title.toLowerCase().indexOf(str) != -1) results.push(mov)
        })
    
        return results
    }

    loadCards = (container, cards) => {
        document.querySelectorAll('.card').forEach(el => el.remove())
    
        cards.forEach(card => {
            const element = document.createElement('img')
            element.classList.add('card')
            element.id = card.id
            card.local_status ? element.src = `../../assets/imgs/${card.file_name}` : element.src = card.poster_path
    
            element.addEventListener('click', e => {
                verifyAnimationWrapper.style = 'display: flex;'
                const movies = JSON.parse(localStorage.getItem('movies'))
                
                try{
                    movies.find(mov => mov.id == Number(sessionStorage.getItem('movie'))).correlations.find(obj => obj.id == Number(e.target.id)).votes += 1
                    
                    localStorage.setItem('movies', JSON.stringify(movies))

                    this.verifyAnimation()
                }catch{
                    movies.find(mov => mov.id == Number(sessionStorage.getItem('movie'))).correlations.push({id: Number(e.target.id), votes: 1})
                    
                    localStorage.setItem('movies', JSON.stringify(movies))
                    this.verifyAnimation()
                }

                document.location.reload(true);
            })
    
            container.appendChild(element)
        })
    }
}


const MoviePage = new MP()