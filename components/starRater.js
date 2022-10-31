class starRater extends HTMLElement{
    constructor(){
        super()

        this.build()
    }

    build(){
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.styles())
        const stars = this.createStars(Number(this.getAttribute('rate')))
        const starRater_container = this.createGeneric('star-rater-container' ,'div')
        stars.forEach(star => starRater_container.append(star))
        shadow.appendChild(starRater_container)
    }

    createStar(class_name, percent){
        const star = this.createGeneric(class_name, 'img')

        if(percent <= 0.2) return this.createGeneric('div')
        else{
            percent <= 0.7 ? star.src= '../../assets/imgs/half-star.png': star.src= '../../assets/imgs/star.png'
            return star
        }
    }

    createStars(total){
        const half = (total - Math.trunc(total))
        const complete = Math.trunc(total) / 2
        this.stars = []

        Array.from({ length: complete }).forEach(n => this.stars.push(this.createStar('star', 10)))
        this.stars.push(this.createStar('star', half))
        return this.stars
    }

    createGeneric(class_name, type){
        const element = document.createElement(type)
        element.classList.add(class_name)
        return element
    }

    styles(){
        const style = document.createElement('style')
        style.textContent = `
            .star{
                width: 1rem;
                height: 1rem;
                background-color: transparent;
                border: none;
            }
        `
        return style
    }
}

customElements.define('star-rater', starRater)
