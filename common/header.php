<div class="full header">
    <nav id="topNav" class="navbar p-3 fixed-to navbar-expand-md ">
        <a class="navbar-brand mx-auto" href="/"><img src="/assets/images/logo.png" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
           <i class="fa fa-bars text-white" aria-hidden="true"></i>
        </button>
        <div class="container">
            <div class="navbar-collapse fs14 cl-green collapse">
                <ul class="navbar-nav menu-top1">
                    <li class="nav-item">
                        <img src="/assets/images/hotline.png"/> Hotline: 0965 90 91 95
                    </li>
                    <li class="nav-item">
                        &nbsp;
                        <select class="select-top" ng-model="language" ng-change="changeLanguage()">
                            <option value="" ng-selected="language==''" disabled="disabled">{{translate('Select language')}}</option>
							<option value="en" ng-selected="language=='en'">English</option>
							<option value="vn" ng-selected="language=='vn'">Tiếng Việt</option>
                            <option value="ev" ng-selected="language=='ev'">Song ngữ</option>
                        </select>
                    </li>
                    <!-- <li class="nav-item">
                         &nbsp;
                        <select class="select-top" ng-model="grade" ng-change="changeGrade()">
                            <option value="" disabled="disabled">{{translate('Select class')}}</option>
                                                <option value="3" ng-selected="grade=='3'">{{translate('Class')}} 3</option>
                                                <option value="4" ng-selected="grade=='4'">{{translate('Class')}} 4</option>
                                                <option value="5" ng-selected="grade=='5'">{{translate('Class')}} 5</option>
                        </select>
                    </li> -->
                    
                </ul>
                <ul class="navbar-nav menu-top2 ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/about.php#guide"><img src="/assets/images/cart.png"/> Mua ngay</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="/about.php#paycardfl"><img src="/assets/images/pay.png"/> Nạp thẻ</a>
                    </li>
                    <?php if(!isset($_SESSION['userId'])) :?>
                     <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#loginRegisterModal"><img src="/assets/images/dn.png"/> Đăng nhập</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#loginRegisterModal"><img src="/assets/images/dk.png"/> Đăng kí</a>
                    </li>
                <?php else: ?>
                    <li class="nav-item dropdown">
                        <span class="navbar-text">Xin chào </span> <a class="btn btn-primary text-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><?php echo $_SESSION['name'] ?></span> </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="/profile.php" class="dropdown-item">Trang cá nhân</a>
                            <a href="/profile.php#luyentap" class="dropdown-item">Lịch sử học tập</a>
                            <div class="dropdown-divider"></div>
                            <a href="/logout.php" class="dropdown-item">Đăng xuất</a>
                        </div>
                    </li>
                <?php endif ?>
                </ul>
            
            </div>
        </div>
        
    </nav>

    <nav class="navbar fix-menu navbar-expand-lg container main-menu mt-2 bg-white">
        <button class="navbar-toggler" data-target="#navigation" data-control="navigation" data-toggle="collapse">
            <i class="fa fa-bars text-primary" aria-hidden="true"></i>
        </button>
        <div class="collapse navbar-collapse" id="navigation">
            <ul class="nav navbar-nav">
				<li class="nav-item">
                    <a href="/" class="nav-link">Trang chủ</a>
                </li>
                <li class="nav-item dropdown">
                    <a href="/about.php" data-toggle="dropdown" class="nav-link dropdown-toggle">Về phần mềm</a>
                    <ul class="dropdown-menu">
						<li style="padding-left: 25px;"><a href="/about.php">Giới thiệu</a></li>
						<li><a href="/about.php#guide">Hướng dẫn mua</a></li>
						<li><a href="/news_list.php?id=147">Hướng dẫn sử dụng</a></li>
					</ul>
                </li>
                <li class="nav-item dropdown">
					<a href="#" data-toggle="dropdown" class="dropdown-toggle nav-link">Chọn Ngôn Ngữ</a>
					<ul class="dropdown-menu">
						<li style="padding-left: 25px;" ng-click="language='en';selectLanguage('en')"><a href="#">Tiếng Anh</a></li>
						<li><a href="#" ng-click="language='vn';selectLanguage('vn')">Tiếng Việt</a></li>
						<li><a href="#" ng-click="language='ev';selectLanguage('ev')">Song Ngữ</a></li>
					</ul>
				</li>
                
                <li class="nav-item">
                    <a href="/#practice" class="nav-link">Luyện các môn</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#tonghop">Luyện tiếng anh</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#tonghop">Luyện tổng hợp</a>
                </li>
                <li class="nav-item">
                    <a href="/#thithu" class="nav-link">Thi thử Trần Đại Nghĩa</a>
                </li>
                <?php if(0): ?>
                <li class="nav-item">
                    <a href="/document.php" class="nav-link">Kinh nghiệm</a>
                </li>
                <li class="nav-item">
                    <a href="/gift.php" class="nav-link">Giải trí</a>
                </li>
                <?php endif; ?>
                
            </ul>
        </div>
    </nav>
</div>
<?php require 'login.php';?>