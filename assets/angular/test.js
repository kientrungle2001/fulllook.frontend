flApp.controller('TestController', ['$scope', function($scope) {
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
	$scope.tests = [];
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/common/getTests', 
		data: {
			categoryId: '354'
		},
		dataType: 'json',
		success: function(resp) {
			$scope.tests = resp;
			resp.forEach(function(test) {
				var u = new URL(location.href);
				if(test.id == parseInt(u.searchParams.get('test_id'))) {
					$scope.selectTest(test);
				}
			});
			$scope.$apply();
		}
	});
	$scope.step = 'selectTest';
	$scope.selectTest = function(test) {
		$scope.step = 'selectTest';
		$scope.selectedTest = test;
		if(typeof $scope.testInterval != 'undefined') {
			clearInterval($scope.testInterval);
		}
		$scope.remaining = {
			minutes: 45,
			seconds: 0
		};
	};
	$scope.doTest = function() {
		$scope.step = 'doTest';
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/test/getQuestionsAnswers', 
			data: {
				test_id: $scope.selectedTest.id
			},
			dataType: 'json',
			success: function(resp) {
				$scope.questions = resp;
				$scope.testInterval = setInterval(function(){
					if($scope.remaining.seconds == 0) {
						if($scope.remaining.minutes == 0) {
							$scope.finishTest();
						} else {
							$scope.remaining.minutes--;
							$scope.remaining.seconds = 59;
						}
					} else {
						$scope.remaining.seconds--;
					}
					$scope.$apply();
				}, 1000);
				$scope.$apply();
			}
		});
	};
	$scope.finishTest = function() {
		$scope.step = 'finishTest';
		if(typeof $scope.testInterval != 'undefined') {
			clearInterval($scope.testInterval);
		}
		$scope.showResult();
	};

	$scope.showResult = function() {
		var resultModal = '';
		jQuery(resultModal).modal('show');
	};
	$scope.showAnswers = function() {
		$scope.showAnswersStep = 'showAnswers'
	}
}]);