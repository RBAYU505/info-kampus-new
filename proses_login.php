<?php
include 'koneksi.php';
$username = $_POST['username'];
$password = md5($_POST['password']);
$login    = mysqli_query($connect, "select * from login where user='$username' and pass='$password'");
$result   = mysqli_num_rows($login);
if($result>0){
    $user = mysqli_fetch_array($login);
    session_start();
    $_SESSION['username'] = $user['username'];
    header("location:pemberitahuan.html");
}else{
    header("");
}
?>