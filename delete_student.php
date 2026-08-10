<?php
header("Content-Type: application/json");
require "db.php";

$data = json_decode(file_get_contents("php://input"), true);
$student_id = $data['student_id'];

$sql = "DELETE FROM students WHERE student_id = '$student_id'";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Student deleted successfully"]);
} else {
    echo json_encode(["error" => $conn->error]);
}

$conn->close();
?>