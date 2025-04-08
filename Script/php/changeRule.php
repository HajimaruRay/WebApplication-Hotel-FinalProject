<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'Server.php';

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit;
}

// อ่าน JSON ที่รับมา
$data = json_decode(file_get_contents("php://input"), true);
$Name = $data["Name"] ?? "";

if (!$Name) {
    echo json_encode(["status" => "error", "message" => "Missing Name"]);
    exit;
}

$stmt = $conn->prepare("UPDATE userinfo SET Rule = 'user' WHERE Name = ?");
$stmt->bind_param("s", $Name);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo json_encode(["status" => "success", "message" => "User role updated successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "No user updated (Name might not exist)"]);
}

$stmt->close();
$conn->close();

exit();
