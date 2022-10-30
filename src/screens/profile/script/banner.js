const openBannerEditor = document.querySelector('.edit-banner')
const popupBanner = document.querySelector('#popup-perfil-Banner')
const inputBanner = document.querySelector('#perfil-Banner-upload')
const divInputBanner = document.querySelector('.divBannerPreview')
const BannerBtnDialogCancel = document.querySelector('#btnBannerCancel')
const BannerBtnDialogOK = document.querySelector('#btnBannerOK')
const BannerPreview = document.querySelector('.BannerUploadPreview')
const perfilBanner = document.querySelector('#perfil-Banner')
const navBanner = document.querySelector('#perfil-nav-Banner')
const BannerForm = document.querySelector('#BannerForm')

var bannerPath;
userLogged = JSON.parse(localStorage.getItem('userLogged'))
userList = JSON.parse(localStorage.getItem('userList'))

setBanners()

function setBanners() {
    if (typeof userLogged[0].banner === 'undefined') {
        perfilBanner.src = "https://s2.glbimg.com/XFA41c4664k4-uMaAguIj6GApq4=/e.glbimg.com/og/ed/f/original/2020/12/09/denise-jans-oavjqz-nfd0-unsplash.jpg"
    }
    else {
        perfilBanner.src = userLogged[0].banner;
    }
}

function saveUserBanner() {
    userList.find(u => u.email == userLogged[0].email).banner = bannerPath

    userLogged[0].banner = bannerPath

    localStorage.setItem('userList', JSON.stringify(userList))
    localStorage.setItem('userLogged', JSON.stringify(userLogged))

    //location.reload()
}

function fecharPopupBanner() {
    popupBanner.setAttribute('style', 'animation: hide 1s ease normal');
    setTimeout(() => {
        popupBanner.close()
        popupBanner.setAttribute('style', 'animation: show 1s ease normal');
    }, 700);

}

inputBanner.addEventListener('change', (e) => {
    divInputBanner.setAttribute('style', 'display:flex')

    const inputTarget = e.target;
    const file = inputTarget.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
        const readerTarget = e.target;
        bannerPath = readerTarget.result;
        BannerPreview.src = readerTarget.result;
    });

    reader.readAsDataURL(file);
});

popupBanner.addEventListener('close', () => {
    inputBanner.value = '';
    inputBanner.src = '';
    divInputBanner.setAttribute('style', 'display:none')
});

openBannerEditor.addEventListener('click', () => {
    popupBanner.showModal()
})

BannerBtnDialogCancel.addEventListener('click', () => {
    fecharPopupBanner()
})

BannerBtnDialogOK.addEventListener('click', () => {
    if (inputBanner.value !== '') {
        fecharPopupBanner()
    }
    else {
        alert('Faça upload da imagem primeiro!')
    }
})

BannerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveUserBanner();
    setBanners()
})


