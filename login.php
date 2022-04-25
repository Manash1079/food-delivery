<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  include "./db_connect.php";
  $email = $_POST["email"];
  $password = $_POST["password"];

  $sql = "SELECT * FROM users WHERE email='$email'";
  $result = mysqli_query($conn, $sql);
  $numRows = mysqli_num_rows($result);

  if ($numRows == 1) {
    $row = mysqli_fetch_assoc($result);
    if (password_verify($password, $row["password"])) {
      session_start();
      $_SESSION["loggedin"] = true;
      $_SESSION["email"] = $email;
      $_SESSION["userid"] = $row["id"];
      $_SESSION["name"] = $row["name"];

      header("Location: /food-delivery");
      exit();
    }
  }
}