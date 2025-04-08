<div class="Content">
    <a class="Text">ห้องสำหรับ 1-2 คน</a><br>
    <table>
        <tr>
            <td rowspan="2">
                <img class="FirstPhoto" src="/Image/รูปบรรยากาศ/SmallRoom/oneSmall.png">
            </td>
            <td>
                <img class="Photo" src="/Image/รูปบรรยากาศ/SmallRoom/twoSmall.png">
            </td>
            <td>
                <img class="Photo" src="/Image/รูปบรรยากาศ/SmallRoom/threeSmall.png">
            </td>
        </tr>
        <tr>
            <td>
                <img class="Photo" src="/Image/รูปบรรยากาศ/SmallRoom/fourSmall.png">
            </td>
            <td>
                <img class="Photo" src="/Image/รูปบรรยากาศ/SmallRoom/fiveSmall.png">
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <a style="font-size:35px">รายละเอียด</a><br>
                <a>&emsp;&emsp;เหมาะสำหรับไม่เกิน 2 ท่าน ราคาห้องละ 2,500 บาท/คืน</a><br>
                <a style="font-size:27px">สิ่งอำนวยความสะดวก</a><br>
                <ul>
                    <li>
                        WIFI
                    </li>
                    <li>
                        ไดรเป่าผม
                    </li>
                    <li>
                        อาหารเช้า
                    </li>
                    <li>
                        ตู้เย็น
                    </li>
                    <li>
                        ทีวี
                    </li>
                    <li>
                        ของเครื่องใช้ในชีวิตประจำวัน
                    </li>
                </ul>
            </td>
            <td>
                <div class="booking-section">
                    <a>จองห้อง</a><br>
                    <label>เลขห้อง:</label>
                    <select class="text-field" id="selected-field-RoomNumber" onchange="booking()" required>
                        <option value="" disabled selected>Room Number</option>
                        <option value="200">200</option>
                        <option value="201">201</option>
                        <option value="202">202</option>
                        <option value="203">203</option>
                        <option value="204">204</option>
                        <option value="205">205</option>
                    </select><br>
                    <label>เริ่ม:</label>
                    <input class="date-field" id="startDate-field" type="date" required><br> <!--2025-03-05-->
                    <label>สิ้นสุด:</label>
                    <input class="date-field" id="endDate-field" type="date" onchange="booking()" required><br> <!--2025-03-05-->
                    <label>รวม:</label>
                    <a id="total-price"></a><br><br>
                    <a class="button" onclick="checkInput()" style="text-decoration: none;">จอง</a>
                </div>
            </td>
        </tr>
    </table>

    <div class="dropdown-box-Full" id="dropdownBox-Full">
        <h2>ขออภัย</h2>
        <h2>ไม่มีห้องประเภทนี้เหลือให้เข้าอยู่ในขณะนี้</h2>
        <a class="button" onclick="closeDropdown('dropdownBox-Full')">กลับสู่หน้าหลัก</a>
    </div>
</div>