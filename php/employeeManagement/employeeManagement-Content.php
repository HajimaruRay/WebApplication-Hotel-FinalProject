<div class="Content">
    <h1 class="header">รายการลงทะเบียน</h1>
    <table id="dataTable">
        <thead>
            <tr>
                <th>ชื่อ</th>
                <th>นามสกุล</th>
                <th>เปลี่ยนบทบาท</th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
    </table>
    <form class="Login-field">
        <label>ชื่อ:</label>
        <input class="text-field" id="name-field" type="text" placeholder="ชื่อ" required>

        <label>นามสกุล:</label>
        <input class="text-field" id="surname-field" type="text" placeholder="นามสกุล" required><br>

        <label>ชื่อผู้ใช้:</label>
        <input class="text-field" id="username-field" type="text" placeholder="User Name" required><br>

        <label>รหัสผ่าน:</label>
        <input class="text-field" id="password-field" type="password" placeholder="Password" required>
        <button class="button-seethrough" type="button" onclick="seethrough()">👁️</button><br>
        <button class="button" id="Register">ลงทะเบียน</button><br>
        <div id="alartMessage"></div>
    </form>
</div>