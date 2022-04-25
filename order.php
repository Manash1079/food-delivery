<?php
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == "POST") {
  session_start();

  $orderData = json_decode($_POST['orderData']);
  $addressData = json_decode($_POST['addressData']);
  $u_id = $_SESSION['userid'];

  foreach ($orderData as $data) {
    $sql = "INSERT INTO orders (pname, price, quantity, name, address, city, state, country, zip, phone, email, u_id) VALUES ('$data->pname', '$data->price', '$data->qty', '$addressData->name', '$addressData->address', '$addressData->city', '$addressData->state', '$addressData->country', '$addressData->zip', '$addressData->phone', '$addressData->email', '$u_id');";

    $result = mysqli_query($conn, $sql);

    if (!$result) {
      echo 'Error: ' . mysqli_error($conn);
    }
  }
}