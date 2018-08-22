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
	$scope.userDetail= {};
	$scope.editUser = function(){
		if(!$scope.userDetail){
			return false;
		}
		$scope.userDetail.userId= sessionUserId;
		jQuery.post(FL_API_URL+'/history/editUser', $scope.userDetail, function(resp) {
			
		  	if(resp) {		  		
		  		$scope.success = resp.success;
		  		$scope.message ='<strong>' +resp.message+ '</strong>';
		  		$scope.$apply();
		  	}
		});		
	};
	$scope.editPassword = {};
	$scope.changePassword = function(){
		if(!$scope.editPassword.newPassword || !$scope.editPassword.reNewPassword || !$scope.editPassword.oldPassword){
			return false;
		}
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
	$scope.createObjectURL = function(object){
	    return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
	};
	$scope.revokeObjectURL= function(url) {
	    return (window.URL) ? window.URL.revokeObjectURL(url) : window.webkitURL.revokeObjectURL(url);
	};
	$scope.inputFile= 'Choose file';
	$scope.editAvatar= {};
	$scope.changeAvatar = function(){		
	    var userAvatar = document.getElementById("avatar");
		if(!userAvatar){
			return false;
		}		
		if(userAvatar.files.length) {
			if ('name' in userAvatar.files[0]) {
                var txt = "name: " + userAvatar.files[0].name;
                $scope.inputFile= txt;
            }	       
			var reader = new FileReader();
			reader.onloadend = function() {
			  	var base64_avatar = reader.result;
			    //console.log(base64_avatar);
			    jQuery.post('/upload.php', {avatar: base64_avatar, user_id: sessionUserId }, function(resp) {
			    	//console.log(resp);
			    	if(resp){
			    		$scope.editAvatar.userId= sessionUserId;
			    		$scope.editAvatar.urlAvatar= FL_URL +'/upload/' + resp ;
			    		jQuery.post(FL_API_URL+'/history/editAvatar', $scope.editAvatar, function(resp) {				
						  	if(resp) {		  		
						  		$scope.editAvatar.success = resp.success;
						  		$scope.editAvatar.message ='<strong>' +resp.message+ '</strong>';
						  		$scope.$apply();
						  	}
						});
			    	}
			    });

			}
	  		reader.readAsDataURL(userAvatar.files[0]);

	        
	    }
	    		
		
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
	
	$scope.getSubject = function(){
		var subjects= new Array();
		subjects[51] = 'Mathematics';
		subjects[52] = 'Science';
		subjects[164] = 'English';
		subjects[157] = 'Literature';
		subjects[53] = 'History';
		subjects[50] = 'Geography';
		subjects[87] = 'Life Skills';
		subjects[59] = 'Social Understanding';
		subjects[88] = 'Observing Listening';
		subjects[54] = 'Language And Communication';
		$scope.subjects = new Array();
		$scope.subjects = subjects;
		
	};
	$scope.getSubject();
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
	// On luyen tong hop
	$scope.testQuantity = 0;
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/history/countTests', 
		data: {
			userId: sessionUserId,
			categoryId: 1412
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
				categoryId: 1412,
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
	// On luyen tieng Anh
	$scope.testEQuantity = 0;
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/history/countTests', 
		data: {
			userId: sessionUserId,
			categoryId: 1411
		},
		dataType: 'json',
		success: function(resp) {
			var quantity = Math.ceil(resp/20);
		    var result= [];
		    for(i =0; i< quantity; i++){
		      result.push(i);
		    }
			$scope.testEQuantity = result;
			$scope.$apply();
		}
	});
	$scope.testEnglish = [];	
	$scope.testEPage = function(page){
		$scope.testEPageSelected = page;
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/history/getTests', 
			data: {
				userId: sessionUserId,
				categoryId: 1411,
				numberPage: page
			},
			dataType: 'json',
			success: function(resp) {
				$scope.testEnglish = resp;
				$scope.$apply();
			}
		});
	};
	$scope.testEPage(0);
	// Thi thu Tran Dai Nghia
	$scope.tdnTestQuantity = 0;
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/history/countTests', 
		data: {
			userId: sessionUserId,
			categoryId: 1413
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
				categoryId: 1413,
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
	// De thi chinh thuc cac nam
	$scope.tdnRealTestQuantity = 0;
	jQuery.ajax({
		type: 'post',
		url: FL_API_URL +'/history/countTests', 
		data: {
			userId: sessionUserId,
			categoryId: 1414
		},
		dataType: 'json',
		success: function(resp) {
			var quantity = Math.ceil(resp/20);
		    var result= [];
		    for(i =0; i< quantity; i++){
		      result.push(i);
		    }
			$scope.tdnRealTestQuantity = result;
			$scope.$apply();
		}
	});
	$scope.tdnRealTests = [];	
	$scope.tdnRealTestPage = function(page){
		$scope.tdnRealTestPageSelected = page;
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/history/getTests', 
			data: {
				userId: sessionUserId,
				categoryId: 1414,
				numberPage: page	
			},
			dataType: 'json',
			success: function(resp) {
				$scope.tdnRealTests = resp;
				$scope.$apply();
			}
		});
	};
	$scope.tdnRealTestPage(0);
}]);