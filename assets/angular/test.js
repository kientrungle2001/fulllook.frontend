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
		$scope.testStep = 'selectTest';
		$scope.showAnswersStep = 'selectTest';
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
		$scope.testStep = 'doTest';
		$scope.showAnswersStep = 'doTest';
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/test/getQuestionsAnswers', 
			data: {
				test_id: $scope.selectedTest.id
			},
			dataType: 'json',
			success: function(resp) {
				$scope.user_question_answers = {};
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
	$scope.selectAnswer = function(question, answer) {
		$scope.user_question_answers[question.id] = answer.id;
	};
	$scope.finishTest = function() {
		$scope.testStep = 'finishTest';
		if(typeof $scope.testInterval != 'undefined') {
			clearInterval($scope.testInterval);
		}
		$scope.calculateResult();
		$scope.saveToBook();
		$scope.showResult();
	};

	$scope.calculateResult = function() {
		$scope.result_user_answers = [];
		$scope.totalQuestions = 0;
		$scope.totalRights = 0;
		$scope.totalWrongs = 0;
		$scope.questions.forEach(function(question) {
			$scope.totalQuestions++;
			if($scope.isRightAnswer(question)) {
				$scope.result_user_answers.push({
					questionId: question.id,
					answerId: $scope.user_question_answers[question.id],
					status: 1
				});
				$scope.totalRights++;
			} else {
				$scope.result_user_answers.push({
					questionId: question.id,
					answerId: $scope.user_question_answers[question.id] ? $scope.user_question_answers[question.id]: 0,
					status: 0
				});
				$scope.totalWrongs++;
			}
		});
	};

	$scope.saveToBook = function() {
		var userId = 8;
		var startTime = serverTime;
		var duringTime = 15 * 60 - ($scope.remaining.minutes * 60 + $scope.remaining.seconds);
		var stopTime = serverTime + duringTime;
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL + '/test/updateUserBooks',
			data: {
				userId:  userId,
				subject_id: 0,
				topic_id: 0,
				exercise_number: 0,
				questions: $scope.result_user_answers,
				quantity_question: $scope.totalQuestions,
				mark: $scope.totalRights,
				startTime: startTime,
				duringTime: duringTime,
				stopTime: stopTime,
				testId: $scope.selectedTest.id
			},
			success: function(resp) {
				
			}
		});
	};

	$scope.showResult = function() {
		var resultModal = '#resultModal';
		jQuery(resultModal).modal('show');
	};
	$scope.showAnswers = function() {
		$scope.showAnswersStep = 'showAnswers';
	};

	$scope.isRightAnswer = function(question) {
		var rightId = null;
		question.ref_question_answers.forEach(function(answer) {
			if(answer.status == 1 || answer.status == '1' ) {
				rightId = answer.id;
			}
		});
		if(typeof $scope.user_question_answers[question.id] != 'undefined') {
			if(rightId == $scope.user_question_answers[question.id]) {
				return true;
			}
		}
		return false;
	};
}]);