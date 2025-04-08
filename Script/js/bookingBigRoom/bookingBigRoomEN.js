function bookingEN() {
    let roomNumber = document.getElementById('selected-field-RoomNumberEN').value;
    let startDate = new Date(document.getElementById("startDate-fieldEN").value);
    let endDate = new Date(document.getElementById("endDate-fieldEN").value);

    if (isNaN(startDate) || isNaN(endDate)) {
        console.log("กรุณาเลือกวันที่ให้ครบ");
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

    let totalPrice = diffDays * 5000;

    console.log("ห้อง:", roomNumber, "| วันที่เริ่มต้น:", startDate, "| วันที่สิ้นสุด:", endDate, "| จำนวนวัน:", diffDays, "| ราคา:", totalPrice);
    document.getElementById("total-priceEN").innerText = totalPrice + " Bath";

    sessionStorage.setItem('roomNumber', roomNumber);
    sessionStorage.setItem('startDay', startDay);
    sessionStorage.setItem('startMonth', startMonth);
    sessionStorage.setItem('startYear', startYear);
    sessionStorage.setItem('endDay', endDay);
    sessionStorage.setItem('endMonth', endMonth);
    sessionStorage.setItem('endYear', endYear);
    sessionStorage.setItem('diffDays', diffDays);
    sessionStorage.setItem('totalPrice', totalPrice);
    sessionStorage.setItem('roomType', 'Big');
}

async function checkInputEN() {
    let roomNumber = document.getElementById('selected-field-RoomNumberEN').value;
    let checkInDate = new Date(document.getElementById("startDate-fieldEN").value);
    let checkOutDate = new Date(document.getElementById("endDate-fieldEN").value);
    if (isNaN(checkInDate) || isNaN(checkOutDate)) {
        alert("Please select time for check-in and check-out");
        return;
    } else if (sessionStorage.getItem('Login') === null) {
        alert("Please login!");
        return;
    }

    try {
        // 🔎 Step 1: ตรวจสอบว่าทับเวลากับการจองอื่นหรือไม่
        let response = await fetch("../../Script/php/checkcanbooking.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ roomNumber, checkInDate, checkOutDate })
        });

        let result = await response.json();
        console.log("📌 Server Response from checkcanbooking:", result);

        // ❌ ถ้าทับการจองเดิม ให้หยุดตรงนี้
        if (result.status !== "success") {
            if (result.status === "success") {
                if (sessionStorage.getItem('language') === 'TH') {
                    showDropdown("dropdown-box-Full");
                } else {
                    showDropdown("dropdown-box-FullEN");
                }
            } else {
                alert("❌ Error: " + result.message);
            }
            return;
        } else {
            window.location.href = "../../../php/purchise/purchise.php";
        }

    } catch (error) {
        console.error("❌ Error during booking process:", error);
        alert("เกิดข้อผิดพลาดขณะจอง กรุณาลองใหม่");
    }
}

function closeDropdownEN(dropdownID) {
    let dropdownBox = document.getElementById(dropdownID);
    dropdownBox.style.opacity = "0";
    dropdownBox.style.visibility = "hidden";
    setTimeout(() => {
        dropdownBox.style.display = "none";
    }, 500);
}

function showDropdownEN(dropdownId) {
    let dropdownBox = document.getElementById(dropdownId);
    if (dropdownBox.style.display === "none" || dropdownBox.style.display === "") {
        dropdownBox.style.display = "block";
        setTimeout(() => {
            dropdownBox.style.opacity = "1";
            dropdownBox.style.visibility = "visible";
        }, 10);
    }
}