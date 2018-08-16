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
	$scope.translate = function(val) {
		return $langMap[$scope.language][val] || val;
	}
	$scope.questions = [];
	$scope.totalQuestion = 0;
	jQuery.ajax({
		url: FL_API_URL +'/aqs/getQuestions',
		type: 'post',
		data: {pageNumber: 1}, 
		success: function(resp) {
			$scope.questions = resp;
			$scope.totalQuestion = resp.length;
			$scope.$apply();
		}
	});
	$scope.addQuestion = function(e){
		var userId = jQuery('#userId').val();
		if(!userId){
			alert('Đăng nhập để gửi câu hỏi');
			return false;
			
		}else{
			var username = jQuery('#username').val();
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
}]);