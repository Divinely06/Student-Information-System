<?php
header("Content-Type: application/json");
require "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$student_id = $data['student_id'];
$student_name = $data['student_name'];
$program = $data['program'];
$year_level = $data['year_level'];
$email = $data['email'];

$sql = "UPDATE students
        SET student_name = '$student_name', program = '$program', year_level = '$year_level', email = '$email'
        WHERE student_id = '$student_id'";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Student updated successfully"]);
} else {
    echo json_encode(["error" => $conn->error]);
}

$conn->close();
?>