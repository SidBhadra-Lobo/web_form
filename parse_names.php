



<?php include 'database.php'; ?>

<?php

// Show that .html page is taking outputs.

// echo $_POST['firstname'];
// echo '<br />';
// echo $_POST['email'];
// print_r($_POST);

// create a variable
$samplename=$_POST['samplename'];
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$email=$_POST['email'];
$date=$_POST['dateof'];
$check_box=$_POST['check'];
$sampleplus=$_POST['sampleplus'];

//Execute the query

mysqli_query($connect, "INSERT INTO samples (samplename,firstname,lastname,email,dateof)
                VALUES('$samplename','$firstname','$lastname','$email','$dateof')");

    if(mysqli_affected_rows($connect) > 0){
    echo "<p>Sample Added</p>";
    echo "<a href='simple_form.html'>Go Back</a>";
    } 

else {
    echo "Sample NOT Added<br />";
    echo mysqli_error ($connect);
}

// $servername = "localhost";
// $username = "bakyt";
// $password = "limsbakyt";
// $dbname = "lim";

// //Create connection to sql

// $conn = new mysqli_connect($servername, $username, $password);

// //Check connection
// if (!$conn) {
//     die("Connection failed: " . mysqli_connect_error());
// } 
// echo "Connected successfully";

// //Create database for names

// $sql = "CREATE DATABASE Names";
// if (mysqli_query($conn, $sql)) {
//     echo "Database created successfully";
// } else {
//     echo "Error creating database: " . mysqli_error($conn);
// }

// mysqli_close($conn);

// //Create new connection to databsse //Do this later

// $conn = new mysqli_connect($servername, $username, $password, $dbname);

// //Insert names into Names
// $sql = "INSERT INTO Names (samplename, firstname, lastname)
// VALUES( 'Sample', 'John', 'Doe')";

// if (mysql_query($conn, $sql)) {
//     echo "New record created successfully";
// }

// else {
//     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
// }

// mysqli_close($conn);

?>




