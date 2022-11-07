
class Header extends HTMLElement{
    constructor(){
        super()
        this.userLogged = JSON.parse(localStorage.getItem('userLogged'))
        this.build()
    }

    build(){
        let open = 0;

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

        const profileMenu = this.createGeneric('div', 'profile-menu')

        const profileMenuBtn = this.createGeneric('button', 'menu-btn')
        profileMenuBtn.textContent = "Perfil";
        profileMenuBtn.addEventListener('click', () =>{window.location.href = "../profile/index.html"})

        const profileMenuLogout = this.createGeneric('button', 'menu-logout')
        profileMenuLogout.textContent = "Sair";

        profileImage.addEventListener('click', () =>{profileMenu.classList.toggle("profile-menu-open")})
        profileMenuLogout.addEventListener('click', () =>{
            userLoggedIn = false;
            userLogged = '[]'
            localStorage.setItem('userLoggedIn', JSON.stringify(userLoggedIn));
            localStorage.setItem('userLogged', JSON.stringify(userLogged));
            location.reload()
        })

        header.appendChild(logo)

        nav.appendChild(linkHome)
        nav.appendChild(linkSearch)        
        header.appendChild(nav)

        profileContainer.appendChild(profileName)
        profileContainer.appendChild(profileImage)

        profileMenu.appendChild(profileMenuBtn)
        profileMenu.appendChild(profileMenuLogout)

        profileContainer.appendChild(profileMenu)

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
            }
            
            .profile-menu{
                z-index: 101;
                display: none;
                flex-direction: column;
                justify-content: center;
                justify-content: space-around;
                text-align: center;
                align-items: center;
                position: absolute;
                margin-top: 12%;
                height: 100px;
                width: 150px;
                background-color: #1c1c1c;
                transition: 0.3s ease-out;
                animation: hide 1s ease normal;
            }

            .profile-menu-open{
                display: flex;
                transition: 0.3s ease-out;
                animation: show 1s ease normal;
            }
            
            .menu-btn{
                margin: 5%;
                border-radius: 5%;
                border: 1px solid #000;
                height: 90%;
                width: 90%;
                background-color: #1e1e1e;
                color: #fff;

                text-decoration: none;

                font-family: 'Fira Code', monospace;
                font-size: 1rem;
                font-weight: 500;

                transition: 0.3s ease-out;
            }

            .menu-logout{
                margin: 5%;
                border-radius: 5%;
                border: 1px solid #000;
                height: 90%;
                width: 90%;
                background-color: #1e1e1e;
                color: #fff;

                text-decoration: none;

                font-family: 'Fira Code', monospace;
                font-size: 1rem;
                font-weight: 500;

                transition: 0.3s ease-out;
            }
            
            .menu-logout:hover,
            .menu-btn:hover{
                background-color: rgb(255, 157, 66);
                scale: 1.05;
                cursor: pointer;
            }

            .menu-logout:hover{
                background-color: rgb(255, 94, 66);
            }
            
            @keyframes show{
                from {
                    transform: translateX(110%);
                }
                to {
                    transform: translateX(0%);
                }
            }
            }`

            return style
    }
}

customElements.define('my-header', Header)