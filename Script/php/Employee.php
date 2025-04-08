<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'Server.php';

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit;
}

$sql = "SELECT TypeRoom, Amount, CheckInDate, CheckOutDate, BookingName, RoomNumber, id FROM booking ORDER BY RoomNumber;";
$result = $conn->query($sql);

$bookings = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $bookings[] = $row;
    }
}

$conn->close();
echo json_encode($bookings);
exit;
?>
