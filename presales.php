<?php
// Creating connection to the database
$con = mysqli_connect("srv787.hstgr.io", "u842521168_devbharath", "Admin@123", "u842521168_devbharath") or die(mysqli_error());

// Check whether the submit button is pressed or not
if (isset($_POST['submit'])) {

    // Fetching and storing the form data in variables
    $fname = $con->real_escape_string($_POST['Fname']);
    $lname = $con->real_escape_string($_POST['lname']);
    $email = $con->real_escape_string($_POST['email']);
    $mobile = $con->real_escape_string($_POST['mobile']);
    $message = $con->real_escape_string($_POST['message']);

    // Query to insert the variable data into the database
    $sql = "INSERT INTO axess_technology (fname, lname, email, mobile,) 
            VALUES ('', '', '', '', '', '', '', '', '', '', '', '', '', '')";

    // Execute the query and return a message
    if (!$result = $con->query($sql)) {
        die('Error occurred [' . $conn->error . ']');
    } else {
        echo "Thank you! We will get in touch with you soon";
    }
}
?>
