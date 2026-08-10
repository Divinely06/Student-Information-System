<?php
header("Content-Type: application/json");
require "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$student_id = $data['student_id'];
$student_name = $data['student_name'];
$program = $data['program'];
$year_level = $data['year_level'];
$email = $data['email'];

$sql = "INSERT INTO students (student_id, student_name, program, year_level, email)
        VALUES ('$student_id', '$student_name', '$program', '$year_level', '$email')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Student added successfully"]);
} else {
    echo json_encode(["error" => $conn->error]);
}

$conn->close();
?>