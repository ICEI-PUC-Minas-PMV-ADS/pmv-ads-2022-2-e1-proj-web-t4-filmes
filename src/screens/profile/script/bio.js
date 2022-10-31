const openBioEditor = document.querySelector('#edit-bio')
const popupBio = document.querySelector('#popup-perfil-bio')
const inputBio = document.querySelector('#perfil-bio-upload')
const bioBtnDialogCancel = document.querySelector('#btnBioCancel')
const bioBtnDialogOK = document.querySelector('#btnBioOK')
const bioForm = document.querySelector('#bioForm')
const perfilBio = document.querySelector('.bio-text')

userLogged = JSON.parse(localStorage.getItem('userLogged'))
userList = JSON.parse(localStorage.getItem('userList'))

setPerfilBio()

function setPerfilBio() {
    if (perfilBio) {
        if (typeof userLogged[0].bio === 'undefined') {
            perfilBio.textContent = 'Clique aqui para definir uma biografia';
        }
        else {
            perfilBio.textContent = userLogged[0].bio;
        }
    }
}

function saveBio() {
    userList.find(u => u.email == userLogged[0].email).bio = inputBio.value

    userLogged[0].bio = inputBio.value

    localStorage.setItem('userList', JSON.stringify(userList))
    localStorage.setItem('userLogged', JSON.stringify(userLogged))

    location.reload()
}

function fecharPopupBio() {
    popupBio.setAttribute('style', 'animation: hide 1s ease normal');
    setTimeout(() => {
        popupBio.close()
        popupBio.setAttribute('style', 'animation: show 1s ease normal');
    }, 700);
}

openBioEditor.addEventListener('click', () => {
    popupBio.showModal()
})

bioBtnDialogCancel.addEventListener('click', () => {
    fecharPopupBio()
})

bioBtnDialogOK.addEventListener('click', () => {
    if (inputBio.value !== '') {
        fecharPopupBio()
    }
    else {
        alert('Insira uma nova biografia primeiro!')
    }
})

bioForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveBio();
})