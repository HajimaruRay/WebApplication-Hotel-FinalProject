<div class="Content">
    <div class="Purchise-Text">
        <a>ชำระเงิน</a>
    </div>
    <div class="MainText">
        <a id="roomType-Text"></a><br>
        <a id="booking-Date"></a><br>
        <a id="calculatePrice"></a><br>
        <img src="/Image/QRCode.png"><br>
        <a id="totalPrice"></a><br>
        <a class="button" onclick="callBack()">ยกเลิก</a>
        <a class="button" onclick="Confirm()">ยืนยัน</a>
    </div>
    <div class="dropdown-box" id="dropdownBox">
        <h2>ทำรายการเสร็จสิ้น</h2>
        <h2>ขอบคุณที่ใช้บริการ</h2>
        <a class="button" onclick="closeDropdown('dropdownBox')">กลับสู่หน้าหลัก</a>
    </div>

    <div class="dropdown-box-Full" id="dropdownBox-Full">
        <h2>ขออภัย</h2>
        <h2>ไม่มีห้องประเภทนี้เหลือให้เข้าอยู่ในขณะนี้</h2>
        <a class="button" onclick="closeDropdown('dropdownBox-Full')">กลับสู่หน้าหลัก</a>
    </div>
</div>