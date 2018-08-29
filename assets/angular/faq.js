flApp.controller('FaqController', ['$scope', function($scope) {
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
	$scope.questions = [];
	jQuery.ajax({
		url: FL_API_URL +'/aqs/getQuestions',
		type: 'post',
		data: {pageNumber: 1}, 
		success: function(resp) {
			$scope.questions = resp;
			$scope.$apply();
		}
	});
	$scope.addQuestion = function(id){
		if(!userId){
			alert('Đăng nhập để gửi câu hỏi');
			return false;
			
		}else{
			var question = jQuery('#question').val();
			if(question.length > 0){
				jQuery.ajax({
					url: FL_API_URL +'/aqs/createQuestions',
					type: 'post',
					data: {userId: userId, username: username, question: question}, 
					success: function(resp) {
						window.location.reload();
					}
				});
			}else{
				alert('Nhập nội dung câu hỏi!');
				jQuery('#question').focus();
				return false;
			}
			
		}
	}
	$scope.addAnswer = function(questionId){
		var answer = jQuery('#answer'+questionId).val();
		if(answer.length > 0){
			jQuery.ajax({
				url: FL_API_URL +'/aqs/createQuestionAnswers',
				type: 'post',
				data: {userId: userId, username: username, questionId: questionId, answer: answer}, 
				success: function(resp) {
					window.location.reload();
				}
			});
		}else{
			alert('Nhập nội dung câu trả lời!');
			jQuery('#answer'+questionId).focus();
			return false;
		}
	}
	$scope.pageSize = 6;
	$scope.curentPage = 1;
	$scope.pages = [];
	$scope.totalQuestion = 0;
	$scope.getTotalQuestion = function(){
		jQuery.ajax({
			url: FL_API_URL +'/aqs/countQuestions',
			type: 'post',
			success: function(resp) {
				$scope.totalQuestion = resp;
				$scope.pagination($scope.pageSize, resp);
				$scope.$apply();

			}
		});
	}
	$scope.subjects = [];
	jQuery.ajax({url: FL_API_URL +'/common/getSubjects', success: function(resp) {
		$scope.subjects = resp;
		$scope.$apply();
	}});
	
	$scope.getTotalQuestion();
	$scope.pagination = function(pageSize, total){

		if(total > pageSize){
			var page = total / pageSize;
			page = Math.ceil(page);
			for(var i =1; i < page; i++){
				$scope.pages.push(i);
			}
		}
	}
	$scope.pageAjax = function(that, page){
		jQuery.ajax({
			url: FL_API_URL +'/aqs/getQuestions',
			type: 'post',
			data: {pageNumber: page}, 
			success: function(resp) {
				$scope.questions = resp;
				$scope.curentPage = page;
				$scope.$apply();
			}
		});
		return false;
	}

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