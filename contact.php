<?php 
  //creating connection to database
$con=mysqli_connect("sql6.freesqldatabase.com","sql6634787","7mEaXv4eNE","sql6634787") or die(mysqli_error());

  //check whether submit button is pressed or not
if((isset($_POST['submit'])))
{
  //fetching and storing the form data in variables
$Name = $con->real_escape_string($_POST['fname']);
$Name = $con->real_escape_string($_POST['lname']);
$Email = $con->real_escape_string($_POST['email']);
$Phone = $con->real_escape_string($_POST['mobile']);
$comments = $con->real_escape_string($_POST['project1']);
$comments = $con->real_escape_string($_POST['project2']);
$comments = $con->real_escape_string($_POST['project3']);
$comments = $con->real_escape_string($_POST['project4']);
$comments = $con->real_escape_string($_POST['project5']);
$comments = $con->real_escape_string($_POST['project6']);
$comments = $con->real_escape_string($_POST['project7']);
$comments = $con->real_escape_string($_POST['project8']);
$comments = $con->real_escape_string($_POST['project9']);



  //query to insert the variable data into the database
$sql="INSERT INTO contactus (fname,lname, email, mobile, project1, project2, project3, project4, project5, project7, project8, project9) VALUES('$fname','$lname','$email','$project1','$mobile','$project2','$project3','$project4','$project4','$project5','$project6','$project7','$project8','$project9');

  //Execute the query and returning a message
if(!$result = $con->query($sql)){
die('Error occured [' . $conn->error . ']');
}
else
   echo "Thank you! We will get in touch with you soon";
}

?>