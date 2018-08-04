<?php require('./bootstrap.php'); ?><!DOCTYPE html>
<html ng-app="flApp" ng-controller="GameController">
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
	</script>
</head>
<body>
	<?php include('common/header.php'); ?>
	<?php include('game/index.php'); ?>
	<?php include('common/footer.php'); ?>
	<script src="/assets/angular/game.js"></script>
	<?php if(isset($_GET['gameType']) && isset($_GET['gameTopic']) && $_GET['gameType'] == 'muatu' ){ ?>
	<script>
		jQuery(function(){
    		jQuery.ajax({
				url: FL_API_URL +'/games?gamecode=muatu&game_topic_id='+<?= $_GET['gameTopic']; ?>, 
				dataType: 'json',
				success: function(resp) {
					var totalWord = resp[0].dataword.split(/,[ ]*/).length;
					var allWord = resp[0].dataword.split(/,[ ]*/).chunk(5);
					var trueWord = resp[0].datatrue.split(/,[ ]*/);
					RainWord.init(allWord, trueWord, totalWord);
				}
			});	
    	});	
    	
	</script>
	<?php } ?>
</body>
</html>