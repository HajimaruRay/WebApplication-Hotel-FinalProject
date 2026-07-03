document.getElementById("Login").addEventListener("click", function (event) {
    event.preventDefault();
    let username = document.getElementById("username-field").value;
    let password = document.getElementById("password-field").value;
    console.log("Login");

    fetch("../../Script/php/loginCheck.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(response => {

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.text();
        })
        .then(text => {
            console.log("Raw Response:", text);
            return JSON.parse(text.trim());
        })
        .then(data => {
            console.log("Parsed JSON:", data);
            if (data.status === "success") {
                sessionStorage.setItem('Login', username);
                sessionStorage.setItem('Name', data.data.Name);
                sessionStorage.setItem('Surname', data.data.Surname);
                sessionStorage.setItem('Rule',data.data.Rule);
                if (data.data.Rule === 'user'){
                    window.location.href = "../../index.php";
                } else {
                    window.location.href = "../../../php/employee/employee.php";
                }
            } else {
                document.getElementById("alartMessage").innerText = data.message;
            }
        })
        .catch(error => console.error("Fetch Error:", error));

});

function seethrough() {
    const passwordField = document.getElementById('password-field');

    console.log("get-Click");
    passwordField.type = (passwordField.type === 'password') ? 'text' : 'password';
}

window.addEventListener('load', function () {
    if (sessionStorage.getItem('language') === 'TH') {
        if (sessionStorage.getItem('Login') != null) {
            this.alert("คุณอยู่ในระบบเเล้ว");
            window.location.href = "index.php";
        } else {
            console.log("ยังไม่ล็อกอิน");
        }
    } else {
        if (sessionStorage.getItem('Login') != null) {
            this.alert("You're already login");
            window.location.href = "index.php";
        } else {
            console.log("not login");
        }
    }
});


