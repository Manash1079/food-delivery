<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  include './db_connect.php';

  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $cpassword = $_POST['cpassword'];

  //Checking the existance
  $existSql = "SELECT * FROM users WHERE email='$email'";
  $existResult = mysqli_query($conn, $existSql);
  $numRows = mysqli_num_rows($existResult);

  if ($numRows == 0 && $password == $cpassword) {
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (`name`, `email`, `password`, `timestamp`) VALUES ('$name', '$email', '$hash', current_timestamp());";
    $result = mysqli_query($conn, $sql);

    if ($result) {
      session_start();
      $_SESSION['loggedin'] = true;
      $_SESSION['name'] = $name;
      $_SESSION['email'] = $email;
      $_SESSION['userid'] = mysqli_insert_id($conn);

      header("Location: /food-delivery/index.php");
      exit();
    }
  }
}