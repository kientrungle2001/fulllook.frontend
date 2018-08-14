<style>
	.fix-menu{margin-bottom: 15px;}
</style>
<div class="full">
	<div class="container">
		<div class="t-weight text-center btn full mt-3 mb-3 btn-primary">Tài liệu học tập</div>
		<div class="full">
			<div class="row">
				<div class="col-12 col-md-2 pr-0">
					<a href="http://s1.nextnobels.com/document/home">
						<div class="full mb-3 box-document p-1">
							<img  src="http://s1.nextnobels.com/default/skin/nobel/test/themes/default/media/tailieu.png">
							<p class="text-center mt-1"><strong>Tài liệu các môn học</strong></p>
						</div>
					</a>
				</div>
				<div class="col-12 col-md-8">
					
					<div class="full bdbot mb-3" ng-repeat="subject in subjects" ng-show="subjectDocuments[subject.id].length">
						<h3 class="text-center">{{subject.name}}</h3>
						<table class="table">
							<thead>
							  <tr>
								<th>Tên tài liệu</th>
								<th>Ngày gửi lên</th>
								<th>Dung lượng</th>
								<th>Lượt tải</th>
								<th>Tải về</th>
							  </tr>
							</thead>
							<tbody>
								<tr ng-repeat="doc in subjectDocuments[subject.id]">
									<td><a href="/documentDetail.php?document_id={{doc.id}}">{{doc.title}}</a>
									</td>
									<td>{{doc.created}}</td>
									<td>0</td>
									<td>0</td>
									<td><a href="{{doc.file}}">Tải về</a>
									</td>
								</tr>							 
							</tbody>
						</table> 
						<p class="float-right"><a href="/documentList.php?subject_id={{subject.id}}">Xem thêm</a></p>
					</div>

				</div>
				<div class="col-12 col-md-2 pl-0">
					<a href="http://s1.nextnobels.com">
						<div class="full box-document mb-3 p-1">
							<img  src="http://s1.nextnobels.com/default/skin/nobel/test/themes/default/media/full.png">
							<p class="text-center mt-1"><strong>FULL LOOK</strong></p>
							<p class="text-center">(Phần mềm khảo sát năng lực toàn diện bằng tiếng Anh)</p>
						</div>
					</a>

					<a href="http://nextnobels.com">
						<div class="full mb-3 box-document p-1">
							<img  src="http://s1.nextnobels.com/default/skin/nobel/test/themes/default/media/vietvan.png">
							<p class="text-center top10"><strong>LUYÊN VIẾT VĂN MIÊU TẢ</strong></p>
							<p class="text-center">(Dành cho HS lớp 3,4,5,6)</p>
						</div>
					</a>

				</div>
			</div>
		</div>
		
	</div>
</div>
