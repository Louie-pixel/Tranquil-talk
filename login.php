<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tranquil_talk";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get data from POST request
$username = $_POST['username'];
$password = $_POST['password'];

// Prepare and bind
$stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
  $stmt->bind_result($hashed_password);
  $stmt->fetch();
  if (password_verify($password, $hashed_password)) {
    echo "Login successful!";
  } else {
    echo "Invalid username or password!";
  }
} else {
  echo "Invalid username or password!";
}

$stmt->close();
$conn->close();
?>
