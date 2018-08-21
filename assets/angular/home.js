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
	$scope.register = {};
	$scope.doRegister = function(url){
		if(!$scope.register.username || !$scope.register.name || !$scope.register.password || !$scope.register.repassword || !$scope.register.phone || !$scope.register.email || !$scope.register.sex || !$scope.register.areacode){
			return false;
		}		
		$scope.register.url = url;
		if($scope.register.password == $scope.register.repassword){
			jQuery.post(FL_API_URL+'/register/userRegister',$scope.register, function(resp) {
				$scope.register.success = resp.success;
				$scope.register.message = resp.message;
				$scope.$apply();
				if(resp.success) {
					window.location = resp.url;
				}
			});
					
		}else{
			$scope.register.success =0;
			$scope.register.message ="Mật khẩu tài khoản nhập lại không chính xác";
			
		}
		
	};
	$scope.login = {};
	$scope.doLogin = function(url) {
		if(!$scope.login.username || !$scope.login.password){
			return false;
		}
		$scope.login.url = url;
		jQuery.post(FL_API_URL+'/login/userLogin', $scope.login, function(resp) {
			$scope.login.success = resp.success;
			$scope.login.message = resp.message;
			$scope.$apply();
			if(resp.success) {
				window.location = resp.url;
			}
			
		});
	};
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
			categoryId: '1412'
		},
		dataType: 'json',
		success: function(resp) {
			$scope.tests = resp;
			$scope.$apply();
		}
	});
	$scope.testEnghlish = [];
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/common/getTests', 
		data: {
			categoryId: '1411'
		},
		dataType: 'json',
		success: function(resp) {
			$scope.testEnghlish = resp;
			$scope.$apply();
		}
	});
	$scope.testSets = [];
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/common/getTestSets', 
		data: {
			categoryId: '1413'
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
			categoryId: '1414'
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