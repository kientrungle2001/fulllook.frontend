flApp.controller('DocumentController', ['$scope', function($scope) {
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
	$scope.subjects = [];
	$scope.subjectDocuments = {};
	jQuery.ajax({url: FL_API_URL +'/common/getSubjects', success: function(resp) {
		$scope.subjects = resp;
		resp.forEach(function(subject) {
			jQuery.ajax({url: FL_API_URL +'/educationdocuments?categoryId='+subject.id+'&type=document&status=1&limit=2', success: function(resp) {
				$scope.subjectDocuments[subject.id] = resp;
				$scope.$apply();
			}});
		});
		$scope.$apply();
	}});
}]);