flApp.controller('TestRankingController', ['$scope', function($scope) {
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
	$scope.tests = [];
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/common/getTests', 
		data: {
			categoryId: '354'
		},
		dataType: 'json',
		success: function(resp) {
			$scope.tests = resp;
			resp.forEach(function(test) {
				var u = new URL(location.href);
				if(test.id == parseInt(u.searchParams.get('test_id'))) {
					$scope.selectTest(test);
				}
			});
			$scope.$apply();
		}
	});
	$scope.step = 'selectTest';
	$scope.numberRow = 10;
	$scope.numberPage = 0;
	$scope.selectTest = function(test) {
		$scope.step = 'selectTest';
		$scope.selectedTest = test;
		$scope.selectPage(1);
	};

	$scope.selectPage = function(numberPage) {
		$scope.numberPage = numberPage - 1;
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/rating/getRating', 
			data: {
				testId: $scope.selectedTest.id,
				numberRow: $scope.numberRow,
				numberPage: $scope.numberPage
			},
			dataType: 'json',
			success: function(resp) {
				$scope.rankings = resp;
				$scope.pages = Math.ceil(resp.total / $scope.numberRow);
				$scope.$apply();
			}
		});
	};

	$scope.range = function(min, max, step) {
		step = step || 1;
		var input = [];
		for (var i = min; i <= max; i += step) {
			input.push(i);
		}
		return input;
	};

	$scope.pageRange = function(min, max, step) {
		step = step || 1;
		var input = [];
		for (var i = min; i <= max; i += step) {
			if(i > $scope.numberPage - 4 && i < $scope.numberPage + 6 || i == min || i == max)
			input.push(i);
		}
		return input;
	}

}]);