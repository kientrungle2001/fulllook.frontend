flApp.controller('PracticeController', ['$scope', function($scope) {
	$scope.title = 'Công ty cổ phần giáo dục và phát triển trí tuệ sáng tạo Next Nobels';
	$scope.subject_id = subject_id;
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
	
	$scope.parseTranslate = function(str) {
		if(str) {
			str = str.replace(/\[start\](.*)\[end\]/g, `<button class="btn btn-primary" data-toggle="collapse" onclick="jQuery(this).next().collapse('toggle')">Dịch</button><div class="collapse"><div class="card card-body">$1</div></div>`);
			str = str.replace(/\[fix\](.*)\[endfix\]/g, `<span class="btn btn-default fa fa-volume-up" onclick="read_question(this,'/3rdparty/Filemanager/source/audiovocabulary/$1.mp3');"></span>`);
			str = str.replace(/\[audio\](.*)\[endaudio\]/g, `$1<span class="btn btn-default fa fa-volume-up" onclick="read_question(this,'/3rdparty/Filemanager/source/audiovocabulary/$1.mp3');"></span>`);			
			return str;
		};
		return '';
	};
	
	$scope.topics = [];
	$scope.subject = {};
	
	$scope.loadSubject = function() {
		jQuery.ajax({
			type: 'get',
			url: FL_API_URL +'/corecategories/' + subject_id, 
			dataType: 'json',
			success: function(resp) {
				$scope.subject = resp;
				$scope.$apply();
			}
		});	
	};
	
	$scope.loadTopics = function() {
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/subject/getTopics', 
			data: {
				subject_id: subject_id
			},
			dataType: 'json',
			success: function(resp) {
				$scope.topics = buildBottomTree(resp);
				$scope.$apply();
			}
		});	
	};
	
	$scope.loadVocabularies = function() {
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/subject/getVocabularies', 
			data: {
				subject_id: subject_id
			},
			dataType: 'json',
			success: function(resp) {
				$scope.vocabularies = buildBottomTree(resp);
				$scope.$apply();
			}
		});	
	};
	
	$scope.loadSubject();
	$scope.loadTopics();
	$scope.loadVocabularies();
	
	$scope.selectTopic = function(topic, parentTopic) {
		if(typeof $scope.practiceIntervalId !== 'undefined') {
			clearInterval($scope.practiceIntervalId);
		}
		$scope.action = 'practice';
		$scope.step = 'selectTopic';
		$scope.selectedExerciseNum = null;
		$scope.selectedTopic = topic;
		$scope.selectedParentTopic = parentTopic;
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/subject/getExercises', 
			dataType: 'json',
			data: {
				subject_id: subject_id,
				topic_id: topic.id
			},
			success: function(resp) {
				$scope.exerciseNums = [];
				for(var i = 0; i < resp; i++) {
					$scope.exerciseNums.push(i);
				}
				$scope.$apply();
			}
		});
	};
	$scope.selectedExerciseNum = null;
	$scope.selectExercise = function(exerciseNum) {
		if(typeof $scope.practiceIntervalId !== 'undefined') {
			clearInterval($scope.practiceIntervalId);
		}
		$scope.step = 'selectExercise';
		$scope.selectedExerciseNum = exerciseNum;
		$scope.remaining = {
			minutes: 15,
			seconds: 0
		};
	};
	$scope.startPractice = function() {
		
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/subject/getExerciseQuestions', 
			dataType: 'json',
			data: {
				subject_id: subject_id,
				topic_id: $scope.selectedTopic.id,
				exercise_number: $scope.selectedExerciseNum + 1
			},
			success: function(resp) {
				$scope.step = 'startPractice';
				$scope.practiceStep = 'startPractice';
				$scope.showAnswersStep = 'startPractice';
				$scope.questions = resp;
				$scope.user_question_answers = {};
				$scope.$apply();
				$scope.practiceIntervalId = setInterval(function() {
					if($scope.remaining.seconds == 0) {
						if($scope.remaining.minutes == 0) {
							$scope.finishPractice();
						} else {
							$scope.remaining.minutes--;
							$scope.remaining.seconds = 59;
						}
					} else {
						$scope.remaining.seconds--;
					}
					$scope.$apply();
				}, 1000);
			}
		});
	};
	$scope.user_question_answers = {};
	$scope.selectAnswer = function(question, answer) {
		$scope.user_question_answers[question.id] = answer.id;
		console.log($scope.user_question_answers);
	};
	
	
	$scope.selectVocabulary = function(vocabulary) {
		$scope.action = 'vocabulary';
		$scope.selectedVocabulary = vocabulary;
	};
	$scope.finishPractice = function() {
		if(typeof $scope.practiceIntervalId !== 'undefined') {
			clearInterval($scope.practiceIntervalId);
		}
		console.log($scope.user_question_answers);
		$scope.practiceStep = 'finishPractice';
		$scope.totalQuestions = $scope.questions.length;
		$scope.totalRights = 0;
		$scope.questions.forEach(function(question) {
			if($scope.isRightAnswer(question)) {
				$scope.totalRights++;
			}
		});
		$scope.totalWrongs = $scope.totalQuestions - $scope.totalRights;
		jQuery('#resultModal').modal('show');
		var userId = 8;
		var startTime = serverTime;
		var duringTime = 15 * 60 - ($scope.remaining.minutes * 60 + $scope.remaining.seconds);
		var stopTime = serverTime + duringTime;
		var questions = [];
		$scope.questions.forEach(function(question){
			var answerId = 0;
			if(typeof $scope.user_question_answers[question.id] !== 'undefined') {
				answerId = $scope.user_question_answers[question.id];
			}
			questions.push({
				questionId: question.id,
				answerId: answerId,
				status: $scope.isRightAnswer(question) ? 1: 0
			});
		});
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL + '/subject/updateUserBooks',
			data: {
				userId:  userId,
				subject_id: $scope.subject.id,
				topic_id: $scope.selectedTopic.id,
				exercise_number: $scope.selectedExerciseNum,
				questions: questions,
				quantity_question: $scope.totalQuestions,
				mark: $scope.totalRights,
				startTime: startTime,
				duringTime: duringTime,
				stopTime: stopTime
			},
			success: function(resp) {
				
			}
		});
	};

	$scope.getQuestion = function(questionId) {
		var question = null;
		$scope.questions.forEach(function(q) {
			if(q.id == questionId || parseInt(q.id) == parseInt(questionId)) {
				question = q;
			}
		});
		return question;
	};
	
	$scope.showAnswers = function() {
		$scope.showAnswersStep = 'showAnswers';
	};
	
	$scope.getExplaination = function(question) {
		var explaination = null;
		question.ref_question_answers.forEach(function(answer) {
			if(answer.status == 1 || answer.status == '1' ) {
				explaination = answer.recommend;
			}
		});
		if(!explaination || explaination == '') {
			explaination = question.explaination;
		}
		return explaination;
	};
	$scope.report = {};
	$scope.reportError = function(question) {
		console.log($scope.report.content);
		console.log(question);
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