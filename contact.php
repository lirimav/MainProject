<?php
  
if($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $textarea = $_POST['message'];
      
    $email_from = "la60874@universum-ks.org"
      
    $email_subject = "New form submission";
    $email_body = "User Name: $name.\n".
                  "User Email: $email.\n".
                  "User Message: $message.\n"

    $to = "lirimav1@gmail.com";
    $headers = "From: $email \r\n";
    $headers .= "Reply-to: $email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");
?>