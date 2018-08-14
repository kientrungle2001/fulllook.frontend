flApp.controller('DocumentListController', ['$scope', function($scope) {
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
	var subject_id = u.searchParams.get('subject_id');
	$scope.subject = {};
	$scope.docs = [];
	jQuery.ajax({url: FL_API_URL +'/corecategories/'+subject_id, success: function(resp) {
		$scope.subject = resp;
		jQuery.ajax({url: FL_API_URL +'/educationdocuments?categoryId='+$scope.subject.id+'&type=document&status=1', success: function(docs) {
			$scope.docs = docs;
			$scope.$apply();
		}});
		$scope.$apply();
	}});
}]);