const movies = [
    {
        id: 1,
        title: "Rick and Morty",
        poster_path: "undefined",
        file_name: "rick-and-morty.jpg",
        local_status: true,
        overview: "O show gira em torno das aventuras dos membros da família Smith, que consiste nos pais Jerry e Beth, seus filhos Summer e Morty, e o pai de Beth, chamado Rick Sanchez, que mora com eles como hóspede. De acordo com Justin Roiland, a família mora fora da cidade de Seattle, no estado norte-americano de Washington.",
        vote_average: 8.6,
        correlations: []
    },
    {
        id: 2,
        title: "South Park",
        poster_path: "https://deepfocusreview.com/wp-content/uploads/2022/01/south-park-bigger-longer-uncut-poster.jpg",
        file_name: "south-park-bigger-longer-uncut-poster.jpg",
        local_status: false,
        overview: "South Park é uma série animada que acompanha os quatro amigos boca-suja da 4ª série, Stan, Kyle, Kenny e Cartman. Na cidade de South Park, no Colorado, coisas estranhas não param de acontecer, desde abdução alienígena até o irmão mais novo de Kyle, Ike. A série é baseada no curta-metragem The Spirit of Christmas.",
        vote_average: 7.8,
        correlations: [{id: 1, votes: 10}, {id: 3, votes: 4}]
    },
    {
        id: 3,
        title: "The Simpsons",
        poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNSkUOOIqVtjcI6-1zqAeG_O8bn1cHZgpB15flUfZskAHTNlejZWwI5aKYqx3LPoOiAg&usqp=CAU",
        file_name: "undefined",
        local_status: false,
        overview: "The Simpsons é uma série animada norte americana transmitida pelo canal FOX. A comédia acompanha a família Simpsons, uma família da classe trabalhadora na cidade desajustada de Springfield. Homer, o pai, trabalha como inspetor de segurança na usina nuclear local; Marge, a mãe, tenta manter a paz na família.",
        vote_average: 8.3,
        correlations: []
    },
    {
        id: 4,
        title: "Family Guy",
        poster_path: "undefined",
        file_name: "family-guy.jpg",
        local_status: true,
        overview: "O desenho animado explora a vida familiar nos Estados Unidos, por meio do conturbado cotidiano da família Griffin, cujo chefe é Peter, que dá o seu melhor para fazer o que é certo, mas no meio do caminho comete erros legendários. Ele é casado com Lois, que tenta manter a família em um certo padrão de normalidade.",
        vote_average: 7.7,
        correlations: []
    },
    {
        id: 5,
        title: "Bojack Horseman",
        poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzSxtJ9UmE3OfOiFrFcVANfdEUZq13wUd5ZjNtm9Bn_cr0w-VlMmLmIAU7dZBAsQMBeJs&usqp=CAU",
        file_name: "undefined",
        local_status: false,
        overview: "BoJack é um decadente cavalo que trabalha na TV. Uma estrela já esquecida de um seriado da década de 1990 chamado Horsin' Around, ele disfarça sua baixa auto-estima com uísque e relações fracassadas.",
        vote_average: 8.3,
        correlations: []
    },
    {
        id: 6,
        title: "Primal",
        poster_path: "https://image.tmdb.org/t/p/w200/jflPzxYbM4MxxCppo2AbvSbTOLm.jpg",
        file_name: "jflPzxYbM4MxxCppo2AbvSbTOLm.jpg",
        local_status: false,
        overview: '"Primal" é sobre sobrevivência. Com apenas cinco episódios de 20 minutos, a série se passa na pré-história. Os personagens principais são um homem das cavernas e uma tiranossauro rex que se unem após uma tragédia que atinge suas famílias.',
        vote_average: 7.2,
        correlations: []
    },
    {
        id: 7,
        title: "Love, Death and Robots",
        poster_path: "undefined",
        file_name: "Ldr.jpg",
        local_status: true,
        overview: "A animação para adultos da Netflix conta com 18 episódios, cada um com uma história independente e com duração que vai de seis a 17 minutos. As tramas vão de um encontro de três robôs que vagam pelo planeta após o fim da raça humana a um artista que decide dar sua primeira entrevista depois de 100 anos.",
        vote_average: 10,
        correlations: []
    },
    {
        id: 8,
        title: "Big Mouth",
        poster_path: "https://assistironline.net/wp-content/uploads/elementor/thumbs/assistir-Big-Mouth-3a-Temporada-2019-online-pczj8nswg8tawnzif5sodii33k956hzjh7mw0sat2w.jpg",
        file_name: "assistir-Big-Mouth-3a-Temporada-2019-online-pczj8nswg8tawnzif5sodii33k956hzjh7mw0sat2w.jpg",
        local_status: false,
        overview: "Big Mouth acompanha as aventuras de Nick Birch e Andrew Goldberg, dois melhores amigos que enfrentam as mudanças da puberdade. Junto dos colegas Jessi, Missy e Jay, os dois adolescentes vivem diversas situações cômicas, desde começar a sentir atração por garotas até ter dúvidas sobre suas preferências sexuais.",
        vote_average: 7.4,
        correlations: []
    },
    {
        id: 9,
        title: "Desencanto",
        poster_path: "undefined",
        file_name: "Desencanto.jpg",
        local_status: true,
        overview: "Bean é uma princesa alcoólatra que mora no reino mágico de Dreamland ao lado de Luci, seu demônio pessoal, e de Elfo, seu melhor amigo. Além dos problemas com a bebida, a jovem nobre está disposta, juntamente com sua turminha, a viver as mais inusitadas aventuras, nem que, para isso, precise encarar terríveis ogros ou tolos humanos. ",
        vote_average: 7.5,
        correlations: []
    },
    {
        id: 10,
        title: "Samaritan",
        poster_path: "https://rjbsolucoes.com.br/images/filmes/803/st.jpg",
        file_name: "st.jpg",
        local_status: false,
        overview: "Sam Cleary, de 13 anos, suspeita que seu misterioso vizinho, o Sr. Smith, seja na verdade um herói lendário que foi dado como morto décadas antes. Para salvar a cidade de uma nova onda de crime, ele tenta convencê-lo a sair da reclusão.",
        vote_average: 9,
        correlations: []
    },
    {
        id: 11,
        title: "A Mulher Rei",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rhsnFSInZRpAfQ4Y1gquwcKtO2I.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Nanisca era a comandante do exército do Reino de Daomé, um dos locais mais poderosos da África nos séculos XVII e XIX. Durante o período, o grupo militar era composto apenas por mulheres, entre as guerreiras está a filha de Nanisca, Nawi, juntas elas combateram os colonizadores franceses, tribos rivais e todos aqueles que tentaram escravizar seu povo e destruir suas terras.",
        vote_average: 7.9,
        correlations: []
    },
    {
        id: 12,
        title: "Bilhete de Fuga",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ihss7lYlG9xON9RnOIy2pwLbdLX.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Freddy, um pequeno criminoso, está fugindo com um saco cheio de dinheiro e cocaína após um assalto. Gravemente ferido e muito machucado Freddy entra em um ônibus sujo onde conhece uma garota misteriosa e um passageiro assustador.",
        vote_average: 6.9,
        correlations: []
    },
    {
        id: 13,
        title: "Polar",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/efuKHH9LqBZB67AS87kprLgaYO8.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "MG, a policewoman who has been expelled from the Corps due to the problems with alcohol and drugs that she has had since the loss of her son, receives a call from a man asking her to look for Macarena Gómez, a popular TV actress.",
        vote_average: 6.5,
        correlations: []
    },
    {
        id: 14,
        title: "Plano de Aula",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/akK0REohti8YWwGZGD1MHPZvBRh.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Para investigar a morte do melhor amigo, um ex-policial vai trabalhar numa escola para investigar a gangue local.",
        vote_average: 5.8,
        correlations: []
    },
    {
        id: 15,
        title: "P Troll da Montanha",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Após ficar aprisionada por mil anos nas profundezas da montanha de Dovre, uma criatura gigantesca chega à superfície. Ela inicia uma jornada rumo à capital da Noruega, deixando destruição e caos em seu rastro. Um grupo de heróis se une para impedi-la. Mas como deter algo que deveria existir apenas no folclore norueguês?",
        vote_average: 6.9,
        correlations: []
    },
    {
        id: 16,
        title: "Paradise City",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xdmmd437QdjcCls8yCQxrH5YYM4.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Willis interpreta o caçador de recompensas renegado, Ryan Swan, que deve abrir caminho no mundo do crime havaiano para se vingar do chefão, interpretado por Travolta, que assassinou seu pai.",
        vote_average: 6.2,
        correlations: []
    },
    {
        id: 17,
        title: "R.I.P.D. 2: Rise of the Damned",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "O xerife Roy Pulsipher não está muito empolgado por se encontrar morto após um tiroteio com uma notória gangue fora da lei, mas ele tem uma segunda chance de retornar à Terra depois de ser recrutado pelo R.I.P.D. (Departamento Descanse em Paz). Mas vingar seu próprio assassinato pode ter que ficar em segundo plano para salvar o mundo quando uma porta de entrada para o inferno é aberta na antiga cidade mineira de Red Creek, ameaçando não apenas os habitantes locais, mas toda a humanidade.",
        vote_average: 6.7,
        correlations: []
    },
    
    {
        id: 18,
        title: "Pantera Negra: Wakanda para Sempre",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6tb0qiqLN9szHPA4i0kY38oaWew.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Rainha Ramonda, Shuri, M'Baku, Okoye e Dora Milaje, lutam para proteger sua nação das potências mundiais intervenientes após a morte do rei T'Challa. Enquanto os wakandanos se esforçam para abraçar seu próximo capítulo, os heróis devem se unir com a ajuda de War Dog Nakia e Everett Ross e forjar um novo caminho para o reino de Wakanda.",
        vote_average: 7.5,
        correlations: []
    },
    {
        id: 19,
        title: "Hellraiser",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f9ZAIUxTTk23vo1BC9Ur1Rx5c2E.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Em “Hellraiser”, uma jovem lutando contra o vício se apossa de uma antiga caixa de quebra-cabeça, sem saber que seu objetivo é convocar os Cenobites, um grupo de seres sobrenaturais sádicos de outra dimensão.",
        vote_average: 6.5,
        correlations: []
    },
    {
        id: 20,
        title: "Psicose",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lqTVfL68X937Gtd4rlgEmwiDDHI.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Marion Crane é uma secretária que rouba 40 mil dólares da imobiliária onde trabalha para se casar e começar uma nova vida. Durante a fuga à carro, ela enfrenta uma forte tempestade, erra o caminho e chega em um velho hotel. O estabelecimento é administrado por um sujeito atencioso chamado Norman Bates, que nutre um forte respeito e temor por sua mãe. Marion decide passar a noite no local, sem saber o perigo que a cerca.",
        vote_average: 8.4,
        correlations: []
    },
    {
        id: 21,
        title: "O Iluminado",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7ceEaLciLfksJkSHqp0vLE5eLyy.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Durante o inverno, um homem é contratado para ficar como vigia em um hotel no Colorado e vai para lá com a esposa e seu filho. Porém, o contínuo isolamento começa a lhe causar problemas mentais sérios e ele vai se tornado cada vez mais agressivo e perigoso, ao mesmo tempo que seu filho passa a ter visões de acontecimentos ocorridos no passado, que também foram causados pelo isolamento excessivo.",
        vote_average: 8.2,
        correlations: []
    },
    {
        id: 22,
        title: "O Telefone Preto",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yw6H4C64tjBWlyKFG1pzmq5zOQh.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Após ter sido raptado por um assassino de crianças e trancado numa cave à prova de som, Finney Shaw um menino de 13 anos começa a receber chamadas num telefone desligado das vítimas anteriores do assassino. E eles estão determinados a garantir que o que aconteceu com eles não aconteça com Finney.",
        vote_average: 7.9,
        correlations: []
    },
    {
        id: 23,
        title: "O Bebê de Rosemary",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v9OaZXIFgAmgYPDcs06kks0c1Fr.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Um jovem casal se muda para um apartamento em Nova York para começar uma família. As coisas ficam assustadoras quando Rosemary começa a suspeitar que seu futuro bebê não está seguro ao lado dos seus estranhos vizinhos.",
        vote_average: 7.8,
        correlations: []
    },
    {
        id: 24,
        title: "O Exorcista",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z8X9sQ64GPGeJi5hWQsqDqEVMan.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador. Deste modo, ela pede ajuda a um padre, que também um psiquiatra, e este chega a conclusão de que a garota está possuída pelo demônio. Ele solicita então a ajuda de um segundo sacerdote, especialista em exorcismo, para tentar livrar a menina desta terrível possessão.",
        vote_average: 7.7,
        correlations: []
    },
    {
        id: 25,
        title: "Eu Vi o Diabo",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ebODPzkfekZ9aXH6TMlXg7YzJM2.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "A noiva de um agente secreto é morta por um serial killer. Cego pela fúria, ele começa a investigar os possíveis suspeitos do crime, até finalmente identificar o culpado. Mas, ao invés de matá-lo, resolve pôr em prática uma terrível e lenta vingança.",
        vote_average: 7.8,
        correlations: []
    },
    {
        id: 26,
        title: "Invocação do Mal 3: A Ordem do Demônio",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tLmaOXT9rMb17ISQDURKQIu3Okk.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Um dos casos mais sensacionais de seus arquivos começa com a luta pela alma de um garoto e depois os leva para além de qualquer coisa que já tenham visto. Esse caso marcou a primeira vez na história dos Estados Unidos em que um suspeito de assassinato alegou possessão demoníaca como defesa.",
        vote_average: 7.6,
        correlations: []
    },
    {
        id: 27,
        title: "Rogai por Nós",
        poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zduyzcjyahZtP4fGZE6789h04IM.jpg",
        file_name: "undefined",
        local_status: false,
        overview: "Conheça Alice, uma jovem com deficiência auditiva que, após uma suposta visita da Virgem Maria, é inexplicavelmente capaz de ouvir, falar e curar os enfermos. À medida que a notícia se espalha e pessoas de perto e de longe se reúnem para testemunhar seus milagres, um jornalista decadente (Jeffrey Dean Morgan), que espera reviver sua carreira, visita a pequena cidade da Nova Inglaterra para investigar o fenômeno. Quando eventos terríveis começam a acontecer por toda parte, ele começa a questionar se esses fenômenos são obras da Virgem Maria ou algo muito mais sinistro.",
        vote_average: 6.7,
        correlations: []
    },
    
]

class HomePage{
    constructor(){
        //configs
        this.writeLocalStorage()
        this.movies = JSON.parse(localStorage.getItem('movies'))
    }

    writeLocalStorage(){
        localStorage.setItem('movies', JSON.stringify(movies))
    }

    writeSessionStorage(value){
        sessionStorage.setItem("movie", value)
    }
}

const home = new HomePage()

