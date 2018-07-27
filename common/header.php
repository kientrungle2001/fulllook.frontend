<div class="full header">
    <nav id="topNav" class="navbar p-3 fixed-to navbar-expand-md ">
        <a class="navbar-brand mx-auto" href="#"><img src="/assets/images/logo.png" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
           <span class="navbar-toggler-icon"></span>
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
                        </select>
                    </li>
                    <li class="nav-item">
                         &nbsp;
                        <select class="select-top" ng-model="grade" ng-change="changeGrade()">
                            <option value="" disabled="disabled">{{translate('Select class')}}</option>
							<option value="3" ng-selected="grade=='3'">{{translate('Class')}} 3</option>
							<option value="4" ng-selected="grade=='4'">{{translate('Class')}} 4</option>
							<option value="5" ng-selected="grade=='5'">{{translate('Class')}} 5</option>
                        </select>
                    </li>
                    
                </ul>
                <ul class="navbar-nav menu-top2 ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><img src="/assets/images/cart.png"/> Mua ngay</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#"><img src="/assets/images/pay.png"/> Nạp thẻ</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#"><img src="/assets/images/dn.png"/> Đăng nhập</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#"><img src="/assets/images/dk.png"/> Đăng kí</a>
                    </li>
                </ul>
            
            </div>
        </div>
        
    </nav>

    <nav class="navbar navbar-expand-lg container main-menu mt-2 bg-white">
        <button class="navbar-toggler" data-target="#navigation" data-control="navigation" data-toggle="collapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navigation">
            <ul class="nav navbar-nav">
                <li class="nav-item active">
                    <a href="#" class="nav-link">Giới thiệu</a>
                </li>                   
                <li class="nav-item">
                    <a href="#" class="nav-link">Luyện tập các môn</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Ôn luyện tổng hợp</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Đề thi Trần Đại Nghĩa</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Thi thử Trần Đại Nghĩa</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Kinh nghiệm</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Giải trí</a>
                </li>
            </ul>
        </div>
    </nav>
</div>
