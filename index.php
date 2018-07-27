<?php require_once 'bootstrap.php';?><!DOCTYPE html>
<html ng-app="flApp" ng-controller="HomeController">
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>{{title}}</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	
	<link rel="stylesheet" type="text/css" href="assets/css/font-awesome-4.6.3/css/font-awesome.min.css"/>
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="assets/css/style.css" />
	
	
	<script>
		FL_API_URL = '<?php echo FL_API_URL?>';
	</script>
</head>
<body>
	<?php include('common/header.php'); ?>
	<?php include('common/slider.php'); ?>
	<?php include('home/index.php'); ?>
	<?php include('common/footer.php'); ?>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script>
		$.noConflict();
	</script>
	<script src="/assets/js/bootstrap.bundle.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular.min.js" integrity="sha256-ruP2+uorUblSeg7Tozk75u8TaSUKRCZVvNV0zRGxkRQ=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular-sanitize.min.js" integrity="sha256-FnMl43xSx3jHmcs7t2LJ3htfsCeo99XORPvzOVQN/tw=" crossorigin="anonymous"></script>
	<script src="/assets/angular/app.js"></script>
</body>
</html>