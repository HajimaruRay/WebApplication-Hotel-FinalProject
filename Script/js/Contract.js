window.addEventListener('load', function(){
    if (sessionStorage.getItem('Rule') === 'admin' && sessionStorage.getItem('language') === 'TH'){
        document.getElementById('EmployerMenu').style.display = 'block'
    } else if (sessionStorage.getItem('Rule') === 'admin' && sessionStorage.getItem('language') === 'EN'){
        document.getElementById('EmployerMenuEN').style.display = 'block'
    } else if (sessionStorage.getItem('Rule') === 'user' || sessionStorage.getItem('Login') === null){
        document.getElementById('EmployerMenu').style.display = 'none'
        document.getElementById('EmployerMenuEN').style.display = 'none'
    }
})