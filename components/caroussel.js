class Caroussel extends HTMLElement{
    constructor(){
        super()

        this.currentCard = 2

        this.build()
    }

    build(){
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.styles())

        const carousselContainer = this.createGeneric('div', 'caroussel-container')
        const title = this.createGeneric('h2', 'title-category')
        title.innerHTML = this.getAttribute('title')

        const arrowLeft = this.createGeneric('button', 'arrow-left')
        arrowLeft.innerHTML = '«'

        const arrowRight = this.createGeneric('button', 'arrow-right')
        arrowRight.innerHTML = '»'

        const arrows = [arrowLeft, arrowRight]

        const galleryWrapper = this.createGeneric('div', 'gallery-wrapper')
        const gallery = this.createGeneric('div', 'gallery')

        this.cards = this.createCards()
        carousselContainer.appendChild(title)
        carousselContainer.appendChild(arrowLeft)
        carousselContainer.appendChild(arrowRight)
        carousselContainer.appendChild(galleryWrapper)
        galleryWrapper.appendChild(gallery)
        this.cards.forEach(card => gallery.appendChild(card))

        this.mappingArrows(arrows)
        this.mappingCards(this.cards)

        shadow.appendChild(carousselContainer)

    }

    mappingArrows(ars){
        ars.forEach(arrow => {
            arrow.addEventListener('click', (e) => {
                const isLeft = arrow.classList.contains('arrow-left')

                if(isLeft) this.currentCard -= 5
                else this.currentCard += 5

                if(this.currentCard >= this.cards.length - 1) this.currentCard = this.cards.length - 1
                if(this.currentCard <= 0) this.currentCard = 0

                this.cards[this.currentCard].scrollIntoView({
                    inline: 'center',
                    behavior: 'smooth'
                })
                
                window.scroll(0, window.scrollY);
            })
        })
    }

    styles(){
        const style = document.createElement('style')
        style.textContent = `
            .caroussel-container{
                position: relative;
                padding: 15px;
                max-width: 100vw;
                margin: 0 auto;
            }

            .gallery-wrapper{
                overflow-x: auto;
                overflow-x: hidden;
                padding: 20px;
            }

            .gallery{
                display: flex;
                flex-flow: row nowrap;
                gap: 25px;
            }

            .card{
                transition: 0.35s ease-out;
                opacity: 0.7;

                animation: surge .3s ease-in-out;
            }

            .card:hover{
                scale: 1.1;
                cursor: pointer;
                opacity: 1;
            }

            .card:active{
                scale: 1;
            }

            .arrow-left,
            .arrow-right{
                position: absolute;
                width: 50px;
                height: 50px;
                left: 1%;
                right: auto;
                top: 50%;
                transform: translateY(-50%);
                
                outline: none;
                color: #FFF;
                font-size: 2rem;
                background-color: #000000;
                opacity: 0.4;
                border-radius: 50%;
                border: none;
                z-index: 1;

                transition: 1s ease-out;
            }

            .arrow-right{
                right: 1%;
                top: 50%;
                left: auto;
            }

            .arrow-left:hover,
            .arrow-right:hover{
                opacity: 0.8;
                cursor: pointer;
            }

            .title-category{
                color: #FFF;
                border-bottom: 1px solid #FFF;
                margin-left: 30px;
                font-family: Fira Code;
            }

            .surge{
                animation: surge .3s ease-in-out;
            }
            
            @keyframes surge{
                from{
                    opacity: 0;
                }
                to{
                    opacity: 0.7;
                }
            }
        `
        return style;
    }

    createCards(){
        //MODIFICAR A FORMA COMO A FUNÇÃO OBTEM OS FILMES PARA TORNAR O CARROSSEL MAIS GENÉRICO
        const list = JSON.parse(localStorage.getItem('movies'))
        
        let cards = list.map(mov => {
            if(mov.local_status){
                return this.createCard(`../../assets/imgs/${mov.file_name}`, mov.id)
            }
            else{
                return this.createCard(mov.poster_path, mov.id)
            }
        })

        return cards
    }

    createCard(src, id){
        const card = this.createGeneric('img', 'card')
        card.setAttribute('id', id)
        card.src = src
        return card
    }

    mappingCards(cards){
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                this.writeSessionStorage(e.target.id)
                window.location.href = '../../screens/movie/index.html';
            })
        })
    }

    createGeneric(type, class_name){
        const element = document.createElement(type)
        element.classList.add(class_name)
        return element
    }

    writeSessionStorage(value){
        sessionStorage.setItem("movie", value)
    }
}

customElements.define('my-caroussel', Caroussel)