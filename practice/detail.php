<div class="full practice pb-5">
	<div class="container mt-4 mb-3">
		<div class="row redirect">
			&nbsp; &nbsp;
			<a href="/" ng-show="language=='en'">
			Practice
			</a>
			<a href="/" ng-show="language=='vn'">
			Luyện tập 
			</a>
			
			&nbsp; &nbsp; &gt; &nbsp; &nbsp;
			<a href="/detail.php?subject_id={{subject.id}}" ng-show="language=='en'">{{subject.name}}</a>
			<a href="/detail.php?subject_id={{subject.id}}" ng-show="language=='vn'">{{subject.name_vn}}</a>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-12 col-md-3">
				<div class="main-shadow full" style="height: 600px; overflow-y: scroll;">
					<ul  class="nav nav-pills" id="pills-tab" role="tablist">
					  <li class="nav-item w-50">
					    <a style="border-radius: 5px 0px 0px 0px;" class="nav-link title-pr active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Luyện tập</a>
					  </li>
					  <li class="nav-item w-50">
					    <a style="border-radius: 0px 5px 0px 0px;" class="nav-link title-pr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Từ vựng</a>
					  </li>
					 
					</ul>
					<div class="tab-content" id="pills-tabContent">
					  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
					  	<ul  class="list-group menu-practice">
							<li class="list-group-item" ng-repeat="topic in topics"> <a href="" ng-click="selectTopic(topic, topic)">{{topic.name}} </a>
								<i class="float-right fa fa-caret-down" aria-hidden="true" ng-show="topic.children.length > 0"></i>
								<div ng-show="subject.level==4">
									<ul class="list-group lv2" style="margin-left: -20px;margin-right: -20px;" ng-repeat="subTopic in topic.children">
										<li class="list-group-item" ng-repeat="subTopic2 in subTopic.children" ng-class="{'active': selectedTopic===subTopic2}">
											<a href="javascript:void(0)" ng-click="selectTopic(subTopic2, topic)">{{subTopic2.name}}</a>
										</li>
									</ul>
								</div>
								<div ng-show="subject.level==3">
									<ul class="list-group lv2" style="margin-left: -20px;margin-right: -20px;" ng-repeat="subTopic in topic.children">
										<li class="list-group-item" ng-class="{'active': selectedTopic===subTopic}">
											<a href="javascript:void(0)" ng-click="selectTopic(subTopic, topic)">{{subTopic.name}}</a>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					  </div>
					  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
					  	<ul class="list-group vocabulary">
						  <li class="list-group-item" ng-repeat="vocabulary in vocabularies"><a href="javascript:void(0)" ng-click="selectVocabulary(vocabulary)">{{vocabulary.title}}</a></li>
						</ul>
					  </div>
					 
					</div>
				</div>
				
			</div>
			<div class="col-12 col-md-9">
				<div class="main-shadow full">
					<h2 class="text-center title">
					<span ng-hide="selectedTopic">Các chuyên đề</span>
					<span ng-show="selectedTopic">{{selectedParentTopic.name}} - {{selectedTopic.name}}</span>
					
					</h2>

					<div class="text-center guide"><i class="fa fa-star" aria-hidden="true"></i> Hãy chọn chuyên đề để luyện tập <i class="fa fa-star" aria-hidden="true"></i></div>

					<div class="practice-content p-3 full" ng-show="action=='practice'">
						<div class="row">
							<div class="col-12 col-md-2" ng-repeat="exerciseNum in exerciseNums" ng-click="selectExercise(exerciseNum)">
								<div class="btn lesson full mb-3 btn-primary" ng-class="{'active': selectedExerciseNum === exerciseNum}">Bài {{exerciseNum+1}}</div>
							</div>
						</div>
						
						<div class="do-practice full">
							
							<div ng-show="selectedExerciseNum !== null">
							
							<div class="name-detail text-center">
								Bài {{selectedExerciseNum+1}}	
							</div>
							
							
							<div class="text-center">
								<div  class="time">
									<img src="http://fulllook.com.vn/Themes/Songngu3/skin/images/watch.png">
									<div id="countdown" class="num-time robotofont" style="color: rgb(255, 0, 0);">00:00</div>
								</div>
							</div>
							
							<div class="text-center" ng-show="step==='selectExercise'">
								<button class="btn btn-primary btn-lg" ng-click="startPractice()"> Bắt Đầu Làm Bài </button>
							</div>
							
							<div ng-show="step==='startPractice'">
							
							<div id="question" class="item">
							<p ng-bind-html="selectedTopic.content | sanitizer"></p>
							<div ng-repeat="question in questions">
								<div class="question full">
									<input type="hidden" name="questions[474]" value="474">
									<input type="hidden" name="questionType[474]" value="choice">
									<div class="item cau">
										<div class="stt">Câu:  {{$index+1}}</div>
										<span class="btn volume fa fa-volume-up" onclick="read_question(this, '/3rdparty/Filemanager/source/practice/all/474.mp3');"
										></span>
									</div>

									<div class="nobel-list-md choice">
										<div class="ptnn-title full" ng-bind-html="question.name"></div>
									
										<table>
											<tbody>
												<tr ng-repeat="answer in question.ref_question_answers">
													<td>
														<input type="radio" class="float-left" name="question_answers_{{question.id}}" value="{{answer.id}}" ng-model="user_answers[question.id]">
														<span class="answers_474_38915 pl10" ng-bind-html="answer.content"></span>
													</td>
												</tr>
											</tbody>
										</table>
								
										<a href="#mobile-explan-474" class="explanation top10 hidden btn btn-success btn-show-exp" data-toggle="collapse">Xem lý giải
										</a>
								
										<div id="mobile-explan-474" class="collapse lygiai top10 item">
											<div class="item mb-2">
												ong huu		
											</div>
									
											<div class="item">
												<div class="btn btn-danger" data-toggle="modal" data-target="#report474">
													Báo lỗi			
												</div>
										
												<div class="modal fade" id="report474" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
												  <div class="modal-dialog" role="document">
													<div class="modal-content">
													  <div class="modal-header">
														<button style="right: 15px;" type="button" class="close absolute" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>

														<h4 class="modal-title" id="myModalLabel">Báo lỗi</h4>
													  </div>
													  <div class="modal-body">
														 <div class="w100p">
															<label for="exampleInputEmail1">Nội dung:</label>
															<textarea style="height: 150px !important;" id="contentError474" name="contentError" class="form-control"></textarea>
														  </div>
											 
													  </div>
													  <div class="modal-footer">
														
														<button onclick="reportError(474);" type="button" class="btn btn-primary">Báo lỗi</button>
													  </div>
													</div>
												  </div>
												</div>
										
											</div>
											<!--end report-->
									
										</div>
										<!--Lý giải -->
									</div>
								</div>
								<div class="line-question">
								</div>
								<!--end question-->
							</div>
								
							</div>

							<div class="text-center full mb-3 relative">				
								<button id="finish-choice" class="btn btn-primary btt-practice " name="finish-choice" onclick="finish_choice();"><span class="fa fa-check"></span>
									Hoàn thành					
								</button>
								<button id="view-result" class="btn btt-practice btn-success" data-toggle="modal" data-target="#exampleModal" name="view-result" style=""><span class="fa fa-list-alt"></span>
									Xem kết quả					
								</button>
								<button id="show-answers" class="btn btt-practice btn-danger " name="show-answers" onclick="show_answers();"  ><span class="fa fa-check"></span>
								Xem đáp án					
								</button>
							</div>

							</div>
							
							</div>

						</div>			

					</div>
					
					<div class="practice-content p-3 full" ng-show="action=='vocabulary'">
						<div class="do-practice full">
							<div class="name-detail text-center">
							{{selectedVocabulary.title}}
							</div>
							<div class="text-justify adjust-table" ng-bind-html="selectedVocabulary.content | sanitizer">
							</div>
						</div>
					</div>
					
					<img class="img-fluid full" src="/assets/images/bg-huongdan.png" />

					<!--div style="height: 103px; display: none;" class="relative item">
						<img style="left: 0px; bottom: 0px; border-radius: 0px 0px 0px 5px;" class="absolute hidden-xs" src="/assets/images/bottom-left.png">
						<img style="right: 0px; bottom: 0px; border-radius: 0px 0px 5px 0px;" class="absolute hidden-xs" src="/assets/images/bottom-right.png">
						
					</div-->	
				</div>
			</div>
		</div>
	</div>
