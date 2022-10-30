
class Header extends HTMLElement{
    constructor(){
        super()
        this.userLogged = JSON.parse(localStorage.getItem('userLogged'))
        this.build()
    }

    build(){
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.styles())

        const header = this.createGeneric('header', 'header')

        const logo = this.createGeneric('img', 'logo')
        logo.src = '../../assets/imgs/pipoca.png'

        const nav = this.createGeneric('nav', 'header-buttons-container')

        const linkHome = this.createGeneric('a', 'header-button')
        linkHome.href = '../home/index.html'
        linkHome.innerHTML = 'INICIO'
        
        const linkSearch = this.createGeneric('a', 'header-button')
        linkSearch.href = '../search/index.html'
        linkSearch.innerHTML = 'PROCURAR'

        const profileContainer = this.createGeneric('div', 'profile-container')

        const profileName = this.createGeneric('span', 'profile-name')
        profileName.innerHTML = this.getAttribute('user-name')

        const profileImage = this.createGeneric('img', 'profile-image')
        profileImage.addEventListener('click', () =>{window.location.href = "../profile/index.html"})
    
            if (typeof this.userLogged === "undefined" || typeof this.userLogged[0].foto === "undefined") {
                profileImage.src = "../../assets/imgs/profile-image.jpg"
            }
            else {
                profileImage.src = this.userLogged[0].foto;
            }

            if (typeof this.userLogged === "undefined" || typeof this.userLogged[0].nome === "undefined") {
                profileName.textContent = "Usuário"
            }
            else {
                profileName.textContent = this.userLogged[0].nome;
            }

        header.appendChild(logo)

        nav.appendChild(linkHome)
        nav.appendChild(linkSearch)
        header.appendChild(nav)

        profileContainer.appendChild(profileName)
        profileContainer.appendChild(profileImage)
        header.appendChild(profileContainer)

        shadow.appendChild(header)
    }

    createGeneric(type, class_name){
        const element = document.createElement(type)
        element.classList.add(class_name)
        return element
    }

    styles(){
        const style = document.createElement('style')
        style.textContent = `    
            .header{
                height: 70px;
                font-family: 'Fira Code', monospace;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 40px 0 40px;
                background-color: #1c1c1c;
            }

            .logo{
                width: 50px;
                height: 50px;
                transition: 0.3s ease-out;
            }

            .logo:hover{
                cursor: pointer;
                scale: 1.1;
            }

            .header-buttons-container{
                width: 30%;
                display: flex;
                justify-content: space-around;
            }

            .header-button{
                color: #dadada;
                text-decoration: none;

                font-family: 'Fira Code', monospace;
                font-size: 1.2rem;
                font-weight: 500;

                transition: 0.3s ease-out;
            }

            .header-button:hover{
                color: rgb(255, 157, 66);
                scale: 1.05;
                cursor: pointer;
            }

            .profile-container{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }

            .profile-name{
                color: #FFF;
            }

            .profile-image{
                width: 45px;
                height: 45px;
                border-radius: 50%;
                transition: 0.3s ease-out;
                object-fit: cover;
            }

            .profile-image:hover{
                cursor: pointer;
                scale: 1.1;
            }`

            return style
    }
}

customElements.define('my-header', Header)