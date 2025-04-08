document.getElementById("Register").addEventListener("click", function (event) {
    event.preventDefault(); // ป้องกันการ reload หน้าเว็บ

    let name = document.getElementById("name-field").value;
    let surname = document.getElementById("surname-field").value;
    let username = document.getElementById("username-field").value;
    let password = document.getElementById("password-field").value;
    console.log("Register");

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
            document.getElementById("alartMessage").innerText = data.message;
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
                        document.getElementById("alartMessage").innerText = data.message;
                    }
                })
                .catch(error => console.error("Fetch Error:", error));
        })
});

function seethrough() {
    const passwordField = document.getElementById('password-field');

    console.log("get-Click");
    passwordField.type = (passwordField.type === 'password') ? 'text' : 'password';
}