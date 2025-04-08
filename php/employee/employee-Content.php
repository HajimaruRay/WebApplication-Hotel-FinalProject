<div class="Content">
    <h1 class="header">รายการการจอง</h1>
    <table id="dataTable">
        <thead>
            <tr>
                <th>ประเภทห้อง</th>
                <th>เลขห้อง</th>
                <th>จำนวนวัน</th>
                <th>เช็คอิน</th>
                <th>เช็คเอ้าท์</th>
                <th>ชื่อผู้จอง</th>
                <th>ลบรายการจอง</th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
    </table>

    <form class="Booking-field">

        <label>ชื่อ:</label>
        <input class="text-field" id="name-field" type="text" onchange="booking()" placeholder="ชื่อ" required>

        <label>นามสกุล:</label>
        <input class="text-field" id="surname-field" type="text" onchange="booking()" placeholder="นามสกุล" required><br>

        <label>วันที่เช็คอิน:</label>
        <input class="text-field" id="startDate-field" type="date" onchange="booking()" required>

        <label>วันที่เช็คเอ้าท์:</label>
        <input class="text-field" id="endDate-field" type="date" onchange="booking()" required><br>
        <label>เลขห้อง:</label>
        <select class="text-field" id="selected-field-RoomNumber" onchange="booking()" required>
            <option value="" disabled selected>Room Number</option>
            <option value="200">200</option>
            <option value="201">201</option>
            <option value="202">202</option>
            <option value="203">203</option>
            <option value="204">204</option>
            <option value="205">205</option>
            <option value="300">300</option>
            <option value="301">301</option>
            <option value="302">302</option>
        </select><br>
        <button class="button" id="Booking" onclick="saveData()">จอง</button><br>
    </form>
</div>