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

// Validate and sanitize TypeRoom
$validColumns = ["Small", "Big"]; // Allowed column names
$TypeRoom = $data["TypeRoom"] ?? "";

// Check if TypeRoom is valid
if (!in_array($TypeRoom, $validColumns)) {
    echo json_encode(["status" => "error", "message" => "Invalid room type"]);
    exit;
}

// Use a dynamic query for column name (prevents SQL injection)
$query = "SELECT `$TypeRoom` FROM bookingamount LIMIT 1"; // Get the value of the column for the first row
$stmt = $conn->prepare($query);

if (!$stmt) {
    echo json_encode(["status" => "error", "message" => "SQL Prepare Failed"]);
    exit;
}

$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    echo json_encode([
        "status" => "success",
        "message" => "Get Successful",
        "data" => $row[$TypeRoom] // Return the value from the dynamically selected column
    ]);
} else {
    echo json_encode(["status" => "error", "message" => "No data found"]);
}

$stmt->close();
$conn->close();
?>
