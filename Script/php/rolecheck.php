<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'Server.php'; // ตรวจสอบว่ามีการกำหนดค่าเชื่อมต่อฐานข้อมูล

if (!isset($conn) || $conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit;
}

// แก้ไขเงื่อนไข SQL ให้ถูกต้อง
$sql = "SELECT Username, Name, Surname, Rule FROM userinfo WHERE Rule = 'admin'";
$result = $conn->query($sql);

$userinfo = []; // กำหนดตัวแปรเป็น array ปกติ

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $userinfo[] = $row;
    }
}

// ปิดการเชื่อมต่อ
$conn->close();

// แสดงผล JSON
echo json_encode($userinfo);
exit;
?>
