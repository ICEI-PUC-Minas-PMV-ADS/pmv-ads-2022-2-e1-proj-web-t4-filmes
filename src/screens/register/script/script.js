const olhoSenha = document.querySelector('#eyeSenha')
const olhoSenhaConfirm = document.querySelector('#eyeConfirmSenha')

const nome = document.querySelector('#nome')
const labelNome = document.querySelector('#labelNome')
let passNome = false;

const email = document.querySelector('#email')
const labelEmail = document.querySelector('#labelEmail')
let passEmail = false;

const senha = document.querySelector('#senha')
const labelSenha = document.querySelector('#labelSenha')
let passSenha = false;

const confirmSenha = document.querySelector('#confirmSenha')
const labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let passConfirmSenha = false;

const btnCadastrar = document.querySelector('#btnCadastrar')

let contEmail = 0;

let passError = document.querySelector('#passError')
let passSuccess = document.querySelector('#passSuccess')

userLogged = [];

userList = JSON.parse(localStorage.getItem('userList') || '[]')

// Gera Id único de Usuário por Timecode
function generateUUID() {
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}



nome.addEventListener('keyup', () => {
    if (nome.value.length < 3) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        passNome = false;
    }
    else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        passNome = true;
    }
})

function validarEmail(email) {
    var regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
}

email.addEventListener('keyup', () => {
    if (!validarEmail(email.value)) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'E-mail *Formato de E-mail inválido'
        email.setAttribute('style', 'border-color: red')
        passEmail = false;
    }
    else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-mail'
        email.setAttribute('style', 'border-color: green')
        passEmail = true;
    }

    contEmail = 0;
})

senha.addEventListener('keyup', () => {
    if (senha.value.length < 4) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 4 caracteres'
        senha.setAttribute('style', 'border-color: red')
        passSenha = false;
    }
    else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        passSenha = true;
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (confirmSenha.value != senha.value) {
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar senha *As senhas não coincidem'
        confirmSenha.setAttribute('style', 'border-color: red')
        passConfirmSenha = false;
    }
    else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        passConfirmSenha = true;
    }
})

function preventCopy() {
        if(userList){
        for (let i = 0; i < userList.length; i++) {
            if (email.value == userList[i].email) {
                return true;
            }
        }
    }
    else{return false;}
}

function cadastrar() {
        if (!preventCopy()) {

            if (passNome && passEmail && passSenha && passConfirmSenha) {
                
                userList.push(
                    {
                        id: generateUUID(),
                        nome: nome.value,
                        email: email.value,
                        senha: senha.value
                    }
                )

                localStorage.setItem('userList', JSON.stringify(userList))

                passSuccess.setAttribute('style', 'display: block')
                passSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
                passError.setAttribute('style', 'display: none')
                passError.innerHTML = ''

                setTimeout(() => {
                    
                    window.location.pathname = "../../src/screens/login/login.html";
                }, 2000);
            }
            else {
                passError.setAttribute('style', 'display: block')
                passError.innerHTML = 'Preencha os dados corretamente'
                passSuccess.setAttribute('style', 'display: none')
                passSuccess.innerHTML = ''
            }
        }
        else {
            passError.setAttribute('style', 'display: block')
            passError.innerHTML = 'Usuário já existente'
            passSuccess.setAttribute('style', 'display: none')
            passSuccess.innerHTML = ''
        }
    }

olhoSenha.addEventListener('click', () => {
    const inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
        olhoSenha.setAttribute('class', 'fa fa-eye-slash')
    }
    else {
        inputSenha.setAttribute('type', 'password')
        olhoSenha.setAttribute('class', 'fa fa-eye')
    }
})

olhoSenhaConfirm.addEventListener('click', () => {
    const inputConfirmSenha = document.querySelector('#confirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
        olhoSenhaConfirm.setAttribute('class', 'fa fa-eye-slash')
    }
    else {
        inputConfirmSenha.setAttribute('type', 'password')
        olhoSenhaConfirm.setAttribute('class', 'fa fa-eye')
    }
})

btnCadastrar.addEventListener('click', cadastrar)