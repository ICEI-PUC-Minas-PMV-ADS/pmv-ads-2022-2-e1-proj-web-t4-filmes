const data = JSON.parse(localStorage.getItem('movies'))

const moviesContainer = document.querySelector("#list");
const search = document.querySelector('#searchInput');

writeSessionStorage = (value) => {
    sessionStorage.setItem("movie", value)
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
            this.writeSessionStorage(e.target.id)
            window.location.href = '../../../../src/screens/movie/index.html';
        })

        container.appendChild(element)
    })
}

window.addEventListener('keyup', e => {
    if(e.target.id == 'searchInput'){
        const movieSearched = search.value
        
        const filteredMovies = Array.from(findMovie(data, movieSearched))

        filteredMovies.lenght == 0 ? moviesContainer.innerHTML = "<h1> Não encontrei nenhum filme </h1>" : loadCards(moviesContainer, filteredMovies)
    }
})

