flApp.controller('UserBookController', ['$scope', function($scope) {
	$scope.title = 'Công ty cổ phần giáo dục và phát triển trí tuệ sáng tạo Next Nobels';
	$scope.language = window.localStorage.getItem('language') || 'en';
	$scope.changeLanguage = function() {
		window.localStorage.setItem('language', $scope.language);
	};	
	$scope.grade = window.localStorage.getItem('grade') || '5';
	$scope.changeGrade = function() {
		window.localStorage.setItem('grade', $scope.grade);
	};
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
	$scope.lessons = [];
	$scope.arrquestionIds = [];
	$scope.userAnswers = new Array();
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/history/getDetailLesson', 
		data: {
			userId: sessionUserId,
			userBookId: userBookId				
		},
		dataType: 'json',
		success: function(resp) {			
			$scope.lessons = resp;
			var answers  =resp.ref_userbook_answers;
			answers.forEach( function(item) {				
				$scope.userAnswers[item.questionId]=item.answerId ;
			});	
			//console.log($scope.userAnswers);		
			var questions = resp.ref_userbook_answers;	
			questions.forEach( function(question) {
				$scope.arrquestionIds.push(question.questionId);
				//$scope.userAnswers['question.questionId'] = $scope.userAnswers['question.answerId'];
			});	
			$scope.loadQuestionAnswers($scope.arrquestionIds, $scope.userAnswers);								
			$scope.$apply();
		}
	});
	$scope.loadQuestionAnswers = function(questionIds, userAnswers){
		$scope.questions = [];
		$scope.trueAnswers = new Array();
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/history/getQuestionAnswers', 
			data: {
				questionIds: questionIds			
			},
			dataType: 'json',
			success: function(resp) {			
				$scope.questions = resp;
				var questions = resp;
				questions.forEach( function(item) {
					var arrAnswers = item.ref_question_answers; 
					var trueAnswer =  arrAnswers.filter(function(answer) {
					  return answer.status === 1;
					})[0].id;
					$scope.trueAnswers[item.id]= trueAnswer;
				});												
				$scope.$apply();
			}
		});
	};
	
}]);