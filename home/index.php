<div id="practice" class="full">
	<div class="container">
		<div style="margin-bottom: 15px;" class="text-center fs40 heading">
		Luyện tập các môn
		</div>
	</div>

	<div class="practice-section container">
		<div class="box-practice text-center" ng-repeat="subject in subjects">
			<a href="/detail.php?subject_id={{subject.id}}" class="subjectclick" data-subject="{{subject.id}}" data-alias="{{subject.name}}" data-class="5">
				<div class="white text-uppercase relative">
					<div class="full">
						<img ng-src="http://s1.nextnobels.com{{subject.img}}" alt="{{subject.name}}" class=" img-fluid center-block">
					</div>
					<div class="top20 text-center full absolute" ng-show="language=='en'">{{subject.name}}</div>
					<div class="top20 text-center full absolute" ng-show="language=='vn'">{{subject.name_vn}}</div>
				</div>
			</a>
		</div>
	</div>

</div>
<img src="/assets/images/background1.png" alt="" class="full" />

<div id="ontienganh" class="full">
	<div class="container">
		<div class="text-center heading mt-2 mb-4 text-white  fs40">
		Ôn luyện Tiếng anh
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-12 col-md-2" ng-repeat="testE in testEnghlish">
			<a href="/test.php?test_id={{testE.id}}&category_id=1411">
				<div class="btn ltth full mb-3 btn-primary" ng-show="language=='en'">{{testE.name_en}}</div>
				<div class="btn ltth full mb-3 btn-primary" ng-show="language=='vn'">{{testE.name}}</div>
			</a>
			</div>
		</div>
	</div>
	
</div>	


<!--end practice -->
<div id="tonghop" class="full">
	<div class="container">
		<div class="text-center heading mt-2 mb-4 text-white  fs40">
		Ôn luyện tổng hợp
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-12 col-md-2" ng-repeat="test in tests">
			<a href="/test.php?test_id={{test.id}}&category_id=1412">
				<div class="btn ltth full mb-3 btn-primary" ng-show="language=='en'">{{test.name_en}}</div>
				<div class="btn ltth full mb-3 btn-primary" ng-show="language=='vn'">{{test.name}}</div>
			</a>
			</div>
		</div>
	</div>
	
</div>	
<img src="/assets/images/background2.png" alt="" class="full" />



<!--end tonghop -->
<div id="thithu" class="full">
	<div class="container">
		<div class="text-center heading mt-2 mb-4 text-white">
			Thi thử Trần Đại Nghĩa 
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="box-thithu bg-white full-xs" ng-repeat="testSet in testSets">
				<h3 class="text-center head-box"><a href="/testSet.php?category_id=1413&test_set_id={{testSet.id}}">{{testSet.name}}</a></h3>
				<div class="box-body">
					<div class="link-box text-center">
						<a href="" class="text-color">
							Phần trắc nghiệm 
						</a>
					</div>
												
					<div class="link-box text-center">
						<a href="" class="text-color">
							Phần tự luận					
						</a>
					</div>
												
				</div>	
			</div>
		</div>
		
	</div>
</div>
<!--end thithu -->	
<div class="full bg3">
	<div class="text-white text-center mt-2 mb-3  heading">
		Đề thi Trần Đại Nghĩa các năm
	</div>
	<div class="container">
		<div class="row">
			<div class="box-tdn bg-white full-xs" ng-repeat="testSet in realTestSets">
				<h3 class="text-center head-tdn"><a href="/testSet.php?category_id=1414&test_set_id={{testSet.id}}">{{testSet.name}}</a></h3>
				<div class="box-body">
					<div class="link-box text-center">
						<a href="" class="text-color">
							Phần trắc nghiệm 
						</a>
					</div>
												
					<div class="link-box text-center">
						<a href="" class="text-color">
							Phần tự luận					
						</a>
					</div>
												
				</div>	
			</div>
		</div>
	</div>		
</div>
<!--end-->
<img src="/assets/images/lydo.png" alt="" class="full" />

