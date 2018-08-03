<style>
	.fix-menu{margin-bottom: 15px;}
</style>
<div class="full">
	<div class="container">
		<div class="t-weight text-center full mt-3 mb-3 bg-primary p-1"><a href="/document.php" style="color:white;">Tài liệu học tập</a> - <a href="/documentList.php?subject_id={{subject.id}}" style="color:white;">{{subject.name_vn}}</a></div>
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
					<div class="full bdbot mb-3">
						<h1 class="text-center">{{doc.title}}</h1>
						<div class="document-content" ng-bind-html="doc.content">
						</div>
						<div class="text-center">
							<a href="http://docs.google.com/viewer?embedded=true&url={{encode(doc.file)}}" class="document-iframe" ng-show="doc.file">Xem tài liệu</a>
						</div>
						
						<h2>Tài liệu khác</h2>
						<ul>
							<li ng-repeat="doc in docs">
								<a href="/documentDetail.php?document_id={{doc.id}}">{{doc.title}}</a>
							</li>
						</ul>
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
<style>
.document-content table{
	width: 100%;
	
}
.document-content table tr td, .document-content table tr th {
	border: 1px solid black;
	border-collapse: collapsed;
}
.document-content table img {
	display: block;
	width: 100%;
	height: auto;
}
.document-iframe {
	border: none;
	width: 100%;
	height: 600px;
}
</style>