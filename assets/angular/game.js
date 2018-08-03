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
		$scope.loadGaneTopics($scope.selectedGameType);
	}
	$scope.loadGaneTopics = function(gamecode){
		if(gamecode == 'muatu'){

			jQuery.ajax({
				url: FL_API_URL +'/gametopics', 
				dataType: 'json',
				success: function(resp) {

					var gameTopics = buildBottomTree(resp);
					$scope.gameTopics = treefy(gameTopics, 0);
					console.log(gameTopics);
					console.log($scope.gameTopics);
					$scope.$apply();
				}
			});	
		}else if(gamecode == 'dragWord'){
			jQuery.ajax({
				url: FL_API_URL +'/game?gamecode=dragWord', 
				dataType: 'json',
				success: function(resp) {
					$scope.gameTopics = buildBottomTree(resp);
					$scope.$apply();
				}
			});	
		}
		else{
			$scope.gameTopics = [];
		}
	}

}]);