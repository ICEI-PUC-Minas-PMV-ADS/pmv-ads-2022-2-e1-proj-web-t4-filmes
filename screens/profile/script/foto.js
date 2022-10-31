const openFotoEditor = document.querySelector('.edit-perfil-foto')
const popupFoto = document.querySelector('#popup-perfil-foto')
const inputFoto = document.querySelector('#perfil-foto-upload')
const divInputFoto = document.querySelector('.divFotoPreview')
const fotoBtnDialogCancel = document.querySelector('#btnFotoCancel')
const fotoBtnDialogOK = document.querySelector('#btnFotoOK')
const fotoPreview = document.querySelector('.fotoUploadPreview')
const perfilFoto = document.querySelector('#perfil-foto')
const navFoto = document.querySelector('#header')
const fotoForm = document.querySelector('#fotoForm')

var fotoPath;
userLogged = JSON.parse(localStorage.getItem('userLogged'))
userList = JSON.parse(localStorage.getItem('userList'))

setFotos()

function setFotos() {
    if (typeof userLogged[0].foto === 'undefined') {
        perfilFoto.src = "../../assets/imgs/profile-image.jpg"
    }
    else {
        perfilFoto.src = userLogged[0].foto;
        navFoto.setAttribute('user-image', userLogged[0].foto)
    }
}

function saveUserFoto() {
    userList.find(u => u.email == userLogged[0].email).foto = fotoPath

    userLogged[0].foto = fotoPath

    localStorage.setItem('userList', JSON.stringify(userList))
    localStorage.setItem('userLogged', JSON.stringify(userLogged))

    location.reload()
}

function fecharPopupFoto() {
    popupFoto.setAttribute('style', 'animation: hide 1s ease normal');
    setTimeout(() => {
        popupFoto.close()
        popupFoto.setAttribute('style', 'animation: show 1s ease normal');
    }, 700);

}

inputFoto.addEventListener('change', (e) => {
    divInputFoto.setAttribute('style', 'display:flex')
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
        const readerTarget = e.target;
        fotoPath = readerTarget.result;
        fotoPreview.src = readerTarget.result;
    });

    reader.readAsDataURL(file);
});

popupFoto.addEventListener('close', () => {
    inputFoto.value = '';
    inputFoto.src = '';
    divInputFoto.setAttribute('style', 'display:none')
});

openFotoEditor.addEventListener('click', () => {
    popupFoto.showModal()

})

fotoBtnDialogCancel.addEventListener('click', () => {
    fecharPopupFoto()
})

fotoBtnDialogOK.addEventListener('click', () => {
    if (inputFoto.value !== '') {
        fecharPopupFoto()
    }
    else {
        alert('Faça upload da imagem primeiro!')
    }
})

fotoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveUserFoto();
    setFotos()
})


