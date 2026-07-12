window.addEventListener('load', function () {
    console.log('history');

    let BookingName = `${sessionStorage.getItem("Name")} ${sessionStorage.getItem("Surname")}`;
    let language = sessionStorage.getItem('language'); // ดึงค่าภาษาเพียงครั้งเดียว

    fetch("http://localhost:3000/v2.0/booking-history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingName: BookingName })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(resdata => {
            const data = resdata.data; // ดึงข้อมูลจาก response
            if (language === 'TH') {
                const tableBody = document.querySelector("#dataTable tbody");
                tableBody.innerHTML = "";

                if (data.length > 0) {
                    data.forEach(row => {
                        const tr = document.createElement("tr");
                        let roomTypeText = row.TypeRoom; // ค่าเริ่มต้น

                        roomTypeText = (row.TypeRoom === 'Small') ? 'ห้องสำหรับ 1-2 คน' :
                            (row.TypeRoom === 'Big') ? 'ห้องสำหรับ 2-4 คน' : row.TypeRoom;

                        tr.innerHTML = `
                        <td>${roomTypeText}</td>
                        <td>${row.Amount}</td>
                        <td>${row.CheckInDate}</td>
                        <td>${row.CheckOutDate}</td>
                    `;
                        tableBody.appendChild(tr);
                    });
                } else {
                    tableBody.innerHTML = "<tr><td colspan='4'>ไม่มีประวัติการจอง</td></tr>";
                }
            } else {
                const tableBody = document.querySelector("#dataTableEN tbody");
                tableBody.innerHTML = ""; // ล้างข้อมูลเดิมก่อนแสดงใหม่

                if (data.length > 0) {
                    data.forEach(row => {
                        const tr = document.createElement("tr");
                        let roomTypeText = row.TypeRoom; // ค่าเริ่มต้น

                        roomTypeText = (row.TypeRoom === 'Small') ? 'For 1-2 people' :
                            (row.TypeRoom === 'Big') ? 'For 2-4 people' : row.TypeRoom;

                        tr.innerHTML = `
                        <td>${roomTypeText}</td>
                        <td>${row.Amount}</td>
                        <td>${row.CheckInDate}</td>
                        <td>${row.CheckOutDate}</td>
                    `;
                        tableBody.appendChild(tr);
                    });
                } else {
                    tableBody.innerHTML = "<tr><td colspan='4'>No booking history</td></tr>";
                }
            }
        })
        .catch(error => console.error("Fetch Error:", error));
});