<div class="full bg4">
	<div class="container">
		<div class="row">
			<div class="col-12 col-md-6">
				<h3 class="heading text-uppercase text-center mb-3 text-white">đăng ký tư vấn</h3>
				<div class="form-group mb-4">
				    <input type="text" ng-model="advice.name" class="form-control input" placeholder="Họ tên">
				    
				</div>
				<div class="form-group mb-4">
				    <input type="text" ng-model="advice.phone" class="form-control input" placeholder="Số điện thoại">
				    
				</div>
				<div class="form-group mb-4">
				    <input type="email" ng-model="advice.email" class="form-control input" placeholder="Email">
				    
				</div>
				<div class="form-group text-center">
					<div class="btn dangki" ng-click="registerForAdvice()">Đăng kí <img style="max-width: 25px; float: right;" src="/assets/images/button.png"/></div>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<h3 class="heading text-uppercase mb-3 text-center text-white">Học phí</h3>
				<div class="box-hocphi full text-center">
					<div class="hocphi full">
						Học và ôn thi bằng tiếng Việt,<br>  
						tiếng anh và song ngữ  <br> 
						Chỉ <span class="fs29">600.00</span> VNĐ <br> 
						CHO<span class="fs29">1 năm</span> sử dụng<br> 
					</div>
					
					<a href="#" class="buynow full">
						Mua ngay
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
<!--end-->

