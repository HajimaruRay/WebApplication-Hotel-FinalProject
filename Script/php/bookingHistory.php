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
$BookingName = $data["BookingName"] ?? "";

if (!$BookingName) {
    echo json_encode(["status" => "error", "message" => "Missing BookingName"]);
    exit;
}

$stmt = $conn->prepare("SELECT TypeRoom, Amount, CheckInDate, CheckOutDate FROM booking WHERE BookingName = ?");
$stmt->bind_param("s", $BookingName);
$stmt->execute();
$result = $stmt->get_result();

$bookings = [];

while ($row = $result->fetch_assoc()) {
    $bookings[] = $row;
}

$stmt->close();
$conn->close();

echo json_encode($bookings);
exit();
