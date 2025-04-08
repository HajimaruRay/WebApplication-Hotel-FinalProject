<link rel="stylesheet" href="/CSS/Navbar.css">
<!--Navbar-->
<script src="../../Script/js/Navbar.js"></script>
<div class="Navbar">
    <div class="Name"><a>❤︎LOGO❤︎</a></div>

    <div class="ChangeLanguage" onclick="ChangeLanguage()">
        <a class="language-Text"></a>
    </div>

    <a href="../../php/login/login.php">
        <div class="UnLogin_image" id="UnLogin_image">
            <span class="Login-Icon-Text">ล็อกอิน</span>
        </div>
    </a>

    <div class="Logout_image" id="Logout_image" onclick="logout()">
        <span class="Logout-Icon-Text">ล็อกเอ้าท์</span>
    </div>

    <div class="Login_image" id="Login_image">
        <a href="../../php/bookingHistory/bookingHistory.php" class="User-Icon-Text" id="User-Icon-Text"></a>
    </div>
</div>
<div class="NavbarEN">
        <div class="Name"><a>❤︎LOGO❤︎</a></div>

        <div class="ChangeLanguage" onclick="ChangeLanguage()">
            <a class="language-TextEN"></a>
        </div>

        <a href="../../php/login/login.php">
            <div class="UnLogin_image" id="UnLogin_imageEN">
                <span class="Login-Icon-Text">Login</span>
            </div>
        </a>

        <div class="Logout_image" id="Logout_imageEN" onclick="logoutEN()">
            <span class="Logout-Icon-Text">Logout</span>
        </div>

        <div class="Login_image" id="Login_imageEN">
            <a href="../../php/bookingHistory/bookingHistory.php" class="User-Icon-Text" id="User-Icon-TextEN"></a>
        </div>
    </div>