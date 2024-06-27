<?php
session_start(); // Start session

// Include database connection
require_once('database.php');

// Function to sanitize input data
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if form is submitted for login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Username and password sent from form
    $username = sanitizeInput($_POST['username']);
    $password = sanitizeInput($_POST['password']);

    // SQL query to fetch information of registered users
    $sql = "SELECT id, username FROM users WHERE username = ? AND password = ?";
    
    // Prepare and bind parameters
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $password);
    
    // Execute the query
    $stmt->execute();
    
    // Store result
    $stmt->store_result();
    
    // Check if username and password exist in database
    if ($stmt->num_rows > 0) {
        // Fetch user details
        $stmt->bind_result($id, $username);
        $stmt->fetch();

        // Set session variables
        $_SESSION['login_user'] = $username; // Initializing Session
        $_SESSION['login_id'] = $id;

        echo json_encode(array('success' => true, 'message' => 'Login successful!')); // Success response
    } else {
        echo json_encode(array('success' => false, 'message' => 'Username or password is incorrect.')); // Error response
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>
