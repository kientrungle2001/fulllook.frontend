flApp.controller('AboutController', ['$scope', function($scope) {
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
	$scope.tabs = {
		proposal: `Mục đích`,
		authors: `Đội ngũ biên soạn và cố vấn`,
		structure: `Cấu trúc phần mềm`,
		advantage: `Tiện ích`,
		guide: `Hướng dẫn mua sản phẩm`
	};
	$scope.banks = [
	{
		image: 'http://s1.nextnobels.com/default/skin/nobel/themes/story/media/vietin.jpg',
		name: 'Ngân hàng TMCP công thương Việt Nam(Vietinbank)',
		account: '110000145741',
		owner: 'CÔNG TY CỔ PHẦN GIÁO DỤC PHÁT TRIỂN TRÍ TUỆ VÀ SÁNG TẠO NEXT NOBELS',
		branch: 'Thăng Long'
	},
	{
		image: 'http://s1.nextnobels.com/default/skin/nobel/themes/story/media/vietin.jpg',
		name: 'Ngân hàng TMCP công thương Việt Nam(Vietinbank)',
		account: '110000145741',
		owner: 'CÔNG TY CỔ PHẦN GIÁO DỤC PHÁT TRIỂN TRÍ TUỆ VÀ SÁNG TẠO NEXT NOBELS',
		branch: 'Thăng Long'
	}
	];
}]);