</div>

<!--show result-->
<div class="modal" role="dialog" id="exampleModal" aria-labelledby="gridSystemModalLabel" aria-hidden="false">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button style="right: 15px;" type="button" class="close absolute" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
				<h3 class="modal-title text-center title-blue" id="gridSystemModalLabel"><b>Kết quả làm bài</b></h3>
			</div>
			
			<div class="modal-body">
				<div class="row">
						<div class="col-md-8 question_true control-label">Số câu trả lời đúng </div> 
						<div class="col-md-4 num_true title-blue">0</div>
				</div>	
				<div class="row">	
					<div class="col-md-8 question_false control-label">Số câu trả lời sai </div> 
					<div class="col-md-4 num_false title-red">5</div>
				</div>
				<div class="row">
					<div class="col-md-8 question_total control-label">Tổng số câu </div> 
					<div class="col-md-4 num_total">5</div>
				</div>
			</div>
			<div class="modal-footer">
				<div class=" full text-center">
					<button class="btn btn-sm btn-danger top10" onclick="window.location='/?class=5'"> 
						<span >Chọn môn khác</span> 
						<span class="glyphicon glyphicon-arrow-left"></span>
					</button>
					<button id="show-answers-on-dialog" class="btn btn-sm btn-danger top10 " name="show-answers" onclick="show_answers(); $('#exampleModal').modal('hide');" type="button">
						<span class="glyphicon glyphicon-check"></span>
						Xem đáp án							
					</button>
					<button type="button" class="btn btn-sm btn-success top10" onclick="window.location = '/practice/detail/51?class=5&amp;de=1'">
						<span class="glyphicon glyphicon-arrow-right hidden-xs"></span> Làm bài khác
					</button>
					
				</div>
			</div>
		</div>
	</div>
</div>


<style>
.adjust-table table {
	width: 100%;
	border-collapse: collapsed;
}
.adjust-table table td, .adjust-table table th {
	vertical-align: top;
	border: 1px solid grey;
}
.adjust-table table img {
	width: 100%;
	display: flex;
}
</style>