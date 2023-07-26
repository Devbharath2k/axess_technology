<?php
// Creating connection to the database
$con = mysqli_connect("sql6.freesqldatabase.com", "sql6634787", "7mEaXv4eNE", "sql6634787") or die(mysqli_error());

// Check whether the submit button is pressed or not
if (isset($_POST['submit'])) {

    // Fetching and storing the form data in variables
    $fname = $con->real_escape_string($_POST['fname']);
    $lname = $con->real_escape_string($_POST['lname']);
    $email = $con->real_escape_string($_POST['email']);
    $mobile = $con->real_escape_string($_POST['mobile']);
    $project1 = $con->real_escape_string($_POST['project1']);
    $project2 = $con->real_escape_string($_POST['project2']);
    $project3 = $con->real_escape_string($_POST['project3']);
    $project4 = $con->real_escape_string($_POST['project4']);
    $project5 = $con->real_escape_string($_POST['project5']);
    $project6 = $con->real_escape_string($_POST['project6']);
    $project7 = $con->real_escape_string($_POST['project7']);
    $project8 = $con->real_escape_string($_POST['project8']);
    $project9 = $con->real_escape_string($_POST['project9']);
    $message = $con->real_escape_string($_POST['message']);

    // Query to insert the variable data into the database
    $sql = "INSERT INTO axess_technology (fname, lname, email, mobile, project1, project2, project3, project4, project5, project6, project7, project8, project9, message) 
            VALUES ('$fname', '$lname', '$email', '$mobile', '$project1', '$project2', '$project3', '$project4', '$project5', '$project6', '$project7', '$project8', '$project9', '$message')";

    // Execute the query and return a message
    if (!$result = $con->query($sql)) {
        die('Error occurred [' . $conn->error . ']');
    } else {
        echo "Thank you! We will get in touch with you soon";
    }
}
?>
