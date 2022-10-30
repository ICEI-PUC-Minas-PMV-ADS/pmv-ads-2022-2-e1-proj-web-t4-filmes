class footer extends HTMLElement{
    constructor(){
        super ()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({mode:'open'})
        shadow.appendChild(this.styles())

        const footer = this.createGeneric('footer')

        const container = this.createGeneric('div', 'img-container')

        const a1 = this.createGeneric('a')
        a1.href = "https://www.instagram.com/carlosreinis/"

        const img1 = this.createGeneric('img')
        img1.src = "https://cdn-icons-png.flaticon.com/512/3955/3955024.png"

        
        const a2 = this.createGeneric('a')
        a2.href = "https://www.linkedin.com/in/carlos-reinis/"

        const img2 = this.createGeneric('img')
        img2.src = "https://cdn-icons-png.flaticon.com/512/145/145807.png"


        const a3 = this.createGeneric('a')
        a3.href = "https://de-de.facebook.com/"

        const img3 = this.createGeneric('img')
        img3.src = "https://cdn-icons-png.flaticon.com/512/145/145802.png"


        const a4 = this.createGeneric('a')
        a4.href = "https://twitter.com/"
        
        const img4 = this.createGeneric('img')
        img4.src = "https://cdn-icons-png.flaticon.com/512/3670/3670151.png"

        const text = this.createGeneric('p')

        const aText = this.createGeneric('a','footer-text')
        aText.href = "https://carlosreinis.com/"
        aText.textContent = 'Copyright (2022) ABCV Group'

        footer.appendChild(container)

        container.appendChild(a1)
        a1.appendChild(img1)

        container.appendChild(a2)
        a2.appendChild(img2)

        container.appendChild(a3)
        a3.appendChild(img3)

        container.appendChild(a4)
        a4.appendChild(img4)

        container.appendChild(text)
        text.appendChild(aText)

        shadow.appendChild(footer)
    }

    createGeneric(type, class_name){
        const element = document.createElement(type)
        element.classList.add(class_name)
        return element
    }

    styles(){
        const style = document.createElement('style')
        style.textContent = `    
        footer{
            flex-direction: column;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #1c1c1c;
            width: 100%;
            height: 70px;
            left: 0;
            bottom: 0;
        }
        
        a{
            color: transparent;
            transition: all 200ms ease-out;
        }

        .footer-text{
            text-decoration: none;
            font-size: 10px; 
            font-weight: lighter; 
            text-align: center;
            color: white;
            transition: all 200ms ease-out;
        }

        .footer-text:hover{
            color: rgb(255, 115, 0);
        }

        img{
            height : 30px;
            margin: 5px;
            margin-bottom: 2px;
            transition: all 200ms ease-out;
            border: transparent 2px solid;
            border-radius: 0%;
        }

        img:hover{
            border: rgb(255, 115, 0) 2px solid;
            border-radius: 50%;
        }
        
        p{
            margin: auto;
            width: fit-content;
            height: fit-content;
        }`

        return style
    }

}

customElements.define('my-footer', footer)