<?php require_once 'bootstrap.php';?><!DOCTYPE html>
<html ng-app="flApp" ng-controller="PracticeController">
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
		subject_id = '<?php echo intval($_GET['subject_id']); ?>';
		serverTime = <?php echo time() ?>;
		setInterval(function() {
			serverTime++;
		}, 1000);
	</script>
</head>
<body>
	<?php include('common/header.php'); ?>
	<?php include('practice/detail.php'); ?>
	<?php include('common/footer.php'); ?>
	<script src="/assets/angular/practice.js"></script>
</body>
</html>