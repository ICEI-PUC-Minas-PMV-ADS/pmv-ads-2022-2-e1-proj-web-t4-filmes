window.onload = () => {
    const transicao_el = document.querySelector('.transicao')

    setTimeout(() => {
        transicao_el.classList.remove('ativa');
    }, 250);
}

const perfilNome = document.querySelector('.perfil-nome')

let userLogged = JSON.parse(localStorage.getItem('userLogged'))
let userList = JSON.parse(localStorage.getItem('userList'))

setPerfilNome()

function setPerfilNome() {
    if (perfilNome) {
        if (userLogged[0].nome == 'null') {
            perfilNome.textContent = 'Deslogado';
        }
        else {
            perfilNome.textContent = userLogged[0].nome;
        }
    }
}


