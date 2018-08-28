flApp.controller('DocumentOnthiController', ['$scope', function($scope) {
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
	var u = new URL(location.href);
	var subject_id = u.searchParams.get('subject_id');
	$scope.subject = {};
	$scope.newsList = [];
	jQuery.ajax({url: FL_API_URL +'/corecategories/'+subject_id, success: function(resp) {
		$scope.subject = resp;
		jQuery.ajax({
			url: FL_API_URL +'/cmsnews?categoryId='+$scope.subject.id+'&status=1', 
			success: function(news) {
				$scope.newsList = news;
				$scope.$apply();
			}
		});
		$scope.$apply();
	}});
}]);