<!-- Modal -->
<div class="modal fade" id="loginRegisterModal" tabindex="-1" role="dialog" aria-labelledby="loginRegisterModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Đăng nhập - Đăng ký</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	  
		<div class="row">
			<div class="col-lg-6">
				<h2>Đăng nhập</h2>
				<div class="card card-container">
					<form class="form-signin form" action="<?php echo FL_API_URL ?>/login/userLogin" method="Post">
						<input type="hidden" name="url" value="<?php echo FL_URL  ?>">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Tên đăng nhập" required autofocus name="username">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Mật khẩu" required name="password">
						</div>

						<div class="form-group">
						<div id="remember" class="checkbox">
							<label>
								<input type="checkbox" value="remember-me"> Nhớ tài khoản
							</label>
						</div>
						</div>
						<div class="form-group">
							<button class="btn btn-lg btn-primary btn-block btn-signin" type="submit" >Đăng nhập</button>
						</div>
					</form><!-- /form -->
					<a href="#" class="forgot-password">
						Quên mật khẩu?
					</a>
				</div><!-- /card-container -->
			  
			
			</div>
			<div class="col-lg-6">
				<h2>Đăng ký</h2>
				<div class="card card-container">
					<form class="form-signin form" action="<?php echo FL_API_URL ?>/register/userRegister" method="Post">
						<input type="hidden" name="url" value="<?php echo FL_URL  ?>">
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Tên đăng nhập" name="username" required>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Họ và tên" name="name" required autofocus>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<input type="password" class="form-control" placeholder="Mật khẩu" name="password" required>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<input type="password" class="form-control" placeholder="Nhập lại Mật khẩu" name="repassword" required>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Email" name="email" required>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Số điện thoại" name="phone" required>
								</div>
							</div>
						</div>
						<div class="form-group">
							<input type="date" class="form-control" name="birthday" placeholder="Ngày sinh">
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">						
								      <select name="sex"  class="form-control" placeholder="giới tính" >
								        <option value="1">Nam</option>
								        <option value="0">Nữ</option>
								      </select>
								</div>
							</div>
							<div class="col-md-6">
								<select name="areacode" class="form-control" placeholder="tỉnh thành" >
							        <option ng-repeat="areaCode in areaCodes "  value="{{areaCode.id}}">{{areaCode.name}}</option>
							        
							      </select>
							</div>
						</div>
						<div class="form-group">
							<button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Đăng ký</button>
						</div>
						<div class="form-group">
						Bằng việc đăng ký, bạn đã đồng ý với điều khoản sử dụng và chính sách bảo mật của Next Nobels
						</div>
						
					</form><!-- /form -->
				</div><!-- /card-container -->
			</div>
		</div>
	  </div>
    </div>
  </div>
</div>
<style>
.profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
.card-container {
	padding: 15px;
}
</style>