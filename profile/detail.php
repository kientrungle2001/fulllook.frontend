
<div class="full practice pb-5">
	<div class="container mt-4 mb-3">
		<div class="main-shadow full p-3">
			<div class="full  p-3 mb-3">
				<h4 class="text-center t-weight">THÔNG TIN CÁ NHÂN</h4>				
				<div class="row">
					<div class="col-md-4">
						<img src="<?php echo FL_API_URL?>{{userDetail.avatar}}" alt="avatar">
						<br>
						<button type="button" class="btn btn-primary">Đổi avatar</button>
					</div>
					<div class="col-md-8" >
						<!--show infor -->
						<div class="full" ng-hidden="editInfor">
							<ul class="list-unstyled" >
								<li><strong>Họ và tên:</strong> {{userDetail.name}}</li>
								<li><strong>Nick name:</strong> {{userDetail.username}}</li>
								<li><strong>Ngày sinh:</strong> {{userDetail.birthday | date:"MM/dd/yyyy"}}</li>
								<li ng-hidden="userDetail.sex"><strong>Giới tính:</strong> Nữ</li>
								<li ng-show="userDetail.sex"><strong>Giới tính:</strong> Nam</li>
								<li><strong>Địa chỉ:</strong> {{userDetail.address}}</li>
								<li><strong>Trường:</strong>{{userDetail.schoolname}} </li>
								<li><strong>Lớp:</strong> {{userDetail.classname}}</li>
								<li><strong>Thành phố:</strong>{{userDetail.areacode}}</li>
														
								<li ng-if="<?php echo $_SESSION['checkPayment']; ?>"><strong>Thời hạn sản phẩm từ ( <?php echo $_SESSION['paymentDate']; ?> đến <?php echo $_SESSION['expiredDate']; ?> )</strong></li>
								<button type="button" class="btn btn-primary" ng-click="editInforUser()">Sửa thông tin</button>
							</ul>							
							
						</div>
						<!--edit infor -->
						<div class="full bg-light" ng-show="editInfor" >
							<!--edit infor -->
							<form >
							  <div class="form-row">
							    <div class="form-group col-md-4">
							      <label for="name">Họ và Tên(*) :</label>
							      <input type="text" class="form-control" ng-model="userDetail.name" placeholder="Họ và Tên">
							    </div>
							    <div class="form-group col-md-3">
							      <label for="phone">Điện thoại (*) :</label>
							      <input type="text" class="form-control" ng-model="userDetail.phone" placeholder="Điện thoại">
							    </div>
							    <div class="form-group col-md-3">
							      <label for="inputState">Giới tính: </label>
							      <select ng-model="userDetail.sex"  class="form-control" >
							        <option value="1" ng-selected="userDetail.sex==1">Nam</option>
							        <option value="0" ng-selected="userDetail.sex==0">Nữ</option>
							      </select>
							    </div>
							  </div>
							  <div class="form-row">
							  	<div class="form-group col-md-4">
									<label for="inputAddress2">Ngày sinh: </label>
							    	<input type="date" class="form-control" ng-model="userDetail.birthday" placeholder="Ngày sinh" required >
								</div>
							  	<div class="form-group col-md-6">
								    <label for="inputAddress">Địa chỉ :</label>
								    <input type="text" class="form-control" ng-model="userDetail.address" placeholder="Quận 1- TPHCM">
								</div>
								
							  </div>
							  <div class="form-row">
							    <div class="form-group col-md-4">
							      <label for="school">Trường :</label>
							      <input type="text" class="form-control" ng-model="userDetail.schoolname" placeholder="Trường học">
							    </div>
							    <div class="form-group col-md-3">
							      <label for="class">Lớp :</label>
							      <input type="text" class="form-control" ng-model="userDetail.classname" placeholder="Lớp học">
							    </div>
							    <div class="form-group col-md-3">
							      <label for="input">Tỉnh(TP): </label>
							      <select ng-model="userDetail.areacode"class="form-control">
							        <option value="{{areaCode.id}}" ng-repeat="areaCode in areaCodes" ng-selected="areaCode.id==userDetail.areacode">{{areaCode.name}}</option>						        
							      </select>
							    </div>
							  </div>
							  <div class="form-group alert alert-success" ng-show="success" ng-bind-html="message"></div>
							  <button ng-click="editUser()" class="btn btn-primary">Cập nhật</button>
							  <button type="button" ng-click="cancelEditUser()" class="btn btn-secondary">Hủy</button>
							</form>	
						</div>

						<!--edit password -->
						<div class="full bg-light" ng-show="editInfor" >
							<form>
							  <div class="form-row">
							    <div class="form-group col-md-4">
							      <label for="name">Mật khẩu cũ(*) :</label>
							      <input type="password" class="form-control" ng-model="editPassword.oldPassword"  placeholder="Mật khẩu cũ">
							    </div>
							    
							  </div>
							  <div class="form-row">
							  	<div class="form-group col-md-4">
							      <label for="password">Mật khẩu mới (*) :</label>
							      <input type="password" class="form-control" ng-model="editPassword.newPassword"  placeholder="Mật khẩu mới">
							    </div>
							    <div class="form-group col-md-4">
							      <label for="password">Nhập lại mật khẩu mới (*) :</label>
							      <input type="password" class="form-control" ng-model="editPassword.reNewPassword" placeholder="Mật khẩu mới">
							    </div>							    
							  </div>
							  <div class="form-group alert" ng-class="{'alert-danger': editPassword.success==0, 'alert-success': editPassword.success==1}" ng-show="editPassword.message" ng-bind-html="editPassword.message">

							 </div>
							  <button ng-click="changePassword()" class="btn btn-primary">Cập nhật</button>
							  <button type="button" class="btn btn-secondary">Hủy</button>
							</form>
						</div>
						<!--edit avatar -->
						<div class="full bg-light" ng-show="editInfor" >
							<form enctype="multipart/form-data">				
								<div class="custom-file">
								  <input type="file" ng-model="editAvatar.avatar" class="custom-file-input" id="customFile">
								  <label class="custom-file-label" for="customFile">Choose file</label>
								</div>
								<button ng-click="editAvatar()" class="btn btn-primary">Cập nhật</button>
								  <button type="button" class="btn btn-secondary">Hủy</button>
							</form>
						</div>
						
					</div>
				</div>
			</div>
			<div class="full bg-light p-3 mb-3">
				<ul class="nav nav-tabs" id="myTab" role="tablist">
				  <li class="nav-item">
				    <a class="nav-link active" id="luyentap-tab" data-toggle="tab" href="#luyentap" role="tab" aria-controls="luyentap" aria-selected="true">Luyện tập</a>
				  </li>
				  <li class="nav-item">
				    <a class="nav-link" id="deluyentap-tab" data-toggle="tab" href="#deluyentap" role="tab" aria-controls="deluyentap" aria-selected="false">Ôn luyện tổng hợp</a>
				  </li>
				  <li class="nav-item">
				    <a class="nav-link" id="thithu-tab" data-toggle="tab" href="#thithu" role="tab" aria-controls="thithu" aria-selected="false">Thi thử Trần Đại Nghĩa</a>
				  </li>			  
				</ul>
			</div>
			
			<div class="tab-content pt-2  mb-5" id="myTabContent">
			  	<div class="tab-pane fade show active bg-light" id="luyentap" role="tabpanel" aria-labelledby="luyentap-tab" >
			  		<h5>Bài luyện tập các môn học</h5>
			  		<table class="table table-bordered">
					  <thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Môn học</th>
					      <th scope="col">Chủ đề</th>
					      <th scope="col">Bài</th>
					      <th scope="col">Điểm</th>
					      <th scope="col">Ngôn ngữ</th>
					      <th scope="col">Thời gian làm bài</th>
					      <th scope="col">Ngày</th>
					      
					    </tr>
					  </thead>
					  <tbody>
					    <tr ng-repeat="lesson in lessons">
					      <th scope="row">{{$index +1}}</th>
					      <td ng-bind="lesson.categoryId"></td>
					      <td ng-bind="lesson.topic.name"></td>
					      <td><a href="/book.php?id={{lesson.id}}">Bài {{lesson.exercise_number}}</a></td>
					      <td ng-bind="lesson.mark"></td>
					      <td ng-bind="lesson.lang"></td>
					      <td ng-bind="lesson.duringTime"></td>
					      <td >{{lesson.startTime| date:'MM/dd/yyyy @ h:mma'}}</td>
					    </tr>					    
					    
					  </tbody>
					</table>
					<nav aria-label="...">
					  <ul class="pagination">
					    <li class="page-item" ng-class="{'active': lessonPageSelected === 0}">
					      <a class="page-link" ng-click="lessonPage(0)"> Trang đầu </a>
					    </li>
					    <li class="page-item" ng-repeat="lessonItem in lessonQuantity" ng-class="{'active': lessonPageSelected == lessonItem}">
					    	<a class="page-link" ng-click="lessonPage(lessonItem)">{{lessonItem+1}}</a>
					    </li>
					    			    
					    
					  </ul>
					</nav>
			  	</div>
			  	<div class="tab-pane fade bg-light" id="deluyentap" role="tabpanel" aria-labelledby="deluyentap-tab">
			  		Đề luyện tập tổng hợp
			  		<table class="table table-bordered">
					  <thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Đề thi</th>					      
					      <th scope="col">Điểm</th>
					      <th scope="col">Ngôn ngữ</th>
					      <th scope="col">Thời gian làm bài</th>
					      <th scope="col">Ngày</th>
					      
					    </tr>
					  </thead>
					  <tbody>
					    <tr ng-repeat="test in tests">
					      <th scope="row">{{$index +1}}</th>
					      <td><a href="/book.php?id={{test.id}}">{{test.testId.name}}</a></td>
					      <td ng-bind="test.mark"></td>
					      <td ng-bind="test.lang"></td>
					      <td ng-bind="test.duringTime"></td>
					      <td >{{test.startTime| date:'MM/dd/yyyy @ h:mma'}}</td>
					      
					    </tr>					    
					    
					  </tbody>
					</table>
					<nav aria-label="...">
					  <ul class="pagination">
					    <li class="page-item " ng-class="{'active': testPageSelected === 0}">					      
					      	<a class="page-link"  ng-click="testPage(0)">Trang đầu</a>      
					  	  
					    </li>
					    <li class="page-item"  ng-class="{'active': testPageSelected === testitem}" ng-repeat="testitem in testQuantity">
					    	<a class="page-link"  ng-click="testPage(testitem)">{{testitem+1}}</a>
					    </li>
					    
					  </ul>
					</nav>
			  	</div>
			  	<div class="tab-pane fade bg-light" id="thithu" role="tabpanel" aria-labelledby="thithu-tab" >
			  		Đề thi thử
			  		<table class="table table-bordered">
					  <thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Đề thi</th>					      
					      <th scope="col">Điểm</th>
					      <th scope="col">Ngôn ngữ</th>
					      <th scope="col">Thời gian làm bài</th>
					      <th scope="col">Ngày</th>
					      
					    </tr>
					  </thead>
					  <tbody>
					    <tr ng-repeat="tdnTest in tdnTests">
					      <th scope="row">{{$index +1}}</th>
					      <td><a href="/book.php?id={{tdnTest.id}}">{{tdnTest.testId.name}}</a></td>
					      <td ng-bind="tdnTest.mark"></td>
					      <td ng-bind="tdnTest.lang"></td>
					      <td ng-bind="tdnTest.duringTime"></td>
					      <td >{{tdnTest.startTime| date:'MM/dd/yyyy @ h:mma'}}</td>
					      
					    </tr>					    
					    
					  </tbody>
					</table>
					<nav aria-label="...">
					  <ul class="pagination">
					    <li class="page-item" ng-class="{'active': tdnTestPageSelected === 0}">					      
					      	<a class="page-link"  ng-click="tdnTestPage(0)">Trang đầu</a>      
					  	  
					    </li>
					    <li class="page-item" ng-class="{'active': tdnTestPageSelected === tdnTestitem}" ng-repeat="tdnTestitem in tdnTestQuantity">
					    	<a class="page-link"   ng-click="tdnTestPage(tdnTestitem)">{{tdnTestitem +1}}</a>
					    </li>					   
					    
					  </ul>
					</nav>
				</div>
				
			</div>
		</div>
	</div>
</div>