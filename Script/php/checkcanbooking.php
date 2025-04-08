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

$roomNumber    = $data["roomNumber"] ?? "";
$checkInDate   = $data["checkInDate"] ?? "";
$checkOutDate  = $data["checkOutDate"] ?? "";
$bookingName   = $data["bookingNameSurname"] ?? "";
$TypeRoom      = $data["TypeRoom"] ?? "";
$Amount        = $data["Amount"] ?? "";

// Step 1: Check for overlapping bookings
$checkQuery = "SELECT * FROM booking WHERE RoomNumber = ? AND NOT (CheckOutDate <= ? OR CheckInDate >= ?)";
$checkStmt = $conn->prepare($checkQuery);
$checkStmt->bind_param("sss", $roomNumber, $checkInDate, $checkOutDate);
$checkStmt->execute();
$result = $checkStmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "This booking overlaps with an existing one."]);
    $checkStmt->close();
    $conn->close();
    exit;
} else{
    echo json_encode(["status" => "success"]);
    $checkStmt->close();
    $conn->close();
    exit;
}
?>
