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
					<form class="form-signin form">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Tên đăng nhập" required autofocus>
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Mật khẩu" required>
						</div>
						<div class="form-group">
						<div id="remember" class="checkbox">
							<label>
								<input type="checkbox" value="remember-me"> Nhớ tài khoản
							</label>
						</div>
						</div>
						<div class="form-group">
							<button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Đăng nhập</button>
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
					<form class="form-signin form">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Tên đăng nhập" required autofocus>
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Mật khẩu" required>
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Nhập lại Mật khẩu" required>
						</div>
						<div class="form-group">
							<button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Đăng ký</button>
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