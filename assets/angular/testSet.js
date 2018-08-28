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
	$scope.translateOptions = {
		'category.name': {
			'en': 'name',
			'vn': 'name_vn'
		}
	};
	$scope.translate = function (val, opt) {
		var language = $scope.language;
		if (language != 'vn') {
			language = 'en';
		}
		if (typeof val == 'string')
			return $langMap[language][val] || val;
		if (typeof val == 'object') {
			var options = $scope.translateOptions[opt];
			if (language == 'vn') {
				return val[options.vn];
			} else {
				return val[options.en];
			}
		}
	}

	$scope.checkIsLogedIn = function () {
		return window.sessionUserId !== '';
	};

	$scope.checkIsPaid = function () {
		return window.checkPayment === '1';
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
				if (testSet.id == parseInt(u.searchParams.get('test_set_id'))) {
					$scope.selectTestSet(testSet);
					testSet.children.forEach(function(test){
						if (test.id == parseInt(u.searchParams.get('test_id'))) {
							$scope.selectTest(testSet, test);
						}
					});
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
		$scope.resetTest();
	};
	$scope.selectTest = function (testSet, test) {
		$scope.step = 'selectTest';
		$scope.selectedTestSet = testSet;
		$scope.selectedTest = test;
		$scope.resetTest();
	};
	$scope.doTest = function() {
		if(!$scope.checkIsLogedIn()) {
			alert('Bạn phải đăng nhập để bắt đầu làm bài');
			return false;
		}
		if($scope.selectedTest.trial == 0 && !$scope.checkIsPaid()) {
			alert('Bạn phải mua phần mềm mới có thể làm bài');
			return false;
		}
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
		$scope.clearCountDown();

		if($scope.selectedTest.trytest == 2) {
			$scope.showAnswer();
			$scope.$apply();
			return false;
		}

		$scope.totalQuestions = $scope.questions.length;
		$scope.totalRights = 0;
		$scope.questions.forEach(function (question) {
			if ($scope.isRightAnswer(question)) {
				$scope.totalRights++;
			}
		});
		$scope.totalWrongs = $scope.totalQuestions - $scope.totalRights;
		
		var userId = window.sessionUserId;
		var startTime = $scope.startTime;
		var duringTime = $scope.duringTime;
		var stopTime = serverTime + duringTime;
		var parentTest = $scope.selectedTestSet.id;
		var questions = [];
		$scope.questions.forEach(function (question) {
			var answerId = 0;
			if (typeof $scope.user_question_answers[question.id] !== 'undefined') {
				answerId = $scope.user_question_answers[question.id];
			}
			questions.push({
				questionId: question.id,
				answerId: answerId,
				status: $scope.isRightAnswer(question) ? 1 : 0
			});
		});
		if(1) {
			jQuery.ajax({
				type: 'post',
				url: FL_API_URL + '/test/updateUserBooks',
				data: {
					userId: userId,
					categoryId: categoryId,
					testId: $scope.selectedTest.id,
					parentTest: parentTest,
					exercise_number: 0,
					questions: questions,
					quantity_question: $scope.totalQuestions,
					mark: $scope.totalRights,
					startTime: startTime,
					duringTime: duringTime,
					stopTime: stopTime,
					lang: $scope.language || 'en'
				},
				success: function (resp) {
					jQuery('#resultModal').modal('show');
					jQuery.ajax({
						type: 'post',
						url: FL_API_URL + '/test/getRating',
						data: {
							mark: $scope.totalRights,
							duringTime: duringTime,
							testId: $scope.selectedTest.id
						},
						success: function(resp) {
							$scope.totalDoings = resp.total;
							$scope.rating = resp.rating;
							$scope.$apply();
						}
					});
				}
			});
		}
	};
	$scope.resetTest = function() {
		$scope.clearCountDown();
		$scope.showAnswerStep = false;
		$scope.finishStep = false;
		$scope.user_question_answers = {};
	};
	$scope.clearCountDown = function() {
		
		if (typeof $scope.countdownIntervalId !== 'undefined') {
			clearInterval($scope.countdownIntervalId);
			delete $scope.countdownIntervalId;
		}
	};
	$scope.showAnswer = function() {
		$scope.showAnswerStep = 'showAnswerStep';
	};

	$scope.user_question_answers = {};
	$scope.selectAnswer = function (question, answer) {
		$scope.user_question_answers[question.id] = answer.id;
	};

	$scope.isRightAnswer = function (question) {
		var rightId = null;
		question.ref_question_answers.forEach(function (answer) {
			if (answer.status == 1 || answer.status == '1') {
				rightId = answer.id;
			}
		});
		if (typeof $scope.user_question_answers[question.id] != 'undefined') {
			if (rightId == $scope.user_question_answers[question.id]) {
				return true;
			}
		}
		return false;
	};

	$scope.formatWritting = function(content) {
		content = content.replace(/\[i[\d]+\]/ig, '..............................................................');
		content = content.replace(/\[t[\d]+\]/ig, '<div style="word-wrap: break-word;">' + '..............................................................'.repeat(20) + '</div>');
		return content;
	};

	var question_audios = {};
	var current_sound = null;
	var current_sound_url = null;

	$scope.read_question = function (questionId) {
		var url = 'http://s1.nextnobels.com/3rdparty/Filemanager/source/practice/all/' + questionId + '.mp3';

		if (current_sound) {
			current_sound.pause();
			current_sound.currentTime = 0;
			current_sound.onended();
		}
		if (current_sound_url == url) {
			current_sound_url = null;
			return;
		} else {
			current_sound_url = url;
		}
		jQuery('#sound-' + questionId).removeClass('fa-volume-up').addClass('fa-volume-off');
		if (1 || typeof question_audios[url] == 'undefined') {
			sound = new Audio(url);
			sound.loop = false;
			question_audios[url] = sound;
			sound.onended = function () {
				jQuery('#sound-' + questionId).removeClass('fa-volume-off').addClass('fa-volume-up');
			};
		}
		current_sound = question_audios[url];
		fetch(url)
			.then(function () {
				question_audios[url].play();
			});

	}

}]);