flApp.controller('NewsController', ['$scope', function($scope) {
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
	$scope.newsLists = [];
	$scope.category = {};
	$scope.getNews = function(categoryId){
		jQuery.ajax({
			url: FL_API_URL +'/corecategories/'+categoryId,
			success: function(resp) {
				$scope.category = resp;
				$scope.$apply();
			}
		});
		jQuery.ajax({
			url: FL_API_URL +'/news/getNews',
			type: 'post',
			data: {categoryId: categoryId}, 
			success: function(resp) {
				$scope.newsLists = resp;
				$scope.$apply();
			}
		});
	}
	var u = new URL(location.href);
	var categoryId = u.searchParams.get('id');

	$scope.getNews(categoryId);
	
}]);