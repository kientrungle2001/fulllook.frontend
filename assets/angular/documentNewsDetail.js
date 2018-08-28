flApp.controller('DocumentNewsDetailController', ['$scope', function($scope) {
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
	$scope.news = {};
	$scope.newsRelates = [];
	$scope.getNews = function(newId){
		jQuery.ajax({
			url: FL_API_URL +'/cmsnews/'+newId,
			success: function(resp) {
				$scope.news = resp;
				jQuery.ajax({
					url: FL_API_URL +'/news/getNews',
					type: 'post',
					data: {categoryId: resp.categoryId}, 
					success: function(resp) {
						$scope.newsRelates = resp;
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