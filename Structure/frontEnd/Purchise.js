window.addEventListener("load", function () {
    console.log(sessionStorage.getItem("roomType"));

    const months = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    const monthsEN = [
        "January", "Fabuary", "March", "Apirl", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const startMonthName = months[sessionStorage.getItem("startMonth") - 1];
    const endMonthName = months[sessionStorage.getItem("endMonth") - 1];

    const startMonthNameEN = monthsEN[sessionStorage.getItem("startMonth") - 1];
    const endMonthNameEN = monthsEN[sessionStorage.getItem("endMonth") - 1];

    let roomType = sessionStorage.getItem("roomType");
    let startYear = sessionStorage.getItem("startYear");
    let endYear = sessionStorage.getItem("endYear");
    let startDay = sessionStorage.getItem("startDay");
    let endDay = sessionStorage.getItem("endDay");
    if (sessionStorage.getItem('language') === 'TH') {

        document.getElementById("roomType-Text").innerText = roomType === "Small" ? "ห้องสำหรับ 1-2 คน" : "ห้องสำหรับ 3-4 คน";

        let bookingDateText =
            startYear === endYear
                ? `วันที่ ${startDay} ${startMonthName} - ${endDay} ${endMonthName}`
                : `วันที่ ${startDay} ${startMonthName} ${startYear} - ${endDay} ${endMonthName} ${endYear}`;

        document.getElementById("booking-Date").innerText = bookingDateText;

        let roomPrice = roomType === "Small" ? 2500 : 5000;
        let diffDays = formatNumber(sessionStorage.getItem("diffDays"));
        document.getElementById("calculatePrice").innerText = `${roomPrice} x ${diffDays} คืน`;
        document.getElementById("totalPrice").innerText = `ยอดรวม ${formatNumber(sessionStorage.getItem("totalPrice"))} บาท`;
    } else {

        document.getElementById("roomType-TextEN").innerText = roomType === "Small" ? "For 1-2 people" : "For 3-4 people";

        let bookingDateText =
            startYear === endYear
                ? `Date ${startDay} ${startMonthNameEN} - ${endDay} ${endMonthNameEN}`
                : `Date ${startDay} ${startMonthNameEN} ${startYear} - ${endDay} ${endMonthNameEN} ${endYear}`;

        document.getElementById("booking-DateEN").innerText = bookingDateText;

        let roomPrice = roomType === "Small" ? 2500 : 5000;
        let diffDays = formatNumber(sessionStorage.getItem("diffDays"));
        document.getElementById("calculatePriceEN").innerText = `${roomPrice} x ${diffDays} Night`;
        document.getElementById("totalPriceEN").innerText = `Total ${formatNumber(sessionStorage.getItem("totalPrice"))} Bath`;
    }
});

function formatNumber(number) {
    if (isNaN(number)) {
        console.log("Invalid Number");
        return;
    }
    return Number(number).toLocaleString("en-US");
}

function callBack() {
    window.location.href = sessionStorage.getItem("roomType") === "Small" ? "../php/smallRoom.php" : "../php/bigRoom.php";
}

function Confirm() {
    saveData();
}

function closeDropdown(dropdownID) {
    let dropdownBox = document.getElementById(dropdownID);
    dropdownBox.style.opacity = "0";
    dropdownBox.style.visibility = "hidden";
    setTimeout(() => {
        dropdownBox.style.display = "none";
    }, 500);
    window.location.href = "../../index.php"
}

async function saveData() {
    console.log("Saving Data...");

    let roomNumber = sessionStorage.getItem("roomNumber");
    let roomType = sessionStorage.getItem("roomType");
    let checkInDate = `${sessionStorage.getItem("startYear")}-${sessionStorage.getItem("startMonth")}-${sessionStorage.getItem("startDay")}`;
    let checkOutDate = `${sessionStorage.getItem("endYear")}-${sessionStorage.getItem("endMonth")}-${sessionStorage.getItem("endDay")}`;
    let bookingNameSurname;

    if (location.href.includes("../../../php/employee/employee.php")) {
        bookingNameSurname = `${document.getElementById('name-field').value} ${document.getElementById('surname-field').value}`;
    } else {
        bookingNameSurname = `${sessionStorage.getItem("Name")} ${sessionStorage.getItem("Surname")}`;
    }
    let TypeRoom = sessionStorage.getItem("roomType");
    let Amount = sessionStorage.getItem("diffDays");

    try {
        // 🔎 Step 1: ตรวจสอบว่าทับเวลากับการจองอื่นหรือไม่
        let response = await fetch("../../Structure/backEnd/checkcanbooking.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ roomNumber, checkInDate, checkOutDate })
        });

        let result = await response.json();
        console.log("📌 Server Response from checkcanbooking:", result);

        // ❌ ถ้าทับการจองเดิม ให้หยุดตรงนี้
        if (result.status !== "success") {
            alert(result.message || "ไม่สามารถจองห้องนี้ได้ในช่วงเวลานี้");
            return;
        }

        // ✅ ถ้าไม่ทับ ค่อยจองเลย
        let bookingResponse = await fetch("http://localhost:3000/v2.0/booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ roomNumber, checkInDate, checkOutDate, bookingNameSurname, TypeRoom, Amount })
        });

        let bookingResult = await bookingResponse.json();
        console.log("📌 Server Response from booking.php:", bookingResult);

        if (result.status === "success") {
            if (sessionStorage.getItem('language') === 'TH') {
                showDropdown("dropdownBox");
            } else {
                showDropdown("dropdownBoxEN");
            }
        } else {
            alert("❌ Error: " + result.message);
        }

    } catch (error) {
        console.error("❌ Error during booking process:", error);
        alert("เกิดข้อผิดพลาดขณะจอง กรุณาลองใหม่");
    }
}

function showDropdown(dropdownId) {
    let dropdownBox = document.getElementById(dropdownId);
    if (dropdownBox.style.display === "none" || dropdownBox.style.display === "") {
        dropdownBox.style.display = "block";
        setTimeout(() => {
            dropdownBox.style.opacity = "1";
            dropdownBox.style.visibility = "visible";
        }, 10);
    }
}


function callBackEN() {
    window.location.href = sessionStorage.getItem("roomType") === "Small" ? "../php/smallRoom.php" : "../php/bigRoom.php";
}

function ConfirmEN() {
    saveData();
}

function closeDropdownEN(dropdownID) {
    let dropdownBox = document.getElementById(dropdownID);
    dropdownBox.style.opacity = "0";
    dropdownBox.style.visibility = "hidden";
    setTimeout(() => {
        dropdownBox.style.display = "none";
    }, 500);
}