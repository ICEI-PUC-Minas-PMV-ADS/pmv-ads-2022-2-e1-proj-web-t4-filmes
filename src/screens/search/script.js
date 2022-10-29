
// const data = [
//     {
//         id: 1,
//         title: "Rick and Morty",
//         poster_path: "undefined",
//         file_name: "rick-and-morty.jpg",
//         local_status: true,
//         overview: "O show gira em torno das aventuras dos membros da família Smith, que consiste nos pais Jerry e Beth, seus filhos Summer e Morty, e o pai de Beth, chamado Rick Sanchez, que mora com eles como hóspede. De acordo com Justin Roiland, a família mora fora da cidade de Seattle, no estado norte-americano de Washington.",
//         vote_average: 8.6
//     },
//     {
//         id: 2,
//         title: "South Park",
//         poster_path: "https://deepfocusreview.com/wp-content/uploads/2022/01/south-park-bigger-longer-uncut-poster.jpg",
//         file_name: "south-park-bigger-longer-uncut-poster.jpg",
//         local_status: false,
//         overview: "South Park é uma série animada que acompanha os quatro amigos boca-suja da 4ª série, Stan, Kyle, Kenny e Cartman. Na cidade de South Park, no Colorado, coisas estranhas não param de acontecer, desde abdução alienígena até o irmão mais novo de Kyle, Ike. A série é baseada no curta-metragem The Spirit of Christmas.",
//         vote_average: 7.8
//     },
//     {
//         id: 3,
//         title: "The Simpsons",
//         poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNSkUOOIqVtjcI6-1zqAeG_O8bn1cHZgpB15flUfZskAHTNlejZWwI5aKYqx3LPoOiAg&usqp=CAU",
//         file_name: "undefined",
//         local_status: false,
//         overview: "The Simpsons é uma série animada norte americana transmitida pelo canal FOX. A comédia acompanha a família Simpsons, uma família da classe trabalhadora na cidade desajustada de Springfield. Homer, o pai, trabalha como inspetor de segurança na usina nuclear local; Marge, a mãe, tenta manter a paz na família.",
//         vote_average: 8.3
//     },
//     {
//         id: 4,
//         title: "Family Guy",
//         poster_path: "undefined",
//         file_name: "family-guy.jpg",
//         local_status: true,
//         overview: "O desenho animado explora a vida familiar nos Estados Unidos, por meio do conturbado cotidiano da família Griffin, cujo chefe é Peter, que dá o seu melhor para fazer o que é certo, mas no meio do caminho comete erros legendários. Ele é casado com Lois, que tenta manter a família em um certo padrão de normalidade.",
//         vote_average: 7.7
//     },
//     {
//         id: 5,
//         title: "Bojack Horseman",
//         poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzSxtJ9UmE3OfOiFrFcVANfdEUZq13wUd5ZjNtm9Bn_cr0w-VlMmLmIAU7dZBAsQMBeJs&usqp=CAU",
//         file_name: "undefined",
//         local_status: false,
//         overview: "BoJack é um decadente cavalo que trabalha na TV. Uma estrela já esquecida de um seriado da década de 1990 chamado Horsin' Around, ele disfarça sua baixa auto-estima com uísque e relações fracassadas.",
//         vote_average: 10
//     },
//     {
//         id: 6,
//         title: "Primal",
//         poster_path: "https://image.tmdb.org/t/p/w200/jflPzxYbM4MxxCppo2AbvSbTOLm.jpg",
//         file_name: "jflPzxYbM4MxxCppo2AbvSbTOLm.jpg",
//         local_status: false,
//         overview: '"Primal" é sobre sobrevivência. Com apenas cinco episódios de 20 minutos, a série se passa na pré-história. Os personagens principais são um homem das cavernas e uma tiranossauro rex que se unem após uma tragédia que atinge suas famílias.',
//         vote_average: 7.2
//     },
//     {
//         id: 7,
//         title: "Love, Death and Robots",
//         poster_path: "undefined",
//         file_name: "Ldr.jpg",
//         local_status: true,
//         overview: "A animação para adultos da Netflix conta com 18 episódios, cada um com uma história independente e com duração que vai de seis a 17 minutos. As tramas vão de um encontro de três robôs que vagam pelo planeta após o fim da raça humana a um artista que decide dar sua primeira entrevista depois de 100 anos.",
//         vote_average: 9.9
//     },
//     {
//         id: 8,
//         title: "Big Mouth",
//         poster_path: "https://assistironline.net/wp-content/uploads/elementor/thumbs/assistir-Big-Mouth-3a-Temporada-2019-online-pczj8nswg8tawnzif5sodii33k956hzjh7mw0sat2w.jpg",
//         file_name: "assistir-Big-Mouth-3a-Temporada-2019-online-pczj8nswg8tawnzif5sodii33k956hzjh7mw0sat2w.jpg",
//         local_status: false,
//         overview: "Big Mouth acompanha as aventuras de Nick Birch e Andrew Goldberg, dois melhores amigos que enfrentam as mudanças da puberdade. Junto dos colegas Jessi, Missy e Jay, os dois adolescentes vivem diversas situações cômicas, desde começar a sentir atração por garotas até ter dúvidas sobre suas preferências sexuais.",
//         vote_average: 7.4
//     },
//     {
//         id: 9,
//         title: "Desencanto",
//         poster_path: "undefined",
//         file_name: "Desencanto.jpg",
//         local_status: true,
//         overview: "Bean é uma princesa alcoólatra que mora no reino mágico de Dreamland ao lado de Luci, seu demônio pessoal, e de Elfo, seu melhor amigo. Além dos problemas com a bebida, a jovem nobre está disposta, juntamente com sua turminha, a viver as mais inusitadas aventuras, nem que, para isso, precise encarar terríveis ogros ou tolos humanos. ",
//         vote_average: 7.5
//     }
// ]
console.log(document.body.offsetWidth)

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
        card.local_status ? element.src = `../../../assets/${card.file_name}` : element.src = card.poster_path

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

        console.log(filteredMovies.length)

        filteredMovies.lenght == 0 ? moviesContainer.innerHTML = "<h1> Não encontrei nenhum filme </h1>" : loadCards(moviesContainer, filteredMovies)
    }
})

