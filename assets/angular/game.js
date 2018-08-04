flApp.controller('GameController', ['$scope', function($scope) {
	$scope.title = 'Công ty cổ phần giáo dục và phát triển trí tuệ sáng tạo Next Nobels';
	$scope.language = window.localStorage.getItem('language') || 'en';
	$scope.changeLanguage = function() {
		window.localStorage.setItem('language', $scope.language);
	}
	
	$scope.grade = window.localStorage.getItem('grade') || '5';
	$scope.changeGrade = function() {
		window.localStorage.setItem('grade', $scope.grade);
	}
	$scope.translate = function(val) {
		return $langMap[$scope.language][val] || val;
	}

	$scope.loadGameTypes = function() {
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/game/getType', 
			
			dataType: 'json',
			success: function(resp) {
				$scope.gameTypes = buildBottomTree(resp);
				$scope.$apply();
			}
		});	
	};
	$scope.loadGameTypes();
	$scope.selectGameType = function(){
		$scope.play = false;
		$scope.selectedGameTopic = '';
		$scope.loadGaneTopics($scope.selectedGameType);
	}
	$scope.loadGaneTopics = function(gamecode){
		if(gamecode == 'muatu'){

			jQuery.ajax({
				url: FL_API_URL +'/gametopics', 
				dataType: 'json',
				success: function(resp) {

					var gameTopics = buildBottomTree(resp);
					$scope.muatuTopics = treefy(gameTopics, 0);
					$scope.$apply();
				}
			});	
		}else if(gamecode == 'dragWord'){
			jQuery.ajax({
				url: FL_API_URL +'/games?gamecode=dragWord', 
				dataType: 'json',
				success: function(resp) {
					$scope.dragTopics = resp;
					$scope.$apply();
				}
			});	
		}
		else{
			$scope.gameTopics = [];
		}
	}
	var u = new URL(location.href);
	$scope.selectedGameType = u.searchParams.get('gameType');
	if($scope.selectedGameType){
		$scope.loadGaneTopics($scope.selectedGameType);
	}
	$scope.selectedGameTopic = u.searchParams.get('gameTopic');

	
	$scope.playGame = function(){
		
		if(!$scope.selectedGameType){
			alert('Bạn chưa chọn loại game');
			jQuery('#gameType').focus();
			return false;
		}
		if(!$scope.selectedGameTopic){
			alert('Bạn chưa chọn chủ đề');
			jQuery('#gameTopic').focus();
			return false;
		}
		if($scope.selectedGameType && $scope.selectedGameTopic){
			
			window.location.href = '/game.php?gameType='+$scope.selectedGameType+'&gameTopic='+$scope.selectedGameTopic;
			// $scope.play = true;

			// if($scope.selectedGameType == 'muatu'){
			// 	jQuery.ajax({
			// 		url: FL_API_URL +'/games?gamecode=muatu&game_topic_id='+$scope.selectedGameTopic, 
			// 		dataType: 'json',
			// 		success: function(resp) {
			// 			var totalWord = resp[0].dataword.split(/,[ ]*/).length;
			// 			var allWord = resp[0].dataword.split(/,[ ]*/).chunk(5);
			// 			var trueWord = resp[0].datatrue.split(/,[ ]*/);
			// 			$scope.$apply();
			// 			RainWord.init(allWord, trueWord, totalWord);
			// 		}
			// 	});		
			// }else if($scope.selectedGameType == 'dragWord'){

			// }

		}

	}

}]);