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

let contEmail = 0;

let passError = document.querySelector('#passError')
let passSuccess = document.querySelector('#passSuccess')

let userLogged = [];

let userList = JSON.parse(localStorage.getItem('userList') || '[]')

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 3){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres' 
        nome.setAttribute('style', 'border-color: red')
        passNome = false;
    }
    else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome' 
        nome.setAttribute('style', 'border-color: green')
        passNome = true;
    }
})

email.addEventListener('focusout', ()=>{
    for(c of email.value){
        if(c == '@' || c == '.'){
            contEmail++;
        }
    }
    
    if(contEmail < 2){
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'E-mail *Formato de E-mail inválido' 
        email.setAttribute('style', 'border-color: red')
        passEmail = false;
    }
    else{
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-mail' 
        email.setAttribute('style', 'border-color: green')
        passEmail = true;
    }

    contEmail = 0;
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length < 4){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 4 caracteres' 
        senha.setAttribute('style', 'border-color: red')
        passSenha = false;
    }
    else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha' 
        senha.setAttribute('style', 'border-color: green')
        passSenha = true;
    }
})

confirmSenha.addEventListener('keyup', ()=>{
    if(confirmSenha.value != senha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar senha *As senhas não coincidem' 
        confirmSenha.setAttribute('style', 'border-color: red')
        passConfirmSenha = false;
    }
    else{
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar senha' 
        confirmSenha.setAttribute('style', 'border-color: green')
        passConfirmSenha = true;
    }
})

function preventCopy(){
    for(let i = 0; i < userList.length; i++){
        if(email.value == userList[i].email){
            return true;
        }
    }
}

function cadastrar(){
    if(!preventCopy()){
    
    if(passNome && passEmail && passSenha && passConfirmSenha){
        userList.push(
            {
                nome: nome.value,
                email: email.value,
                senha: senha.value
            }
        )

        localStorage.setItem('userList', JSON.stringify(userList))
        
        passSuccess.setAttribute('style','display: block')
        passSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        passError.setAttribute('style','display: none')
        passError.innerHTML = '' 
        // GAMBIARRA
        userLogged.push({
                nome: nome.value,
                email: email.value,
                senha: senha.value,
            })

        localStorage.setItem('userLogged', JSON.stringify(userLogged))
        // GAMBIARRA

        setTimeout(() => {
            window.location.pathname = '../PERFIL/index.html';
        }, 2000);
    }
    else{
        passError.setAttribute('style','display: block')
        passError.innerHTML = 'Preencha os dados corretamente'
        passSuccess.setAttribute('style','display: none')
        passSuccess.innerHTML = ''  
    }
}
else{
    passError.setAttribute('style','display: block')
    passError.innerHTML = 'Usuário já existente'
    passSuccess.setAttribute('style','display: none')
    passSuccess.innerHTML = '' 
}
}

olhoSenha.addEventListener('click', ()=>{
    const inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password')
    {
    inputSenha.setAttribute('type', 'text')
    olhoSenha.setAttribute('class', 'fa fa-eye-slash')}
    else{
        inputSenha.setAttribute('type', 'password')
        olhoSenha.setAttribute('class', 'fa fa-eye')
    }
})

olhoSenhaConfirm.addEventListener('click', ()=>{
    const inputConfirmSenha = document.querySelector('#confirmSenha')

    if(inputConfirmSenha.getAttribute('type') == 'password')
    {
        inputConfirmSenha.setAttribute('type', 'text')
        olhoSenhaConfirm.setAttribute('class', 'fa fa-eye-slash')
    }
    else{
        inputConfirmSenha.setAttribute('type', 'password')
        olhoSenhaConfirm.setAttribute('class', 'fa fa-eye')
    }
})
