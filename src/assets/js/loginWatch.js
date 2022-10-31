function verifyLogin() {
    if (typeof userLoggedIn == undefined || userLoggedIn == false) {
        userLoggedIn = false;
        window.location.href = "../../screens/login/login.html"
        return false;
    }
}

verifyLogin()