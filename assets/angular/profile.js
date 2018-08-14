flApp.controller('ProfileController', ['$scope', function($scope) {
	$scope.title = 'Công ty cổ phần giáo dục và phát triển trí tuệ sáng tạo Next Nobels';
	$scope.language = window.localStorage.getItem('language') || 'en';
	$scope.changeLanguage = function() {
		window.localStorage.setItem('language', $scope.language);
	}
	$scope.editInfor = 0;
	$scope.editInforUser =function(){
		$scope.editInfor = 1;
		
	}
	$scope.areaCodes = [];
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/register/getAreaCode', 
		data: {			
		},
		dataType: 'json',
		success: function(resp) {
			$scope.areaCodes = resp;			
			$scope.$apply();
		}
	});
	$scope.grade = window.localStorage.getItem('grade') || '5';
	$scope.changeGrade = function() {
		window.localStorage.setItem('grade', $scope.grade);
	};
	$scope.translate = function(val) {
		return $langMap[$scope.language][val] || val;
	};
	// edit user
	$scope.editUser = function(){
		$scope.userDetail.userId= sessionUserId;
		jQuery.post(FL_API_URL+'/history/editUser', $scope.userDetail, function(resp) {
			
		  	if(resp) {		  		
		  		$scope.success = resp.success;
		  		$scope.message ='<strong>' +resp.message+ '</strong>';
		  		$scope.$apply();
		  	}
		});		
	};
	$scope.changePassword = function(){
		if($scope.editPassword.newPassword != $scope.editPassword.reNewPassword){
			$scope.editPassword.success = 0;
		  	$scope.editPassword.message ='<strong> Nhập lại mật khẩu mới chưa đúng</strong>';
		  	$scope.$apply();
		}else{
			$scope.editPassword.userId= sessionUserId;
			jQuery.post(FL_API_URL+'/history/editPassword', $scope.editPassword, function(resp) {
				
			  	if(resp) {		  		
			  		$scope.editPassword.success = resp.success;
			  		$scope.editPassword.message ='<strong>' +resp.message+ '</strong>';
			  		$scope.$apply();
			  	}
			});
		}
			
	};
	$scope.editAvatar = function(){
		
	};

	$scope.userDetail = [];
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/history/getUser', 
		data: {
			userId: sessionUserId
		},
		dataType: 'json',
		success: function(resp) {
			$scope.userDetail = resp;
			$scope.userDetail.birthday = new Date($scope.userDetail.birthday);
			$scope.$apply();
		}
	});
	// Lessons
	$scope.lessonQuantity = 0;
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/history/countLessons', 
		data: {
			userId: sessionUserId			
		},
		dataType: 'json',
		success: function(resp) {
			var quantity = Math.ceil(resp/20);
		    var result= [];
		    for(i =0; i< quantity; i++){
		      result.push(i);
		    }
			$scope.lessonQuantity = result;
			$scope.$apply();
		}
	});
	$scope.lessons = [];

	$scope.lessonPage = function(page){
		$scope.lessonPageSelected = page;
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/history/getLessons', 
			data: {
				userId: sessionUserId,
				numberPage: page
			},
			dataType: 'json',
			success: function(resp) {
				$scope.lessons = resp;				
				$scope.$apply();			
			}
		});
	};
	$scope.lessonPage(0);
	// Tests
	$scope.testQuantity = 0;
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/history/countTests', 
		data: {
			userId: sessionUserId,
			compability: 0
		},
		dataType: 'json',
		success: function(resp) {
			var quantity = Math.ceil(resp/20);
		    var result= [];
		    for(i =0; i< quantity; i++){
		      result.push(i);
		    }
			$scope.testQuantity = result;
			$scope.$apply();
		}
	});
	$scope.tests = [];	
	$scope.testPage = function(page){
		$scope.testPageSelected = page;
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/history/getTests', 
			data: {
				userId: sessionUserId,
				compability: 0,
				numberPage: page
			},
			dataType: 'json',
			success: function(resp) {
				$scope.tests = resp;
				$scope.$apply();
			}
		});
	};
	$scope.testPage(0);
	// Tests Tran Dai Nghia
	$scope.tdnTestQuantity = 0;
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/history/countTests', 
		data: {
			userId: sessionUserId,
			compability: 1
		},
		dataType: 'json',
		success: function(resp) {
			var quantity = Math.ceil(resp/20);
		    var result= [];
		    for(i =0; i< quantity; i++){
		      result.push(i);
		    }
			$scope.tdnTestQuantity = result;
			$scope.$apply();
		}
	});
	$scope.tdnTests = [];	
	$scope.tdnTestPage = function(page){
		$scope.tdnTestPageSelected = page;
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/history/getTests', 
			data: {
				userId: sessionUserId,
				compability: 1,
				numberPage: page	
			},
			dataType: 'json',
			success: function(resp) {
				$scope.tdnTests = resp;
				$scope.$apply();
			}
		});
	};
	$scope.tdnTestPage(0);
}]);