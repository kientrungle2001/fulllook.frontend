flApp.controller('HomeController', ['$scope', function($scope) {
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
	/*$scope.doRegister = function(){
		jQuery.post(FL_API_URL+'/register/userRegister',$scope.register, function(data, textStatus, xhr) {
			$scope.statusRegister = data;
			$scope.$apply();
		});
				
	}*/
	/*$scope.doLogin = function() {
		
		jQuery.post(FL_API_URL+'/login/userLogin', $scope.login, function(resp) {			
			$scope.$apply();
		});
	}*/
	// get AreaCode
	$scope.areaCodes = [];
	jQuery.ajax({url: FL_API_URL +'/register/getAreaCode', success: function(resp) {
		$scope.areaCodes = resp;
		$scope.$apply();
	}});

	$scope.subjects = [];
	jQuery.ajax({url: FL_API_URL +'/common/getSubjects', success: function(resp) {
		$scope.subjects = resp;
		$scope.$apply();
	}});
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
			$scope.$apply();
		}
	});
	$scope.testSets = [];
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/common/getTestSets', 
		data: {
			categoryId: '383'
		},
		dataType: 'json',
		success: function(resp) {
			$scope.testSets = resp;
			$scope.$apply();
		}
	});
	
	$scope.realTestSets = [];
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/common/getTestSets', 
		data: {
			categoryId: '383'
		},
		dataType: 'json',
		success: function(resp) {
			$scope.realTestSets = resp;
			$scope.$apply();
		}
	});
	
	// advice
	$scope.advice = {};
	$scope.registerForAdvice = function() {
		console.log($scope.advice);
	};
}]);