<div class="full bg5">
	<div class="text-white text-center mt-5 mb-3  heading">
		người dùng nói gì về Full Look?
	</div>
	<div class="full  d-none d-sm-block">
		<div class="container">
			<div id="slidebootstrap" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">	
					<div class="carousel-item active">
						<div class="row">
							<div class="col-md-6 col-12">
							 <div class="thumbnail relative">
							 
								 <p class="text-justify"> Một phần mềm bắt kịp xu hướng đổi mới của nền Giáo dục, đó là xu hướng dạy học, kiểm tra đánh giá theo hướng phát triển năng lực của học sinh. Cái hay nhất của nó là tất cả những nội dung ấy được diễn đạt bằng thứ tiếng Anh vừa đơn giản, vừa chuẩn mực.											 </p>
								 <i class="fa absolute care white fa-sort-desc" aria-hidden="true"></i>
							  </div>
								
								<div class="media">
								  <div class="media-left">
									<a href="#">
									  
										<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
											<img class="media-object" src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/11.jpg" alt="Sandy" style="width:80px;">
										</div>
									</a>
								  </div>
								  <div class="media-body white text-left">
									<b>Chuyên gia Sandra</b><br> (Giảng viên khoa quốc tế, đại học quốc gia HN)					  </div>
								</div>
							 
							</div>

							<div class="col-12 col-md-6">
							<div class="thumbnail relative">
		      
								<p class="text-justify">
								Các câu hỏi, bài tập của Full Look được thiết kế rất phù hợp với định hướng PHÁT TRIỂN NĂNG LỰC TOÀN DIỆN cho HS Tiểu học, cập nhật với xu hướng đánh giá năng lực trên thế giới. Từ đó, giúp HS có thể kết nối, vận dụng những kiến thức được học trong nhà trường vào xử lí những tình huống thực tiễn trong cuộc sống.
								</p>
								<i class="fa absolute care white fa-sort-desc" aria-hidden="true"></i>
							</div>
							
							
							<div class="media">
							  <div class="media-left">
								<a href="#">
								  
									<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
										<img class="media-object" src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/hoanguyen.jpg" alt="Sandy" style="width:80px;">
									</div>
								</a>
							  </div>
							  <div class="media-body white text-left">
								(TS. Nguyễn Thị Hảo – Chuyên viên nghiên cứu, Viện Khoa học Giáo dục Việt Nam chuyên gia lĩnh vực đọc hiểu trong chương trình đánh giá HS Quốc tế PISA)
							  </div>
							</div>
							
						</div>

						</div>
						
						
						
						
					</div>
					
					<div class="carousel-item">
						<div class="row">
						<div class="col-12 col-md-6">
							<div class="thumbnail relative">
		      
								<p class="text-justify">Lần đầu tiên ở Việt Nam có phần mềm Song ngữ Anh - Việt cho mọi môn học. Đó là xu hướng của giáo dục hiện đại và nhiều trường cấp 2  trên toàn quốc đã thí điểm mô hình này. Việc xây dựng chương trình song ngữ cho cấp Tiểu học là bước đà để các em có thể bắt nhịp với xu hướng mới khi lên cấp 2, giúp các em từng bước tiếp cận kiến thức mới, tránh áp lực dồn tích, tạo nền tảng vững chắc cho quá trình tìm kiếm học bổng và quá trình hoà nhập với môi trường học tập quốc tế sau này.						</p>
								<i class="fa absolute care white fa-sort-desc" aria-hidden="true"></i>
							</div>
							
							
							<div class="media">
							  <div class="media-left">
								<a href="#">
								  
									<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
										<img class="media-object" src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/12.jpg" alt="Sandy" style="width:80px;">
									</div>
								</a>
							  </div>
							  <div class="media-body white text-left">
								<b>Tiến Sĩ Nguyễn Thanh Tùng</b> <br> (Đại học Sư Phạm Hà Nội)					  </div>
							</div>
							
						</div>
						
						<div class="col-12 col-md-6">
							<div class="thumbnail relative">
								
		      
								<p class="text-justify">Đây là chương trình được biên soạn tâm huyết, công phu. Các con có thể ôn tổng hợp kiến thức các môn bằng tiếng Việt, đồng thời được trau dồi, cải thiện tiếng Anh của mình ở hầu hết các môn học và một số lĩnh vực đời sống, xã hội. Đây là chương trình thực sự hữu ích, nhằm bổ trợ kiến thức và văn hoá bằng cả tiếng Việt và tiếng Anh, hỗ trợ người học rất nhiều trong quá trình học tập và giao tiếp.						</p>
								<i class="fa absolute care white fa-sort-desc" aria-hidden="true"></i>
							</div>
							
							<div class="media">
							  <div class="media-left">
								<a href="#">
								  
									<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
										<img class="media-object" src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/cong.png" alt="cong" style="width:80px;">
									</div>
								</a>
							  </div>
							  <div class="media-body white text-left">
								<b>Anh Vũ Đức Công</b> <br>(Cán bộ cao cấp tại Đại sứ quán Úc, Hà Nội <br> PH bé Vũ Minh Hạnh, HS lớp 5B, Trường Tiểu học Quan Hoa, Hà Nội)					  </div>
							</div>
							
						</div>
						
						</div>
					</div>
					
					<div class="carousel-item">
						<div class="row">
						<div class="col-sm-5 offset-md-1 col-md-5 col-xs-12">
						  <div class="thumbnail relative">
							
							<p class="text-justify">Đây là cách học Song ngữ cho mọi môn học lần đầu tiên ở Việt Nam. Với 3 chế độ hiển thị ngôn ngữ (Tiếng Anh, Tiếng Việt hoặc Song ngữ) tuỳ người dùng lựa chọn, tôi thấy đây là phần mềm có khả năng ứng dụng cao với nhiều đối tượng HS khác nhau trên toàn quốc. Nội dung các câu hỏi gần gũi thực tế, cập nhật và thiết thực, đặc biệt có sức khơi mở tư duy cho HS.					</p>
							<i class="fa absolute care white fa-sort-desc" aria-hidden="true"></i>
						  </div>
						  
						  <div class="media">
							  <div class="media-left">
								<a href="#">
								  
									<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
										<img class="media-object" src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/chinga.png" alt="Sandy" style="width:80px;">
									</div>
								</a>
							  </div>
							  <div class="media-body white text-left">
								<b>Chị Trần Việt Nga</b> <br> (Báo Giáo dục &amp; Thời đại)					  </div>
							</div>
						  
						  
						</div>
						<div class="col-sm-5  col-md-5 col-xs-12">
							<div class="thumbnail relative">
								
		      
								<p class="text-justify"> Mình đã cho con dùng. Bạn ấy thích tiếng Anh, cho nên khi làm bài, vừa được ôn tập kiến thức các môn học khác lại được tích hợp với tiếng Anh, bạn ấy có động lực hẳn lên.<br>
								
								</p>
								<i class="fa absolute care white fa-sort-desc" aria-hidden="true"></i>
							</div>
							
							<div class="media">
							  <div class="media-left">
								<a href="#">
								  
									<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
										<img class="media-object" src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/chihuyen.jpg" alt="Sandy" style="width:80px;">
									</div>
								</a>
							  </div>
							  <div class="media-body white text-left">
								<b>Chị Trần Thu Huyền</b><br>(Phụ huynh HS Lương Trần Ngọc Minh, Trường Tiểu học Vinschool, Hà Nội)					  </div>
							</div>
							
							
						</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row">
						<div class="col-12 col-md-6">
						  <div class="thumbnail relative">
							
							<p class="text-justify">Mỗi buổi tối mẹ giao cho con học 1 file từ vựng tiếng Anh trong phần mềm . Con học trong khoảng 10 - 15 phút trước khi đi ngủ. Hôm học Toán – Tiếng Anh, hôm học Khoa học – Tiếng Anh; Hôm học môn Văn…Tuy vậy, con vẫn chưa đủ tự tin để học các môn bằng chế độ tiếng Anh. Con thường xuyên ôn tập mọi môn học bằng chế độ Song ngữ (Câu hỏi các môn học được viết bằng tiếng Anh, dịch Tiếng Việt bên dưới)</p>
							<i class="fa absolute care white fa-sort-desc" aria-hidden="true"></i>
						  </div>
						  
						  <div class="media">
							  <div class="media-left">
								<a href="#">
								  
									<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
										<img class="media-object" src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/anh.png" alt="anh" style="width:80px;">
									</div>
								</a>
							  </div>
							  <div class="media-body white text-left">
								<b>Nguyễn Nguyên Anh</b><br>(HS Trường Tiểu học Lý Tự Trọng, TP Thanh Hoá)					  </div>
							</div>
						  
						</div>
						
						<div class="col-12 col-md-6">
							<div class="thumbnail relative">
								
		      
								<p class="text-justify"> Con thích nhất là học Toán, Khoa học và Hiểu biết xã hội trong chương trình này. Hiện tại con mới dùng được chế độ ngôn ngữ tiếng Việt nhưng con thường xuyên chọn học mục Từ vựng tiếng Anh của các môn này. Con hy vọng từ giờ đến hè con sẽ tích luỹ đủ vốn từ để có thể chuyển sang chế độ học các môn bằng Tiếng Anh						</p>
								<i class="fa absolute care white fa-sort-desc" aria-hidden="true"></i>
							</div>
							
							 <div class="media">
							  <div class="media-left">
								<a href="#">
								  
									<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
										<img class="media-object" src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/duc.png" alt="duc" style="width:80px;">
									</div>
								</a>
							  </div>
							  <div class="media-body white text-left">
								<b>Nguyễn Minh Đức</b> <br>(HS lớp 5H, TH Dịch Vọng A, Hà Nội.)					  </div>
							</div>
							
						</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row">
						<div class="col-md-6 col-12">
						  <div class="thumbnail relative">
							
							<p class="text-justify">Nhờ có phần mềm Full Look Song ngữ mà Tết năm nay gia đình tôi có thể thoải mái du xuân, không cần mang theo sách vở cũng không lo con quên kiến thức. Ngoài việc giúp con ôn tập các bài học trên lớp, phần mềm còn giúp trẻ mở rộng vốn hiểu biết và những kĩ năng cần thiết trong cuộc sống. Tôi đặc biệt thích các đề luyện tập của phần mềm vì tính thiết thực của nó</p>
							<i class="fa absolute care white fa-sort-desc" aria-hidden="true"></i>
						  </div>
						  
						  <div class="media">
							  <div class="media-left">
								<a href="#">
								  
									<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
										<img class="media-object" src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/hang.png" alt="hang" style="width:80px;">
									</div>
								</a>
							  </div>
							  <div class="media-body white text-left">
								<b>Chị Vũ Diễm Hằng</b><br> (Mẹ bé Trần Thanh Huyền - HS trườngTiểu học B Thị trấn Văn Điển;  Giải nhất thi IOE và giao lưu tiếng Anh cấp Huyện)					  </div>
							</div>
						  
						</div>
						</div>
						
					</div>
				</div>
				<!-- Left and right controls -->
				   <a class="carousel-control-prev" href="#slidebootstrap" role="button" data-slide="prev">
				    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span class="sr-only">Previous</span>
				  </a>
				  <a class="carousel-control-next" href="#slidebootstrap" role="button" data-slide="next">
				    <span class="carousel-control-next-icon" aria-hidden="true"></span>
				    <span class="sr-only">Next</span>
				  </a>
			</div>
		</div>
	</div>
	<div class="full d-block d-sm-none">
		<div class="container ">
			<div id="slidebootstrap-mb" class="carousel slide text-center" data-ride="carousel">
				<div class="carousel-inner" role="listbox">	
					<div class="carousel-item active">
							<div class="thumbnail">
								<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
									<img src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/11.jpg" alt="Sandy" style="width:80px;">
								</div>
								<p class="text-justify"><i class="fa fa-quote-left fa-2x"></i>  Một phần mềm bắt kịp xu hướng đổi mới của nền Giáo dục, đó là xu hướng dạy học, kiểm tra đánh giá theo hướng phát triển năng lực của học sinh. Cái hay nhất của nó là tất cả những nội dung ấy được diễn đạt bằng thứ tiếng Anh vừa đơn giản, vừa chuẩn mực.<br>
								<strong><b>Chuyên gia Sandra</b><br> (Giảng viên khoa quốc tế, đại học quốc gia HN)</strong><i class="fa fa-quote-right fa-2x"></i></p>
							</div>
					</div>
					
					<div class="carousel-item">
						
							<div class="thumbnail">
		      
								<p class="text-justify">
								Các câu hỏi, bài tập của Full Look được thiết kế rất phù hợp với định hướng PHÁT TRIỂN NĂNG LỰC TOÀN DIỆN cho HS Tiểu học, cập nhật với xu hướng đánh giá năng lực trên thế giới. Từ đó, giúp HS có thể kết nối, vận dụng những kiến thức được học trong nhà trường vào xử lí những tình huống thực tiễn trong cuộc sống.
								</p>
								<i class="fa absolute care white fa-sort-desc" aria-hidden="true"></i>
							</div>
							
							
							<div class="media">
							  <div class="media-left">
								<a href="#">
								  
									<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
										<img class="media-object" src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/hoanguyen.jpg" alt="Sandy" style="width:80px;">
									</div>
								</a>
							  </div>
							  <div class="media-body white text-left">
								(TS. Nguyễn Thị Hảo – Chuyên viên nghiên cứu, Viện Khoa học Giáo dục Việt Nam chuyên gia lĩnh vực đọc hiểu trong chương trình đánh giá HS Quốc tế PISA)
							  </div>
							</div>
							
							
						</div>
					
					<div class="carousel-item">
						
							<div class="thumbnail">
								<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
									<img src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/12.jpg" alt="Anh Tùng" style="width:80px;">
								</div>
								<p class="text-justify"><i class="fa fa-quote-left fa-2x"></i> Lần đầu tiên ở Việt Nam có phần mềm Song ngữ Anh - Việt cho mọi môn học. Đó là xu hướng của giáo dục hiện đại và nhiều trường cấp 2  trên toàn quốc đã thí điểm mô hình này. Việc xây dựng chương trình song ngữ cho cấp Tiểu học là bước đà để các em có thể bắt nhịp với xu hướng mới khi lên cấp 2, giúp các em từng bước tiếp cận kiến thức mới, tránh áp lực dồn tích, tạo nền tảng vững chắc cho quá trình tìm kiếm học bổng và quá trình hoà nhập với môi trường học tập quốc tế sau này.<br>
								<strong><b>Tiến Sĩ Nguyễn Thanh Tùng</b> <br> (Đại học Sư Phạm Hà Nội)</strong><i class="fa fa-quote-right fa-2x"></i>
								</p>
							</div>
						
					</div>
					
					<div class="carousel-item">
						
							<div class="thumbnail">
								<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
									<img src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/chinga.png" alt="Chị Nga" style="width:80px;">
								</div>
								<p class="text-justify"><i class="fa fa-quote-left fa-2x"></i> Đây là cách học Song ngữ cho mọi môn học lần đầu tiên ở Việt Nam. Với 3 chế độ hiển thị ngôn ngữ (Tiếng Anh, Tiếng Việt hoặc Song ngữ) tuỳ người dùng lựa chọn, tôi thấy đây là phần mềm có khả năng ứng dụng cao với nhiều đối tượng HS khác nhau trên toàn quốc. Nội dung các câu hỏi gần gũi thực tế, cập nhật và thiết thực, đặc biệt có sức khơi mở tư duy cho HS.<br>
								<strong><b>Chị Trần Việt Nga</b> <br> (Báo Giáo dục &amp; Thời đại)</strong><i class="fa fa-quote-right fa-2x"></i>
								</p>
							</div>
						
					</div>
					<div class="carousel-item">
						
							<div class="thumbnail">
								<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
									<img src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/chihuyen.jpg" alt="Chị Huyền" style="width:80px;">
								</div>
								<p class="text-justify"><i class="fa fa-quote-left fa-2x"></i> Mình đã cho con dùng. Bạn ấy thích tiếng Anh, cho nên khi làm bài, vừa được ôn tập kiến thức các môn học khác lại được tích hợp với tiếng Anh, bạn ấy có động lực hẳn lên.<br>
								<strong><b>Chị Trần Thu Huyền</b><br>(Phụ huynh HS Lương Trần Ngọc Minh, Trường Tiểu học Vinschool, Hà Nội)</strong><i class="fa fa-quote-right fa-2x"></i>
								</p>
							</div>
						
					</div>
					
					<div class="carousel-item">
						
							<div class="thumbnail">
								<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
									<img src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/anh.png" alt="Anh" style="width:80px;">
								</div>
								<p class="text-justify"><i class="fa fa-quote-left fa-2x"></i> Mỗi buổi tối mẹ giao cho con học 1 file từ vựng tiếng Anh trong phần mềm . Con học trong khoảng 10 - 15 phút trước khi đi ngủ. Hôm học Toán – Tiếng Anh, hôm học Khoa học – Tiếng Anh; Hôm học môn Văn…Tuy vậy, con vẫn chưa đủ tự tin để học các môn bằng chế độ tiếng Anh. Con thường xuyên ôn tập mọi môn học bằng chế độ Song ngữ (Câu hỏi các môn học được viết bằng tiếng Anh, dịch Tiếng Việt bên dưới)<br>
								<strong><b>Nguyễn Nguyên Anh</b><br>(HS Trường Tiểu học Lý Tự Trọng, TP Thanh Hoá)</strong><i class="fa fa-quote-right fa-2x"></i>
								</p>
							</div>
						
					</div>
					<div class="carousel-item">
						
							<div class="thumbnail">
								<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
									<img src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/duc.png" alt="Anh Đức" style="width:80px;">
								</div>
								<p class="text-justify"><i class="fa fa-quote-left fa-2x"></i> Con thích nhất là học Toán, Khoa học và Hiểu biết xã hội trong chương trình này. Hiện tại con mới dùng được chế độ ngôn ngữ tiếng Việt nhưng con thường xuyên chọn học mục Từ vựng tiếng Anh của các môn này. Con hy vọng từ giờ đến hè con sẽ tích luỹ đủ vốn từ để có thể chuyển sang chế độ học các môn bằng Tiếng Anh<br>
								<strong><b>Nguyễn Minh Đức</b> <br>(HS lớp 5H, TH Dịch Vọng A, Hà Nội.)</strong><i class="fa fa-quote-right fa-2x"></i>
								</p>
							</div>
						
					</div>
					
					<div class="carousel-item">
						
							<div class="thumbnail">
								<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
									<img src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/hang.png" alt="Chị Hằng" style="width:80px;">
								</div>
								<p class="text-justify"><i class="fa fa-quote-left fa-2x"></i> Nhờ có phần mềm Full Look Song ngữ mà Tết năm nay gia đình tôi có thể thoải mái du xuân, không cần mang theo sách vở cũng không lo con quên kiến thức. Ngoài việc giúp con ôn tập các bài học trên lớp, phần mềm còn giúp trẻ mở rộng vốn hiểu biết và những kĩ năng cần thiết trong cuộc sống. Tôi đặc biệt thích các đề luyện tập của phần mềm vì tính thiết thực của nó<br>
								<strong><b>Chị Vũ Diễm Hằng</b><br> (Mẹ bé Trần Thanh Huyền - HS trườngTiểu học B Thị trấn Văn Điển;  Giải nhất thi IOE và giao lưu tiếng Anh cấp Huyện)</strong><i class="fa fa-quote-right fa-2x"></i>
								</p>
							</div>
						
					</div>
					<div class="carousel-item">
						
							<div class="thumbnail">
								<div class="img-circle" style="display: inline-block; width: 80px; height: 80px; overflow: hidden;">
									<img src="http://www.fulllooksongngu.com/Default/skin/nobel/Themes/Story/media/cong.png" alt="Anh Công" style="width:80px;">
								</div>
								<p class="text-justify"><i class="fa fa-quote-left fa-2x"></i> Đây là chương trình được biên soạn tâm huyết, công phu. Các con có thể ôn tổng hợp kiến thức các môn bằng tiếng Việt, đồng thời được trau dồi, cải thiện tiếng Anh của mình ở hầu hết các môn học và một số lĩnh vực đời sống, xã hội. Đây là chương trình thực sự hữu ích, nhằm bổ trợ kiến thức và văn hoá bằng cả tiếng Việt và tiếng Anh, hỗ trợ người học rất nhiều trong quá trình học tập và giao tiếp.<br>
								<strong><b>Anh Vũ Đức Công</b> <br>(Cán bộ cao cấp tại Đại sứ quán Úc, Hà Nội <br> PH bé Vũ Minh Hạnh, HS lớp 5B, Trường Tiểu học Quan Hoa, Hà Nội)</strong><i class="fa fa-quote-right fa-2x"></i>
								</p>
							</div>
						
					</div>
					
					
				</div>
			</div>
		</div>
	</div>
	<div class=" text-center heading mt-5 mb-3 full text-white">
		THỐNG KÊ
	</div>
	<div class="full mb-5">
		<div class="container mgb50">
			<div class="row">
				<div class="col-md-3 col-12"> 
					<b class="fff223 fs28">19453</b> <span class="fs16 white"> Thành viên </span>	
				</div>		
				<div class="col-md-3 col-12"> 
					<b class="fff223 fs28">1564</b> <span class="fs16 white">
			 		Thành viên mới		</span>	
				</div>	
				<div class="col-md-3 col-12"> 
					<b class="fff223 fs28">4</b> <span class="fs16 white">
					Người đang học trực tuyến		
			 		</span>	
			 	</div>		
				<div class="col-md-3 col-12"> 
					<span class="fs16 white">
					Thành viên mới nhất: </span><b class="white">kiennguyenmai</b>
				</div>
			</div>
			
		</div>
	</div>	
	
</div>
