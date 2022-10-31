window.onload = () => {
    const transicao_el = document.querySelector('.transicao')

    setTimeout(() => {
        transicao_el.classList.remove('ativa');
    }, 250);
}

let userLogged = JSON.parse(localStorage.getItem('userLogged') || '[]')
let userList = JSON.parse(localStorage.getItem('userList') || '[]')
let userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn') || '[]')