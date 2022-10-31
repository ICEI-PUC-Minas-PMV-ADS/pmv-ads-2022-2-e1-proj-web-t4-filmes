const openNomeEditor = document.querySelector('#edit-nome')
const popupNome = document.querySelector('#popup-perfil-nome')
const inputNome = document.querySelector('#perfil-nome-upload')
const nomeBtnDialogCancel = document.querySelector('#btnNomeCancel')
const nomeBtnDialogOK = document.querySelector('#btnNomeOK')
const nomeForm = document.querySelector('#nomeForm')
const perfilNome = document.querySelector('.perfil-nome')

userLogged = JSON.parse(localStorage.getItem('userLogged'))
userList = JSON.parse(localStorage.getItem('userList'))

setPerfilNome()

function setPerfilNome() {
    if (perfilNome) {
        if (typeof userLogged[0].nome === 'undefined') {
            perfilNome.textContent = 'Deslogado';
        }
        else {
            perfilNome.textContent = userLogged[0].nome;
        }
    }
}

function saveName() {
    userList.find(u => u.email == userLogged[0].email).nome = inputNome.value

    userLogged[0].nome = inputNome.value

    localStorage.setItem('userList', JSON.stringify(userList))
    localStorage.setItem('userLogged', JSON.stringify(userLogged))

    location.reload()
}

function fecharPopupNome() {
    popupNome.setAttribute('style', 'animation: hide 1s ease normal');
    setTimeout(() => {
        popupNome.close()
        popupNome.setAttribute('style', 'animation: show 1s ease normal');
    }, 700);
}

openNomeEditor.addEventListener('click', () => {
    popupNome.showModal()
})

nomeBtnDialogCancel.addEventListener('click', () => {
    fecharPopupNome()
})

nomeBtnDialogOK.addEventListener('click', () => {
    if (inputNome.value !== '') {
        fecharPopupNome()
    }
    else {
        alert('Insira um novo nome primeiro!')
    }
})

nomeForm.addEventListener('submit', (e) => {
    if(!perfilNome.textContent == ''){
    e.preventDefault();
    saveName();
    return true;
}
})


