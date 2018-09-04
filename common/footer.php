<div id="footer" class="full">
	<div class="footer-gradient">
		<div class="footer-content container">
			<div class="row">
				<div class="col-12 col-md-6">
					<img class="mt-40" src="/assets/images/logofooter2.png" />
					<div class="footer-text">
						Địa chỉ: Nhà số 6, Ngõ 115 Nguyễn Khang, Cầu Giấy, Hà Nội<br/>
						Website: Nextnobels.com<br/>
						Điện thoại: (04)8585 2525<br/>
						Hotline: 0936 738 986
					</div>
				</div>
				<div class="col-12 col-md-2">
					<div class="link-footer">
						<a class="text-uppercase" href="#">Về chúng tôi </a>
						<a href="http://nextnobels.com/ho-so-cong-ty">Hồ sơ công ty </a>
						<a href="http://nextnobels.com/tam-nhin-su-menh-cong-ty">Tầm nhìn, sứ mệnh </a>
						<a href="http://nextnobels.com/nguoi-sang-lap-cong-ty">Người sáng lập</a>
					</div>
					
				</div>
				<div class="col-12 col-md-2">
					<div class="link-footer">
						<a class="text-uppercase" href="#">Truyền thông </a>
						<a href="http://nextnobels.com/bao-chi">Báo chí </a>
						<a href="http://nextnobels.com/fulllook-phan-mem-hoc-song-ngu-anh-viet">Truyền hình </a>
						<a href="#">Full Look</a>
					</div>	
				</div>
				<div class="col-12 col-md-2">
					<div class="link-footer">
						<a class="text-uppercase" href="#">Tin tức </a>
						<a href="http://nextnobels.com/tin-cong-ty">Tin công ty </a>
						<a href="#">Sự kiện nổi bật </a>
						<a href="http://nextnobels.com/thoi-su-hoc-duong">Thời sự học đường</a>
					</div>		
				</div>
			</div>
		</div>
	</div>
	
	<!--img class="img-fluid" src="/assets/images/footer.png" />
	<div class="footer-bottom text-center">
		Bản quyền thuộc về Công Ty Cổ Phần Giáo Dục Phát Triển Trí Tuệ 
	</div-->
</div>

<div class="modal" id="bannerModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="text-uppercase text-center m-0" style=" font-size: 32px; width: 100%; color: #19c3c1;font-family: iCiel;">Next Nobels</h5>
        <button onclick="closePopup();" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="relative">
			<img src="/assets/images/uudai.png" class="img-fluid" alt="">
			<a style="top: 75px; right: 75px;" class="btn btn-warning absolute" href="/news_detail.php?id=198">Xem chi tiết</a>
		</div>
      </div>
      
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script>
		$.noConflict();
	</script>
	<script src="/assets/js/bootstrap.bundle.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular.min.js" integrity="sha256-ruP2+uorUblSeg7Tozk75u8TaSUKRCZVvNV0zRGxkRQ=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular-sanitize.min.js" integrity="sha256-FnMl43xSx3jHmcs7t2LJ3htfsCeo99XORPvzOVQN/tw=" crossorigin="anonymous"></script>
	<script src="/assets/array.js"></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>

	<script src="/assets/angular/app.js"></script>
	<script language="JavaScript">
		<!--
		var dictionaries = "ev_ve";
		// -->
	</script>
	<script language="JavaScript1.2" src="http://vndic.net/js/vndic.js" type='text/javascript'></script>


	<script>
		jQuery(function(){
			jQuery('#homeslider').carousel({
		      interval: 10000,
		    });
			jQuery(".nav-item.dropdown").hover(            
				function() {
					jQuery(this).addClass('show');
					jQuery(this).find('.dropdown-menu').css('top', '95%');
					jQuery(this).find('.dropdown-menu').addClass('show');        
				},
				function(){
					jQuery(this).removeClass('show');
					jQuery(this).find('.dropdown-menu').removeClass('show'); 
				}
			);
		});
	    
		jQuery(document).ready(function() {
			if(sessionStorage.getItem('closePopup') != '1') {
				if(window.location.pathname == '' || window.location.pathname == '/' )
				jQuery('#bannerModal').modal('show');
			}
		});
		function closePopup() {
			jQuery('#bannerModal').modal('hide');
			sessionStorage.setItem('closePopup', '1');
		}
	</script>

	<script type="text/javascript">
		(function(ng){
	        'use strict';
	        var app = angular.module('ngJaxBind', []);

	        app.directive("mathjaxBind", function() {
	            return {
	                restrict: "A",
	                controller: ["$scope", "$element", "$attrs",
	                    function($scope, $element, $attrs) {
	                        $scope.$watch($attrs.mathjaxBind, function(texExpression) {
								$element.html(texExpression);
								if(typeof MathJax != 'undefined'){
									MathJax.Hub.Queue(["Typeset", MathJax.Hub, $element[0]]);
								}
	                        });
	                    }]
	            };
	        });
		}(angular));
	</script>



	
	<script type="text/x-mathjax-config"> 
		MathJax.Hub.Config({
			showMathMenu: false,
			tex2jax: {
		    	inlineMath: [['[\/','\/]'], ['\\(','\\)']],
		    	processEscapes: false
		    }
		}); 
	</script>
	
