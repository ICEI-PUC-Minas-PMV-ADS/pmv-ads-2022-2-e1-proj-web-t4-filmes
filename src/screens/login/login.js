// Página inicial de Login
const LOGIN_URL = "login.html";

const btnLogin = document.querySelector('#btnLogin')

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

// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser (login, senha) {
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
        window.location.href = '../home/index.html';
    }
    else {
        alert ('Usuário ou senha incorretos. \n Por favor, tente novamente.');
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