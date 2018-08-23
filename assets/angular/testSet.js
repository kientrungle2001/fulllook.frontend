flApp.controller('TestSetController', ['$scope', function($scope) {
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
	var u = new URL(location.href);
	var categoryId = u.searchParams.get('category_id');
	$scope.category = {};
	jQuery.ajax({
		type: 'get',
		url: FL_API_URL + '/corecategories/' + categoryId, 
		dataType: 'json',
		success: function(resp) {
			$scope.category = resp;
		}
	});
	$scope.tests = [];
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/common/getTestSets', 
		data: {
			categoryId: categoryId
		},
		dataType: 'json',
		success: function(resp) {
			$scope.testSets = buildBottomTree(resp);
			$scope.testSets.forEach(function(testSet) {
				var u = new URL(location.href);
				if (testSet.id == parseInt(u.searchParams.get('test_set_id'))) {
					$scope.selectTestSet(testSet);
				}
			});
			$scope.$apply();
		}
	});
	$scope.step = 'selectTestSet';
	$scope.selectTestSet = function(testSet) {
		$scope.step = 'selectTestSet';
		$scope.selectedTestSet = testSet;
		$scope.selectedTest = null;
	};
	$scope.selectTest = function (testSet, test) {
		$scope.step = 'selectTest';
		$scope.selectedTestSet = testSet;
		$scope.selectedTest = test;
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
				$scope.remaining = {
					minutes: $scope.selectedTest.time,
					seconds: 0
				};
				$scope.startTime = serverTime;
				$scope.duringTime = 0;
				$scope.countdownIntervalId = setInterval(function() {
					$scope.duringTime++;
					if ($scope.remaining.minutes == 0 && $scope.remaining.seconds == 0) {
						$scope.finishTest();
					} else if($scope.remaining.seconds == 0) {
						$scope.remaining.seconds = 59;
						$scope.remaining.minutes--;
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
		$scope.finishStep = 'finishStep';
		clearInterval($scope.countdownIntervalId);
	};
	$scope.showAnswer = function() {
		$scope.showAnswerStep = 'showAnswerStep';
	};
}]);