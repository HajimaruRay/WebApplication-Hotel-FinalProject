<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'Server.php';

if ($conn->connect_error) {
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

$roomNumber = $data["roomNumber"] ?? "";
$checkInDate = $data["checkInDate"] ?? "";
$checkOutDate = $data["checkOutDate"] ?? "";
$bookingName = $data["bookingNameSurname"] ?? "";

// Validate room number (assuming it is a table name or a valid identifier)
if (!preg_match('/^\w+$/', $roomNumber)) {
    echo json_encode(["status" => "error", "message" => "Invalid room number"]);
    exit;
}

// Correctly construct the SQL query
$tableName = mysqli_real_escape_string($conn, $roomNumber); // Validate table name to prevent SQL injection
$sql = "INSERT INTO `$tableName` (`Check-in`, `Check-out`, `bookingName`) VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
if (!$stmt) {
    echo json_encode(["status" => "error", "message" => "Database query preparation failed"]);
    exit;
}

// Bind parameters
$stmt->bind_param("sss", $checkInDate, $checkOutDate, $bookingName);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Booking Success"]);
} else {
    error_log("MySQL Error: " . $conn->error);
    if ($conn->errno == 1062) {
        echo json_encode(["status" => "error", "message" => "This Booking already exists"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Booking failed"]);
    }
}

$stmt->close();
$conn->close();
?>


