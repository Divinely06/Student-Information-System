<?php
header("Content-Type: application/json");
require "db.php";
$sql = "SELECT * FROM students";
$result = $conn->query($sql);
$students = [];
while ($row = $result->fetch_assoc()) {
 $students[] = $row;
}
echo json_encode($students);
$conn->close();
?>