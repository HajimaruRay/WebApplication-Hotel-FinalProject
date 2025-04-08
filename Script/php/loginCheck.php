<?php
header("Content-Type: application/json");
error_reporting(0);
ini_set('display_errors', 0);

session_start();
require 'Server.php';

ob_clean();

$data = json_decode(file_get_contents("php://input"), true);
$username = $data["username"] ?? "";
$password = $data["password"] ?? "";

error_log(print_r($data, true)); 

$stmt = $conn->prepare("SELECT * FROM userinfo WHERE Username = ? AND Password = ?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_assoc();


if ($result->num_rows === 1) {
    $_SESSION['isLogin'] = true;
    echo json_encode(["status" => "success", "message" => "Login successful", "data" => $data]);
} else {
    echo json_encode(["status" => "error", "message" => "Incorrect username or password"]);
}

$stmt->close();
$conn->close();
exit();
?>