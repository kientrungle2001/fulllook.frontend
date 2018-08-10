<?php require('./bootstrap.php'); ?><!DOCTYPE html>
<?php 
	/*$_SESSION['userId'] = 7;
	$_SESSION["checkPayment"] = 1;
	$_SESSION["paymentDate"] = '2017-12-12';
	$_SESSION["expiredDate"]  = '2018-12-12';*/
 ?>
<html ng-app="flApp" ng-controller="ProfileController">
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Fulllook</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	
	<link rel="stylesheet" type="text/css" href="assets/css/font-awesome-4.6.3/css/font-awesome.min.css"/>
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="assets/css/style.css" />
	<script>
		FL_API_URL = '<?php echo FL_API_URL?>';
		sessionUserId = '<?php echo $_SESSION['userId'] ?>';
		checkPayment = '<?php echo $_SESSION["checkPayment"] ?>';
		paymentDate = '<?php echo $_SESSION["paymentDate"] ?>';
		expiredDate = '<?php echo $_SESSION["expiredDate"] ?>';
	</script>
</head>
<body>
	<?php include('common/header.php'); ?>
	<?php include('profile/detail.php'); ?>
	<?php include('common/footer.php'); ?>
	<script src="/assets/angular/profile.js"></script>
</body>
</html>