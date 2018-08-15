flApp.controller('AboutController', ['$scope', function($scope) {
	$scope.title = 'Công ty cổ phần giáo dục và phát triển trí tuệ sáng tạo Next Nobels';
	$scope.language = window.localStorage.getItem('language') || 'en';
	$scope.changeLanguage = function() {
		window.localStorage.setItem('language', $scope.language);
	}
	$scope.order = {};
	$scope.doOrder =function(){
		if(!$scope.order.fullname|| !$scope.order.quantity || !$scope.order.phone || !$scope.order.address ){
			return false;
		}
		jQuery.post(FL_API_URL+'/payment/orderCard', $scope.order, function(data) {
			
		  	if(data) {
		  		$scope.order.success = 1;
		  		$scope.order.message = 'Bạn đã dặt thẻ thành công, chúng tôi sẽ sớm liên hệ lại với bạn!';
		  		$scope.$apply();
		  	}
		});
		
	}
	$scope.paycard = {};
	$scope.payCardFl =function(url){
		
		if(parseInt(sessionUserId) == 0){
			$scope.paycard.message ='Bạn phải đăng nhập mới được nạp thẻ';	
			$scope.paycard.success = 0;	
			$scope.$apply();		
		}else{
			
			if(!$scope.paycard.pincard){
				return false;
			}
			$scope.paycard.userId = sessionUserId;	
			$scope.paycard.username = sessionUsername;

			jQuery.post(FL_API_URL+'/payment/payCard', $scope.paycard, function(dataResult) {
			  	if(dataResult) {
			  		if(parseInt(dataResult.result)== 1){
			  			jQuery.post(url+'/update_paycard.php', dataResult, function(data) {
							
						});
						$scope.paycard.message = dataResult.string;
						$scope.paycard.success = 1;
						$scope.$apply();
						
			  		}else {
			  			$scope.paycard.message = dataResult.string;	
			  			$scope.paycard.success = 0;	
			  			$scope.$apply();		  		
					}
			  	}				
			});			
		}
			
	}
	$scope.grade = window.localStorage.getItem('grade') || '5';
	$scope.changeGrade = function() {
		window.localStorage.setItem('grade', $scope.grade);
	};
	$scope.translate = function(val) {
		return $langMap[$scope.language][val] || val;
	};
	
	$scope.tabs = {
		proposal: `- Ôn tập, mở rộng kiến thức và đánh giá năng lực toàn diện cho học sinh tiểu học qua các bài luyện tập và hệ thống đề thi thử bằng Tiếng Anh. <br>
- Phát triển năng lực toàn diện của học sinh :<br>
+ Khả năng đọc hiểu tiếng Anh<br>
+ Năng lực tư duy, khả năng phân tích và phán đoán.<br>
+ Khả năng diễn đạt<br>
+ Năng lực vận dụng khoa học và hiểu biết xã hội vào cuộc sống.<br>`,

		authors: `1.Tiến sĩ Phạm Mai Phương – Tiến sĩ Giáo dục về Ngôn ngữ học ứng dụng, Đại học New South Wales, Australia.<br>
2.Tiến sĩ Nguyễn Thanh Tùng, giảng viên khoa Ngữ Văn Đại học Sư phạm Hà Nội.<br>
3.Tiến sĩ ngôn ngữ - Phạm Như Hoa, Trường THCS Cầu Giấy Hà Nội.<br>
4. Cô Lê Thị Thu Ngân – giáo viên ngữ văn - Phó giám đốc Công ty Cổ phần Giáo dục Phát triển Trí tuệ và Sáng tạo Next Nobels.<br>
5.Thạc sĩ Trần Thị Mai Phương, Giám đốc Công ty Cổ phần Giáo dục Phát triển Trí Tuệ và Sáng tạo Next Nobels.<br>
6.Thầy Trần Hữu Hiếu, giáo viên dạy toán giỏi, có nhiều học trò đạt giải cao trong kì thi Violympic toán 5 toàn quốc và nhiều học trò đạt giải trong Cuộc thi Toán Châu Á Thái Bình Dương.<br>
7.John Rodger – Giảng viên của Đại học FPT, Đại học Hoa Sen Thành Phố Hồ Chí Minh…<br>
8. Sandra Gannon, Giảng viên Khoa Quốc tế - Đại học Quốc Gia Hà Nội<br>
9. Markus Lohenstein, nguyên Giảng viên trường Quản trị Du lịch Quốc tế PIHMS (Pacific International Hotel Management School) New Zealand.<br>
10. Jesscica Laura Boezio - Tốt nghiệp ĐH Rhodes (Grahamstown, South Africa), chuyên ngành Xã hội học và ngôn ngữ; Nhận chứng chỉ CELTA - ĐH Cambridge; Nhiều năm kinh nghiệm giảng dạy Tiếng Anh tại Nam Phi.<br>
11. Alex Seward (Quốc tịch Mỹ); Thạc sĩ giáo dục; Giảng viên tại trung tâm Anh ngữ ACET; Cựu giám khảo kì thi IELTS.<br>
12. Th. S Phan Hoài Thư - Giảng viên chính thức khóa đầu tiên thuộc nhóm triển khai chương trình khoa học GLOBE (NASA) tại Việt Nam.<br>
13. Kasey Hames, Thạc sĩ Sinh học năm 2006. Tiến sĩ Thực vật, côn trùng, và vi sinh vật tương tác đh Missouri năm 2011, hiện là Giảng viên học viện Nông nghiệp Việt Nam<br>`,

		structure: `<table class="table table-bordered table-sm table-striped">
					<tbody><tr>
						<td><b>STT</b></td>
						<td><b>Các phần chính</b></td>
						<td><b>Nội dung</b></td>
					</tr>
					<tr>
						<td><b>1.</b></td>
						<td><b>Phần Luyện tập</b></td>
						<td>
						- <b>Hàng ngàn câu hỏi trắc nghiệm các môn học</b> : Toán, Khoa học, Lịch sử, Địa lí… bằng tiếng Anh để ôn tập kiến thức, đánh giá năng lực và rèn luyện tư duy cho HS.
						- Hệ thống câu hỏi qua các <b>bài nghe, bài quan sát (các tranh ảnh, video) đa dạng về chủ đề</b> dựa trên nền kiến thức các môn học và sự hiểu biết của HS bậc tiểu học. 
						</td>
					</tr>
					<tr>
						<td><b>2.</b></td>
						<td><b>Đề Luyện tập</b></td>
						<td>
						- Là hệ thống đề có cấu trúc giống đề thi, <b>tổng hợp kiến thức các môn học</b> trong phần Luyện tập, giúp học sinh làm quen với các dạng đề thi, ôn luyện kiến thức tổng hợp.	
						</td>
					</tr>
					<tr>
						<td><b>3.</b></td>
						<td><b>Đề thi</b></td>
						<td>
						- Rất nhiều <b>đề thi bám sát cấu trúc đề khảo sát vào trường Trần Đại Nghĩa </b>đã được Sở Giáo dục và Đào tạo Thành phố Hồ Chí Minh công bố tháng 4 năm 2015.	
						
						</td>
					</tr>
					<tr>
						<td><b>5.</b></td>
						<td><b>Kinh nghiệm ôn thi</b></td>
						<td>
						Gồm nhiều nội dung :<br>
						- Cung cấp <b>Tài liệu tham khảo các môn học</b>:<br>
						+ Mỗi môn học đều có các bài đọc tham khảo bằng tiếng Anh và các câu hỏi hỗ trợ ôn tập kiến thức các thức các môn học bằng tiếng Việt.
						+ Đặc biệt, cung cấp hệ thống từ vựng cơ bản sắp xếp theo các chủ đề.
						- Tập hợp <b>đề thi các năm vào trường Trần Đại Nghĩa</b>.<br>
						- Giới thiệu <b>các Trung tâm uy tín ôn thi</b> vào trường Trần Đại Nghĩa.<br>
						- Trao đổi các <b>kinh nghiệm ôn thi</b> vào trường Trần Đại Nghĩa (Mục hỏi đáp kinh nghiệm ôn thi).


						</td>
					</tr>
					<tr>
						<td><b>5.</b></td>
						<td><b> Quà tặng</b></td>
						<td>
						
						- Có các bài hát, thơ, truyện bằng tiếng Anh được bổ sung hàng tuần giúp HS vừa giải trí vừa nâng cao khả năng Anh ngữ. Học sinh còn được giao lưu, trao đổi, bộc lộ quan điểm qua các câu hỏi thảo luận bằng tiếng Anh dưới mỗi bài.
						
						</td>
					</tr>
					<tr>
						<td><b>6.</b></td>
						<td><b>Game</b></td>
						<td>
						- Hệ thống các trò chơi vừa giúp giải trí vừa giúp HS ôn luyện, mở rộng từ vựng tiếng Anh ở nhiều chủ đề.
						</td>
					</tr>
				</tbody></table>`,

		advantage: `<ul class="pd-40 list-unstyled left35">
					<li>- Chấm điểm và xếp hạng học sinh.</li>

					<li>- Tra cứu từ điển Anh Việt ngay trong phần mềm.</li>

					<li>- Tất cả các câu hỏi luyện tập và đề thi thử đều có đáp án.</li>

					<li>- Nhiều đáp án có phần lí giải bằng tiếng Việt (được thiết kế dành riêng cho học sinh thi vào lớp 6 Trường THPT Chuyên Trần Đại Nghĩa)</li>

					<li>-Sản phẩm luôn luôn được nâng cấp, cập nhật cả về số lượng câu hỏi và dạng bài ôn tập.</li>
				</ul>`,

		guide: `Hướng dẫn mua sản phẩm`
	};
	$scope.banks = [
	{
		image: 'http://s1.nextnobels.com/default/skin/nobel/themes/story/media/vcb.jpg',
		name: 'Ngân hàng thương mại cổ phần ngoại thương(Vietcombank)',
		account: '0011004237507',
		owner: 'CÔNG TY CỔ PHẦN GIÁO DỤC PHÁT TRIỂN TRÍ TUỆ VÀ SÁNG TẠO NEXT NOBELS',
		branch: 'Sở giao dịch'
	},
	{
		image: 'http://s1.nextnobels.com/default/skin/nobel/themes/story/media/vietin.jpg',
		name: 'Ngân hàng TMCP công thương Việt Nam(Vietinbank)',
		account: '110000145741',
		owner: 'CÔNG TY CỔ PHẦN GIÁO DỤC PHÁT TRIỂN TRÍ TUỆ VÀ SÁNG TẠO NEXT NOBELS',
		branch: 'Thăng Long'
	},
	{
		image: 'http://s1.nextnobels.com/default/skin/nobel/themes/story/media/agri.jpg',
		name: 'Ngân hàng Nông nghiệp và phát triển nông thôn Việt Nam(Agribank)',
		account: '1305201013000',
		owner: 'CÔNG TY CỔ PHẦN GIÁO DỤC PHÁT TRIỂN TRÍ TUỆ VÀ SÁNG TẠO NEXT NOBELS',
		branch: 'Tràng An'
	},
	{
		image: 'http://s1.nextnobels.com/default/skin/nobel/themes/story/media/mb.jpg',
		name: 'Ngân hàng TMCP Quân đội MB',
		account: '0201100316008',
		owner: 'CÔNG TY CỔ PHẦN GIÁO DỤC PHÁT TRIỂN TRÍ TUỆ VÀ SÁNG TẠO NEXT NOBELS',
		branch: 'Nam Trung Yên'
	},
	{
		image: 'http://s1.nextnobels.com/default/skin/nobel/themes/story/media/bidv.jpg',
		name: 'Ngân hàng TMCP Đầu tư và phát triển Việt Nam(BIDV)',
		account: '26010000705319',
		owner: 'CÔNG TY CỔ PHẦN GIÁO DỤC PHÁT TRIỂN TRÍ TUỆ VÀ SÁNG TẠO NEXT NOBELS',
		branch: 'Tây Hà Nội'
	},
	{
		image: 'http://s1.nextnobels.com/default/skin/nobel/themes/story/media/donga.jpg',
		name: 'Ngân hàng TMCP Đông Á',
		account: '014601780001',
		owner: 'CÔNG TY CỔ PHẦN GIÁO DỤC PHÁT TRIỂN TRÍ TUỆ VÀ SÁNG TẠO NEXT NOBELS',
		branch: 'Cầu Giấy'
	},
	];
}]);