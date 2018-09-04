<?php 
	session_start();
	$user = $_GET['user'];
	$dataUser =  base64_decode($user);

	$dataUser= json_decode($dataUser,true);
	//var_dump($dataUser);
	
	$_SESSION["username"] = $dataUser['username'];
	$_SESSION["name"] = $dataUser['name'];
	$_SESSION["userId"] = $dataUser['userId'];
	$_SESSION["checkPayment"] = $dataUser['checkPayment'];
	$_SESSION["paymentDate"] = $dataUser['paymentDate'];
	$_SESSION["expiredDate"] = $dataUser['expiredDate'];
	//echo 'username: '. $_SESSION["username"];
	header('Location: /');
	

 ?>