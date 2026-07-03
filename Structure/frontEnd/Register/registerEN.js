document.getElementById("RegisterEN").addEventListener("click", function (event) {
    event.preventDefault(); // ป้องกันการ reload หน้าเว็บ

    let name = document.getElementById("name-fieldEN").value;
    let surname = document.getElementById("surname-fieldEN").value;
    let username = document.getElementById("username-fieldEN").value;
    let password = document.getElementById("password-fieldEN").value;
    console.log("RegisterEN");

    fetch("/Script/php/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password, name: name, surname: surname })
    })
        .then(response => {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            } else {
                throw new Error("Invalid JSON response");
            }
        })
        .then(data => {
            document.getElementById("alartMessageEN").innerText = data.message;
            fetch("/Script/php/loginCheck.php", {
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
                        sessionStorage.setItem('Name', data.Name);
                        sessionStorage.setItem('Surname', data.Surname);
                        window.location.href = "../../index.php";
                    } else {
                        document.getElementById("alartMessageEN").innerText = data.message;
                    }
                })
                .catch(error => console.error("Fetch Error:", error));
        })
});

function seethroughEN() {
    const passwordField = document.getElementById('password-fieldEN');

    console.log("get-Click");
    passwordField.type = (passwordField.type === 'password') ? 'text' : 'password';
}