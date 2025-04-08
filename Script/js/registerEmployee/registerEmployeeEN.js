document.getElementById("RegisterEN").addEventListener("click", function (event) {
    event.preventDefault(); // ป้องกันการ reload หน้าเว็บ

    let name = document.getElementById("name-fieldEN").value;
    let surname = document.getElementById("surname-fieldEN").value;
    let username = document.getElementById("username-fieldEN").value;
    let password = document.getElementById("password-fieldEN").value;
    console.log("RegisterEmployerEN");

    fetch("../../../Script/php/registerEmployer.php", {
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

    location.reload();
});

function seethroughEN() {
    const passwordField = document.getElementById('password-fieldEN');

    console.log("get-Click");
    passwordField.type = (passwordField.type === 'password') ? 'text' : 'password';
}

window.addEventListener("load", function () {
    console.log("employeeEN");

    fetch("../../Script/php/rolecheck.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("📌 Data received:", data);
            let language = sessionStorage.getItem('language');

            const tableBody = document.querySelector(language === 'TH' ? "#dataTable tbody" : "#dataTableEN tbody");
            tableBody.innerHTML = ""; // Clear old data

            if (data.length > 0) {
                data.forEach(row => {
                    const tr = document.createElement("tr");

                    let roomTypeText = row.TypeRoom;

                    tr.innerHTML = `
                    <td>${row.Name}</td>
                    <td>${row.Surname}</td>
                    <td><button class="changeRule-btn" data-id="${row.Name}">${language === "TH" ? "เเก้ไขบทบาท" : "Change role"}</button></td>
                `;

                    tableBody.appendChild(tr);
                });

                //Add event listeners to delete buttons after rows are added
                addDeleteEventListeners();
            } else {
                tableBody.innerHTML = `<tr><td colspan='3'>${language === "TH" ? "ไม่มีพนักงาน" : "Don't have any stuff ID"}</td></tr>`;
            }
        })
        .catch(error => console.error("Fetch Error:", error));
});

async function addDeleteEventListeners() {
    document.querySelectorAll(".changeRule-btn").forEach(button => {
        button.addEventListener("click", async function () {
            const Name = this.dataset.id;  // ✅ Use 'id' because of data-id
            console.log("Clicked Change role Button for Name:", Name); // Debugging

            if (confirm("Are you sure you want to change this rule?")) {
                changeRule(Name, this);
            }
        });
    });
}

function changeRule(Name, button) {
    fetch("../../Script/php/changeRule.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Name: Name }) // Match PHP variable name
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                button.closest("tr").remove(); // Remove the row from the table
                alert("This rule is changed!");
            } else {
                alert("Failed to change rule, Please contact the support!");
            }
        })
        .catch(error => console.error("Delete Error:", error));
}