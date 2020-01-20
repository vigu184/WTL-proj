<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email= $_POST['email'];
$city = $_POST['city'];
/*$phoneCode = $_POST['phoneCode'];
$phone = $_POST['phone'];*/
if (!empty($firstname) || !empty($lastname) || !empty($email) || !empty($city)) 
{
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "minp";
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) 
	{
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else 
	{
     //$SELECT = "SELECT * From register Where email = ? Limit 1";
     $INSERT = "INSERT Into users (firstname,lastname,email,city) values(?, ?, ?, ?)";
     //Prepare statement
     /*$stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();*/
     //$rnum = $stmt->num_rows;
     //if ($rnum==0) 
	 //{
      //$stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param($firstname, $lastname, $email, $city);
      $stmt->execute();
      echo "New record inserted sucessfully";
     } 
	 else 
	 {
      echo "Someone already register using this email";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}
?>