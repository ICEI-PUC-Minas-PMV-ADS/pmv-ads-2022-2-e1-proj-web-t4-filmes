/*Um botão animado é um botão generico que recebe uma animação lottie e parametros sobre sua execução.
'path' e 'direction' os mais importantes. */

// SPEED
// TYPE = REPEAT - REVERSE
// PATH

class AnimatedButton extends HTMLElement{
    constructor(){
        super()

        this.build()
    }

    execAnimation = () => {
        if(this.getAttribute('type') == 'repeat') {
            this.anim.setDirection(1)
            this.anim.setSpeed(Number(this.getAttribute('speed')))
            this.anim.goToAndPlay(0, true)
        }
        if(this.getAttribute('type') == 'reverse'){
            this.getAttribute('direction') == 1 ? this.setAttribute('direction', -1) : this.setAttribute('direction', 1)
            this.anim.setDirection(this.getAttribute('direction'))
            this.anim.setSpeed(Number(this.getAttribute('speed')))
            this.anim.play()
        }
    }

    createButton(){
        const container = document.createElement('div')
        container.classList.add('container')

        this.anim = lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: this.getAttribute('animation')
        })

        return container
    }

    build(){
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.styles())

        const container = this.createButton()

        container.addEventListener('click', e => {
            this.execAnimation()
        })

        shadow.appendChild(container)
    }

    styles(){
        const style = document.createElement('style')
        style.textContent = `
            
        `
        return style
    }
}

customElements.define('animated-button', AnimatedButton)