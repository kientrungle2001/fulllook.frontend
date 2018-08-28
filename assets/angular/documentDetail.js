flApp.controller('DocumentDetailController', ['$scope', function($scope) {
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
	var document_id = u.searchParams.get('document_id');
	jQuery.ajax({
		url: FL_API_URL + '/educationdocuments/'+document_id, success: function(doc) {
			$scope.doc = doc;
				jQuery.ajax({
					url: FL_API_URL + '/educationdocuments?categoryId=' + doc.categoryId, success: function(docs) {
						$scope.docs = docs;
						$scope.$apply();
					}
				});
				jQuery.ajax({
					url: FL_API_URL + '/corecategories/' + doc.categoryId, success: function(subject) {
						$scope.subject = subject;
						$scope.$apply();
					}
				});
			$scope.$apply();
		}
	});
	$scope.encode = function(str) {
		return encodeURI('http://s1.nextnobels.com' + str);
	};
}]);