<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);
ob_start();

require 'Server.php';

if ($conn->connect_error) {
    ob_end_clean();
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);
error_log("📌 JSON Received: " . print_r($data, true));

if (!$data) {
    ob_end_clean();
    die(json_encode(["status" => "error", "message" => "Invalid JSON input"]));
}

$name = $data["name"] ?? "";
$surname = $data["surname"] ?? "";
$username = $data["username"] ?? "";
$password = $data["password"] ?? "";
$rule = "admin";

if (empty($username) || empty($password)) {
    ob_end_clean();
    die(json_encode(["status" => "error", "message" => "Username or password cannot be empty"]));
}

$stmt = $conn->prepare("INSERT INTO userinfo (Username, Password, Rule ,Name, Surname) VALUES (?, ?, ?, ?, ?)");
if (!$stmt) {
    ob_end_clean();
    die(json_encode(["status" => "error", "message" => "Database query preparation failed"]));
}

$stmt->bind_param("sssss", $username, $password, $rule, $name, $surname);

if (!$stmt->execute()) {
    error_log("MySQL Error: " . $conn->error);
    ob_end_clean();
    if ($conn->errno == 1062) {
        die(json_encode(["status" => "error", "message" => "Username already exists"]));
    } else {
        die(json_encode(["status" => "error", "message" => "Registration failed"]));
    }
}

ob_end_clean();
echo json_encode(["status" => "success", "message" => "Registration Success"]);

$stmt->close();
$conn->close();
?>
