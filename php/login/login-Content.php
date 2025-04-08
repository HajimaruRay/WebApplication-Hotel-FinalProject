<div class="Content">
    <h1>ล็อกอิน</h1>
    <form class="Login-field">
        <label>ชื่อผู้ใช้:</label>
        <input class="text-field" id="username-field" type="text" placeholder="User Name" required><br>

        <label>รหัสผ่าน:</label>
        <input class="text-field" id="password-field" type="password" placeholder="Password" required>
        <button class="button-seethrough" type="button" onclick="seethrough()">👁️</button><br>

        <button class="button" id="Login" type="submit">ล็อกอิน</button><br>
        <a>ยังไม่มีบัญชีใช่ใหม <a href="../register/register.php">ลงทะเบียน</a> เลย</a>
        <!-- <button class="button" id="Register" >ลงทะเบียน</button><br> -->
        <div id="alartMessage"></div>
    </form>
</div>