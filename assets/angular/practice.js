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
		$scope.step = 'selectExercise';
		$scope.selectedExerciseNum = exerciseNum;
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
				$scope.questions = resp;
				$scope.$apply();
			}
		});
	};
	$scope.selectAnswer = function(question, answer) {
		console.log(question, answer);
	};
	
	$scope.selectVocabulary = function(vocabulary) {
		$scope.action = 'vocabulary';
		$scope.selectedVocabulary = vocabulary;
	};
}]);