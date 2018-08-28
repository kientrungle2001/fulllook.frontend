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

	$scope.register = {};
	$scope.doRegister = function (url) {
		if (!$scope.register.username || !$scope.register.name || !$scope.register.password || !$scope.register.repassword || !$scope.register.phone || !$scope.register.email || !$scope.register.sex || !$scope.register.areacode) {
			return false;
		}
		$scope.register.url = url;
		if ($scope.register.password == $scope.register.repassword) {
			jQuery.post(FL_API_URL + '/register/userRegister', $scope.register, function (resp) {
				$scope.register.success = resp.success;
				$scope.register.message = resp.message;
				$scope.$apply();
				if (resp.success) {
					window.location = resp.url;
				}
			});

		} else {
			$scope.register.success = 0;
			$scope.register.message = "Mật khẩu tài khoản nhập lại không chính xác";

		}

	};
	$scope.login = {};
	$scope.doLogin = function (url) {
		if (!$scope.login.username || !$scope.login.password) {
			return false;
		}
		$scope.login.url = url;
		jQuery.post(FL_API_URL + '/login/userLogin', $scope.login, function (resp) {
			$scope.login.success = resp.success;
			$scope.login.message = resp.message;
			$scope.$apply();
			if (resp.success) {
				window.location = resp.url;
			}

		});
	};
	// get AreaCode
	$scope.areaCodes = [];
	jQuery.ajax({
		url: FL_API_URL + '/register/getAreaCode', success: function (resp) {
			$scope.areaCodes = resp;
			$scope.$apply();
		}
	});
	
}]);