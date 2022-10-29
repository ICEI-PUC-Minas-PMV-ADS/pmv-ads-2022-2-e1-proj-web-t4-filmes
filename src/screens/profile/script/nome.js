const openNomeEditor = document.querySelector('#edit-nome')
const popupNome = document.querySelector('#popup-perfil-nome')
const inputNome = document.querySelector('#perfil-nome-upload')
const nomeBtnDialogCancel = document.querySelector('#btnNomeCancel')
const nomeBtnDialogOK = document.querySelector('#btnNomeOK')
const nomeForm = document.querySelector('#nomeForm')

var fotoPath;
userLogged = JSON.parse(localStorage.getItem('userLogged'))
userList = JSON.parse(localStorage.getItem('userList'))

function saveName() {
    userList.find(u => u.email == userLogged[0].email).nome = fotoPath

    userLogged[0].nome = fotoPath

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
        alert('Faça upload da imagem primeiro!')
    }
})

nomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveUserNome();
})


