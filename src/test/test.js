const popup = document.querySelector('.popup-wrapper')
const correlate = document.querySelector('.correlate')
const searchInput = document.querySelector('.search-input')
const searchButton = document.querySelector('.search-button')
const results = document.querySelector('.results')
const currentMovie = document.querySelector('.current-movie')
const correlateMovie = document.querySelector('.correlate-movie')
const movies = JSON.parse(localStorage.getItem('movies'))

currentMovie.src = `../assets/imgs/${movies.find(mov => mov.id == 1).file_name}`

correlate.addEventListener('click', e => {
    popup.style = 'display: flex;'
})

searchButton.addEventListener('click', e => {
    const search = searchInput.value.toLocaleLowerCase()

    console.log(results)
    results.innerHTML = ''
    results.appendChild(UpdateSearchContainer(search))
})

function UpdateSearchContainer(search){
    const result = movies.find(mov => mov.title.toLocaleLowerCase() == search)

    if(result != null){
        const element = document.createElement('img')
        element.classList.add('card')
        element.id = result.id
        result.local_status ? element.src = `../assets/imgs/${result.file_name}` : element.src = result.poster_path

        element.addEventListener('click', e => {
            console.log('voce clicou no card')

            if(result.local_status){
                correlateMovie.src = `../../assets/imgs/${result.file_name}`
            }
            else{
                correlateMovie.src = result.poster_path
            }
        })

        return element
    }
    else{
        const error = document.createElement('span')
        error.classList.add('error')
        error.innerHTML = "Não foi possível encontrar resultados"
        return error
    }
}