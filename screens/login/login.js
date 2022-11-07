// Página inicial de Login
const LOGIN_URL = "login.html";

const btnLogin = document.querySelector('#btnLogin')

const emailLogin = document.querySelector('#username')
let passEmailLogin = false;

const senhaLogin = document.querySelector('#password')
let passSenhaLogin = false;

const labelEmailLogin = document.querySelector('#labelEmailLogin')

const labelSenhaLogin = document.querySelector('#labelSenhaLogin')

// Carrega os dados iniciais
userList = JSON.parse(localStorage.getItem('userList') || '[]')

userLogged = [];
userLoggedIn = false;
localStorage.setItem('userLoggedIn', JSON.stringify(userLoggedIn))

// Se usuário está na tela de login, logo ele não pode estar logado
emptyUserLogged()
function emptyUserLogged() {
    userLogged = [];
    localStorage.setItem('userLogged', JSON.stringify(userLogged));
}

function validarEmail(email) {
    var regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
}

emailLogin.addEventListener('keyup', () => {
    if (!validarEmail(emailLogin.value)) {
        labelEmailLogin.setAttribute('style', 'color: red')
        labelEmailLogin.innerHTML = 'E-mail *Formato de E-mail inválido'
        emailLogin.setAttribute('style', 'border-color: red')
        passEmailLogin = false;
    }
    else {
        labelEmailLogin.setAttribute('style', 'color: green')
        labelEmailLogin.innerHTML = 'E-mail'
        emailLogin.setAttribute('style', 'border-color: green')
        passEmailLogin = true;
    }

    contEmail = 0;
})

senhaLogin.addEventListener('keyup', () => {
    if (senhaLogin.value.length < 4) {
        labelSenhaLogin.setAttribute('style', 'color: red')
        labelSenhaLogin.innerHTML = 'Senha *Insira no minimo 4 caracteres'
        senhaLogin.setAttribute('style', 'border-color: red')
        passSenhaLogin = false;
    }
    else {
        labelSenhaLogin.setAttribute('style', 'color: green')
        labelSenhaLogin.innerHTML = 'Senha'
        senhaLogin.setAttribute('style', 'border-color: green')
        passSenhaLogin = true;
    }
})


// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser (login, senha) {

    if(passEmailLogin && passSenhaLogin){
        // Verifica todos os itens do banco de dados de usuarios 
        // para localizar o usuário informado no formulario de login
        for (var i = 0; i < userList.length; i++) {
            var usuario = userList[i];
            
            // Se encontrou login, carrega usuário corrente e salva no Session Storage
            if (login == usuario.email && senha == usuario.senha) {
                userLoggedIn = true;
                localStorage.setItem('userLoggedIn', JSON.stringify(userLoggedIn))
                
                userLogged.push({
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    senha: usuario.senha,
                })

                // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
                localStorage.setItem('userLogged', JSON.stringify(userLogged));

                // Retorna true para usuário encontrado
                return true;
            }
            else {
                passError.setAttribute('style', 'display: block')
                passError.innerHTML = 'E-mail e/ou senha incorretos'
                passSuccess.setAttribute('style', 'display: none')
                assSuccess.innerHTML = ''
            }
        }
    }

    // Se chegou até aqui é por que não encontrou o usuário e retorna falso
    return false;
}

 //processar o formulário de login
 function processaFormLogin () {    

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Valida login
    const resultadoLogin = loginUser (username, password);
    if (resultadoLogin) {
        passSuccess.setAttribute('style', 'display: block')
        passSuccess.innerHTML = '<strong>Entrando...</strong>'
        passError.setAttribute('style', 'display: none')
        passError.innerHTML = ''

        setTimeout(() => {
            
            window.location.href = '../home/index.html';
        }, 1500);
        
    }
    else{
        passError.setAttribute('style', 'display: block')
        passError.innerHTML = 'Preencha os dados corretamente'
        passSuccess.setAttribute('style', 'display: none')
        passSuccess.innerHTML = ''
        return false;
    }
   
}

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser () {
    userLogged = {};
    sessionStorage.setItem ('userLogged', JSON.stringify (userLogged));
    window.location = LOGIN_URL;
}

//manipulador do evento submit
function setUserPass () {

}

btnLogin.addEventListener('click', processaFormLogin)