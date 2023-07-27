<?php
// Creating connection to the database
$con = mysqli_connect("srv787.hstgr.io", "u842521168_devbharath", "Admin@123", "u842521168_devbharath") or die(mysqli_error());

// Check whether the submit button is pressed or not
if (isset($_POST['submit'])) {

    // Fetching and storing the form data in variables
    $Fname = $con->real_escape_string($_POST['Fname']);
    $Lname = $con->real_escape_string($_POST['Lname']);
    $Email = $con->real_escape_string($_POST['Email']);
    $Mobile = $con->real_escape_string($_POST['Mobile']);
    $Tech_Product1 = $con->real_escape_string($_POST['Tech_Product1']);
    $Tech_Product2 = $con->real_escape_string($_POST['Tech_Product2']);
    $Tech_Product3 = $con->real_escape_string($_POST['Tech_Product3']);
    $Tech_Product4 = $con->real_escape_string($_POST['Tech_Product4']);
    $Message1 = $con->real_escape_string($_POST['Message1']);
    echo $Message1;

    // Query to insert the variable data into the database

    $sql = "INSERT INTO Pre-sales1 (Fname, Lname, Email, Mobile, Tech_Product1, Tech_Product2, Tech_Product3, Tech_Product4, Message1)
            VALUES ('$Fname', '$Lname', '$Email', '$Mobile', '$Tech_Product1', '$Tech_Product2', '$Tech_Product3', '$Tech_Product4', '$Message1')";
    echo $sql;
    // Execute the query and return a message
    if (!$result = $con->query($sql)) {
        die('Error occurred [' . $con->error . ']');
    } else {
        echo "Thank you! We will get in touch with you soon";
    }
}
?>
