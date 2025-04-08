<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'Server.php';

if (!isset($conn) || $conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit;
}

// Read JSON data
$data = json_decode(file_get_contents("php://input"), true);
error_log("📌 JSON Received: " . print_r($data, true));

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Invalid JSON input"]);
    exit;
}

// Extract values
$TypeRoom = $data["TypeRoom"] ?? "";
$UpdateAmount = $data["UpdateAmount"] ?? "";
$OriAmount = $data["OriAmount"] ?? "";

// Validate the column name to avoid SQL injection
$validColumns = ["Small", "Big"]; // Allowed column names
if (!in_array($TypeRoom, $validColumns)) {
    echo json_encode(["status" => "error", "message" => "Invalid column name"]);
    exit;
}

// Use a dynamic query for column name (prevents SQL injection for column names)
$query = "UPDATE bookingamount SET `$TypeRoom` = ? WHERE `$TypeRoom` = ?";

$stmt = $conn->prepare($query);
if (!$stmt) {
    echo json_encode(["status" => "error", "message" => "Database query preparation failed"]);
    exit;
}

// Bind values (not column names)
$stmt->bind_param("ss", $UpdateAmount, $OriAmount);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Update Successful"]);
} else {
    error_log("MySQL Error: " . $conn->error);
    echo json_encode(["status" => "error", "message" => "Update Failed"]);
}

$stmt->close();
$conn->close();
?>
