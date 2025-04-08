<?php
header("Content-Type: application/json");
require 'Server.php';

// Get the request data
$data = json_decode(file_get_contents("php://input"), true);
$id = $data["id"] ?? null;

if ($id) {
    // Prepare the DELETE statement
    $stmt = $conn->prepare("DELETE FROM booking WHERE id = ?");
    $stmt->bind_param("s", $id); // Use "s" for string, change to "i" if integer
    
    if ($stmt->execute()) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Delete failed"]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "No RoomNumber provided"]);
}

$conn->close();
exit;
?>
