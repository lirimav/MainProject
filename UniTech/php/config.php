<?php 
    session_start();
    $host = 'localhost';
    $db = 'unitech';
    $user = 'root';
    $pass = '';
   

    try{
        $connection = new PDO("mysql:host=$host; dbname=$db", $user, $pass);
        // echo "bravo";

    }catch(Exception $e){
        echo "Diçka është gabim!";
    }