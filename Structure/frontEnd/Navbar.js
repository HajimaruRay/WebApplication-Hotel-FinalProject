function logout(){
    sessionStorage.removeItem('Login');
    sessionStorage.removeItem('Rule');
    console.log('logout');
    if (sessionStorage.getItem('Login') != null) {
        document.getElementById("UnLogin_image").style.display = "none"
        document.getElementById("Login_image").style.display = "flex"
        document.getElementById("Logout_image").style.display = "flex"
        document.getElementById("User-Icon-Text").innerText = sessionStorage.getItem('Login');
    } else{
        document.getElementById("UnLogin_image").style.display = "flex"
        document.getElementById("Login_image").style.display = "none"
        document.getElementById("Logout_image").style.display = "none"
        document.getElementById("User-Icon-Text").innerText = sessionStorage.getItem('Login');
    }

    if (window.location.pathname.endsWith('/php/bookingHistory.php') || window.location.pathname.endsWith('/php/employee.php')) {
        window.location.href = '../../../index.php';
    }
    
}

function logoutEN(){
    sessionStorage.removeItem('Login');
    console.log('logout');
    if (sessionStorage.getItem('Login') != null) {
        document.getElementById("UnLogin_imageEN").style.display = "none"
        document.getElementById("Login_imageEN").style.display = "flex"
        document.getElementById("Logout_imageEN").style.display = "flex"
        document.getElementById("User-Icon-TextEN").innerText = sessionStorage.getItem('Login');
    } else{
        document.getElementById("UnLogin_imageEN").style.display = "flex"
        document.getElementById("Login_imageEN").style.display = "none"
        document.getElementById("Logout_imageEN").style.display = "none"
        document.getElementById("User-Icon-TextEN").innerText = sessionStorage.getItem('Login');
    }
}

function ChangeLanguage(){
    if (sessionStorage.getItem('language') != "TH"){
        sessionStorage.setItem('language','TH');
        document.getElementsByClassName("Content")[0].style.display = "block"
        document.getElementsByClassName("ContentEN")[0].style.display = "none"
        document.getElementsByClassName("Navbar")[0].style.display = "flex"
        document.getElementsByClassName("NavbarEN")[0].style.display = "none"
        document.getElementsByClassName("Contract")[0].style.display = "block"
        document.getElementsByClassName("ContractEN")[0].style.display = "none"
        document.getElementsByClassName("language-Text")[0].innerText = sessionStorage.getItem('language');
        
        if (sessionStorage.getItem('Login') != null) {
            document.getElementById("UnLogin_image").style.display = "none"
            document.getElementById("Login_image").style.display = "flex"
            document.getElementById("Logout_image").style.display = "flex"
            document.getElementById("User-Icon-Text").innerText = sessionStorage.getItem('Login');
        } else{
            document.getElementById("UnLogin_image").style.display = "flex"
            document.getElementById("Login_image").style.display = "none"
            document.getElementById("Logout_image").style.display = "none"
            document.getElementById("User-Icon-Text").innerText = sessionStorage.getItem('Login');
        }

    } else{
        sessionStorage.setItem('language','EN');
        document.getElementsByClassName("Content")[0].style.display = "none"
        document.getElementsByClassName("ContentEN")[0].style.display = "block"
        document.getElementsByClassName("Navbar")[0].style.display = "none"
        document.getElementsByClassName("NavbarEN")[0].style.display = "flex"
        document.getElementsByClassName("Contract")[0].style.display = "none"
        document.getElementsByClassName("ContractEN")[0].style.display = "block"
        document.getElementsByClassName("language-TextEN")[0].innerText = sessionStorage.getItem('language');

        if (sessionStorage.getItem('Login') != null) {
            document.getElementById("UnLogin_imageEN").style.display = "none"
            document.getElementById("Login_imageEN").style.display = "flex"
            document.getElementById("Logout_imageEN").style.display = "flex"
            document.getElementById("User-Icon-TextEN").innerText = sessionStorage.getItem('Login');
        } else{
            document.getElementById("UnLogin_imageEN").style.display = "flex"
            document.getElementById("Login_imageEN").style.display = "none"
            document.getElementById("Logout_imageEN").style.display = "none"
            document.getElementById("User-Icon-TextEN").innerText = sessionStorage.getItem('Login');
        }
    }

    window.location.reload();
}

window.addEventListener('load', function() {

    if (sessionStorage.getItem('language') == null){
        sessionStorage.setItem('language','TH');
        console.log('set laguage!')
    }

    if (sessionStorage.getItem('language') == "TH"){
        document.getElementsByClassName("Content")[0].style.display = "block"
        document.getElementsByClassName("ContentEN")[0].style.display = "none"
        document.getElementsByClassName("Navbar")[0].style.display = "flex"
        document.getElementsByClassName("NavbarEN")[0].style.display = "none"
        document.getElementsByClassName("Contract")[0].style.display = "block"
        document.getElementsByClassName("ContractEN")[0].style.display = "none"
        document.getElementsByClassName("language-Text")[0].innerText = sessionStorage.getItem('language');

        if (sessionStorage.getItem('Login') != null) {
            document.getElementById("UnLogin_image").style.display = "none"
            document.getElementById("Login_image").style.display = "flex"
            document.getElementById("Logout_image").style.display = "flex"
            document.getElementById("User-Icon-Text").innerText = sessionStorage.getItem('Login');
        } else{
            document.getElementById("UnLogin_image").style.display = "flex"
            document.getElementById("Login_image").style.display = "none"
            document.getElementById("Logout_image").style.display = "none"
            document.getElementById("User-Icon-Text").innerText = sessionStorage.getItem('Login');
        }

    } else{
        document.getElementsByClassName("Content")[0].style.display = "none"
        document.getElementsByClassName("ContentEN")[0].style.display = "block"
        document.getElementsByClassName("Navbar")[0].style.display = "none"
        document.getElementsByClassName("NavbarEN")[0].style.display = "flex"
        document.getElementsByClassName("Contract")[0].style.display = "none"
        document.getElementsByClassName("ContractEN")[0].style.display = "block"
        document.getElementsByClassName("language-TextEN")[0].innerText = sessionStorage.getItem('language');

        if (sessionStorage.getItem('Login') != null) {
            document.getElementById("UnLogin_imageEN").style.display = "none"
            document.getElementById("Login_imageEN").style.display = "flex"
            document.getElementById("Logout_imageEN").style.display = "flex"
            document.getElementById("User-Icon-TextEN").innerText = sessionStorage.getItem('Login');
        } else{
            document.getElementById("UnLogin_imageEN").style.display = "flex"
            document.getElementById("Login_imageEN").style.display = "none"
            document.getElementById("Logout_imageEN").style.display = "none"
            document.getElementById("User-Icon-TextEN").innerText = sessionStorage.getItem('Login');
        }
    }
});


document.addEventListener("contextmenu", function(event) {
    if (!sessionStorage.getItem('isLogin')) {
        event.preventDefault();
        alert("Right-click is disabled.");
    }
});

// document.addEventListener("keydown", function(event) {
//     if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I") || (event.ctrlKey && event.key === "U") || (event.ctrlKey && event.shiftKey && event.key === 'C') || (event.ctrlKey && event.shiftKey && event.key === "U")) {
//         event.preventDefault();
//         alert("Inspect element is disabled.");
//     }
// });