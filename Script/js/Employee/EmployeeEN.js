window.addEventListener("load", function () {
    console.log("employeeEN");

    fetch("../../../Script/php/employee.php", {
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

            const tableBody = document.querySelector("#dataTableEN tbody");
            tableBody.innerHTML = ""; // Clear old data

            if (data.length > 0) {
                data.forEach(row => {
                    const tr = document.createElement("tr");

                    let roomTypeText = row.TypeRoom;
                    roomTypeText = (row.TypeRoom === "Small") ? ("For 1-2 people") :
                        (row.TypeRoom === "Big") ? ("For 2-4 people") :
                            row.TypeRoom;

                    tr.innerHTML = `
                    <td>${roomTypeText}</td>
                    <td>${row.RoomNumber}</td>
                    <td>${row.Amount}</td>
                    <td>${row.CheckInDate}</td>
                    <td>${row.CheckOutDate}</td>
                    <td>${row.BookingName}</td>
                    <td><button class="deleteEN-btn" data-id="${row.id}">Delete</button></td>
                `;

                    tableBody.appendChild(tr);
                });

                // Add event listeners to delete buttons after rows are added
                addDeleteEventListenersEN();
            } else {
                tableBody.innerHTML = `<tr><td colspan='7'>${language === "TH" ? "ไม่มีประวัติการจอง" : "No booking history"}</td></tr>`;
            }
        })
        .catch(error => console.error("Fetch Error:", error));
});

// Function to add event listeners to delete buttons
async function addDeleteEventListenersEN() {
    document.querySelectorAll(".deleteEN-btn").forEach(button => {
        button.addEventListener("click", async function () {
            const id = this.dataset.id;  // ✅ Use 'id' because of data-id
            console.log("Clicked Delete Button for id:", id); // Debugging

            if (confirm("Are you sure you want to delete this booking?")) {
                deleteBookingEN(id, this);
            }
        });
    });
}

// Function to send delete request
async function deleteBookingEN(id, button) {

    console.log(id);
    fetch("../../../Script/php/DeleteBooking.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }) // Match PHP variable name
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                button.closest("tr").remove(); // Remove the row from the table
                alert("Booking deleted successfully!");
            } else {
                alert("Failed to delete booking.");
            }
        })
        .catch(error => console.error("Delete Error:", error));
}

function bookingEN() {
    let roomNumber = document.getElementById('selected-field-RoomNumberEN').value;
    let startDate = new Date(document.getElementById("startDate-fieldEN").value);
    let endDate = new Date(document.getElementById("endDate-fieldEN").value);

    if (isNaN(startDate) || isNaN(endDate) || isNaN(roomNumber)) {
        console.log("choose all data");
        return;
    }

    let startDay = startDate.getDate();
    let startMonth = startDate.getMonth() + 1;
    let startYear = startDate.getFullYear();

    let endDay = endDate.getDate();
    let endMonth = endDate.getMonth() + 1;
    let endYear = endDate.getFullYear();

    let timeDiff = endDate.getTime() - startDate.getTime();
    let diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    console.log("ห้อง:", roomNumber, "| วันที่เริ่มต้น:", startDate, "| วันที่สิ้นสุด:", endDate, "| จำนวนวัน:", diffDays);

    sessionStorage.setItem('roomNumber', roomNumber);
    sessionStorage.setItem('startDay', startDay);
    sessionStorage.setItem('startMonth', startMonth);
    sessionStorage.setItem('startYear', startYear);
    sessionStorage.setItem('endDay', endDay);
    sessionStorage.setItem('endMonth', endMonth);
    sessionStorage.setItem('endYear', endYear);
    sessionStorage.setItem('diffDays', diffDays);
    let roomType = (Math.floor(roomNumber / 100) === 2) ? 'Small' : 'Big';
    sessionStorage.setItem('roomType', roomType);
}

async function saveDataEN() {
    console.log("Saving Data...");

    let roomNumber = sessionStorage.getItem("roomNumber");
    let roomType = sessionStorage.getItem("roomType");
    let checkInDate = `${sessionStorage.getItem("startYear")}-${sessionStorage.getItem("startMonth")}-${sessionStorage.getItem("startDay")}`;
    let checkOutDate = `${sessionStorage.getItem("endYear")}-${sessionStorage.getItem("endMonth")}-${sessionStorage.getItem("endDay")}`;
    let bookingNameSurname = `${document.getElementById('name-fieldEN').value} ${document.getElementById('surname-fieldEN').value}`;
    let TypeRoom = sessionStorage.getItem("roomType");
    let Amount = sessionStorage.getItem("diffDays");

    try {
        // 🔎 Step 1: ตรวจสอบว่าทับเวลากับการจองอื่นหรือไม่
        let response = await fetch("../../../Script/php/checkcanbooking.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ roomNumber, checkInDate, checkOutDate })
        });

        let result = await response.json();
        console.log("📌 Server Response from checkcanbooking:", result);

        // ❌ ถ้าทับการจองเดิม ให้หยุดตรงนี้
        if (result.status !== "success") {
            alert(result.message || "Can't booking now");
            return;
        }

        try{
            // ✅ ถ้าไม่ทับ ค่อยจองเลย
            let bookingResponse = await fetch("../../Script/php/booking.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ roomNumber, checkInDate, checkOutDate, bookingNameSurname, TypeRoom, Amount })
            });
            console.log("2")
            let bookingResult = await bookingResponse.json();
            console.log("📌 Server Response from booking.php:", bookingResult);
    
            if (bookingResult.status === "success") {
                alert("Booking successful!");
            } else {
                alert("Booking fail: " + bookingResult.message);
            }
        } catch (error){
            console.error("❌ Error during booking process:", error);
        }

    } catch (error) {
        console.error("❌ Error during booking process:", error);
        alert("Error please booking again!");
    }
}