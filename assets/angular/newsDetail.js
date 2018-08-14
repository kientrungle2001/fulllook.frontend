flApp.controller('NewsDetailController', ['$scope', function($scope) {
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
	$scope.news = {};
	$scope.category = {};
	$scope.newsRelates = [];
	$scope.getNews = function(newId){
		jQuery.ajax({
			url: FL_API_URL +'/cmsnews/'+newId,
			success: function(resp) {
				$scope.news = resp;
				jQuery.ajax({
					url: FL_API_URL +'/corecategories/'+resp.categoryId,
					success: function(resp){
						$scope.category = resp;
						jQuery.ajax({
							url: FL_API_URL +'/news/getNews',
							type: 'post',
							data: {categoryId: resp.id}, 
							success: function(resp) {
								$scope.newsRelates = resp;
								$scope.$apply();
							}
						});
						$scope.$apply();
					}
				});
				
				$scope.$apply();
			}
		});
		
	}
	var u = new URL(location.href);
	var newId = u.searchParams.get('id');

	$scope.getNews(newId);
	
}]);