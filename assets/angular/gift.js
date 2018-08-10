flApp.controller('GiftController', ['$scope', function($scope) {
	$scope.title = 'Công ty cổ phần giáo dục và phát triển trí tuệ sáng tạo Next Nobels';
	$scope.language = window.localStorage.getItem('language') || 'en';
	$scope.changeLanguage = function() {
		window.localStorage.setItem('language', $scope.language);
	}
	
	$scope.grade = window.localStorage.getItem('grade') || '5';
	$scope.changeGrade = function() {
		window.localStorage.setItem('grade', $scope.grade);
	};
	$scope.translate = function(val) {
		return $langMap[$scope.language][val] || val;
	};
	$scope.loadGifts = function() {
		jQuery.ajax({
			url: FL_API_URL + '/news/getGifts',
			dataType: 'json',
			success: function(gifts) {
				$scope.gifts = gifts;
				$scope.$apply();
			}
		});
	};
	$scope.step = 'init';
	$scope.loadCategories = function() {
		jQuery.ajax({
			url: FL_API_URL + '/corecategories?parent=137',
			dataType: 'json',
			success: function(categories) {
				$scope.categories = categories;
				$scope.$apply();
			}
		});
	};
	$scope.selectCategory = function(category) {
		$scope.step = 'selectCategory';
		$scope.selectedCategory = category;
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL + '/news/getNews',
			data: {
				categoryId: category.id
			},
			dataType: 'json',
			success: function(gifts) {
				$scope.categoryGifts = gifts;
				$scope.$apply();
			}
		});
	};
	$scope.selectGift = function(gift) {
		$scope.step = 'selectGift';
		$scope.selectedGift = gift;
	};
	$scope.loadGifts();
	$scope.loadCategories();
}]);