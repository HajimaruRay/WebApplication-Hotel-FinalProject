<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
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
$TypeRoom = $data["TypeRoom"] ?? "";
$Amount = $data["Amount"] ?? "";

$stmt = $conn->prepare("INSERT INTO booking (RoomNumber, CheckInDate, CheckOutDate, bookingName, TypeRoom, Amount) VALUES (?, ?, ?, ?, ?, ?)");
if (!$stmt) {
    echo json_encode(["status" => "error", "message" => "Database query preparation failed"]);
    exit;
}
$stmt->bind_param("ssssss", $roomNumber, $checkInDate, $checkOutDate, $bookingName, $TypeRoom, $Amount);

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