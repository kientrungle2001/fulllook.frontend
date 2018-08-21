<div class="full practice pb-5">
	<div class="container mt-4 mb-3">
		<div class="row redirect">
			&nbsp; &nbsp;
			<a href="/#practice" ng-show="language=='en'">
			Practice
			</a>
			<a href="/#practice" ng-show="language=='vn'">
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

					<div class="text-center guide" ng-hide="action != 'practice' || selectedTopic"><i class="fa fa-star" aria-hidden="true"></i> Hãy chọn chuyên đề để luyện tập <i class="fa fa-star" aria-hidden="true"></i></div>
					<div class="text-center guide" ng-show="action=='practice' && selectedTopic"><i class="fa fa-star" aria-hidden="true"></i> Hãy chọn bài để luyện tập <i class="fa fa-star" aria-hidden="true"></i></div>

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
									<div id="countdown" class="num-time robotofont" style="color: rgb(255, 0, 0);">{{remaining.minutes}}:{{remaining.seconds}}</div>
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
									<div class="item cau">
										<div class="stt">Câu:  {{$index+1}}</div>
										<span class="btn volume fa fa-volume-up" onclick="read_question(this, '/3rdparty/Filemanager/source/practice/all/474.mp3');"
										></span>
									</div>

									<div class="nobel-list-md choice">
										<div class="ptnn-title full" mathjax-bind="question.name"></div>
									
										<table class="full">
											<tbody>
												<tr ng-repeat="answer in question.ref_question_answers" ng-class="{'bg-primary text-white': showAnswersStep=='showAnswers' && answer.status==1}">
													<td style="padding: 10px;">
														<input type="radio" class="float-left" name="question_answers_{{question.id}}" value="{{answer.id}}" ng-model="user_answers[question.id]" ng-disabled="practiceStep=='finishPractice'" ng-change="selectAnswer(question, answer)" />
														<span class="answers_474_38915 pl10" mathjax-bind="answer.content"></span>
	

													</td>
												</tr>
												<tr class="bg-success text-white" ng-show="showAnswersStep=='showAnswers' && isRightAnswer(question)">
													<td style="padding: 10px;">
														Bạn đã trả lời đúng
													</td>
												</tr>
												<tr class="bg-warning text-white" ng-show="showAnswersStep=='showAnswers' && !isRightAnswer(question)">
													<td style="padding: 10px;">
														Bạn đã trả lời sai
													</td>
												</tr>
											</tbody>
										</table>
								
										<a href="#mobile-explan-{{question.id}}" class="explanation top10 btn btn-success btn-show-exp" data-toggle="collapse" ng-show="showAnswersStep=='showAnswers'">Xem lý giải
										</a>
								
										<div id="mobile-explan-{{question.id}}" class="collapse lygiai top10 item" ng-show="showAnswersStep=='showAnswers'">
											<div class="item mb-2" mathjax-bind="getExplaination(question)"></div>
									
											<div class="item">
												<div class="btn btn-danger" data-toggle="modal" data-target="#report{{question.id}}">
													Báo lỗi			
												</div>
										
												<div class="modal fade" id="report{{question.id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
												  <div class="modal-dialog" role="document">
													<div class="modal-content">
													  <div class="modal-header">
														<button style="right: 15px;" type="button" class="close absolute" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>

														<h4 class="modal-title" id="myModalLabel{{question.id}}">Báo lỗi</h4>
													  </div>
													  <div class="modal-body">
														 <div class="w100p">
															<label for="contentError{{question.id}}">Nội dung:</label>
															<textarea style="height: 150px !important;" id="contentError{{question.id}}" name="contentError" class="form-control" ng-model="report.content"></textarea>
														  </div>
											 
													  </div>
													  <div class="modal-footer">
														
														<button ng-click="reportError(question);" type="button" class="btn btn-primary">Báo lỗi</button>
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
								<button id="finish-choice" class="btn btn-primary btt-practice " name="finish-choice" ng-click="finishPractice()" ng-disabled="practiceStep=='finishPractice'"><span class="fa fa-check"></span>
									Hoàn thành
								</button>
								<button id="view-result" class="btn btt-practice btn-success" data-toggle="modal" data-target="#resultModal" name="view-result"  ng-show="practiceStep=='finishPractice'"><span class="fa fa-list-alt"></span>
									Xem kết quả
								</button>
								<button id="show-answers" class="btn btt-practice btn-danger " name="show-answers" ng-click="showAnswers();" ng-show="practiceStep=='finishPractice'" ng-disabled="showAnswersStep=='showAnswers'"><span class="fa fa-check"></span>
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


							<ul class="nav nav-tabs" id="tabDocument" role="tablist">
							  <li class="nav-item">
							    <a class="nav-link title-pr active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Từ vựng</a>
							  </li>
							  <li class="nav-item">
							    <a class="nav-link title-pr" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Kiểm tra từ vựng</a>
							  </li>
							
							</ul>
							<div class="tab-content" id="tabDocumentContent">
							  	<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
									<div class="text-justify pt-2 adjust-table" mathjax-bind="parseTranslate(selectedVocabulary.content)">
									</div>
							  	</div>
								<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
								
									<div class="item text-center pt-2">
										<input type="hidden" id="pageGame" name="pageGame" value="1">
									
										<button onclick="gameWords(selectedVocabularyId, 'vdrag', subjectId, this);" class="btn v_game btn-warning">Game 1</button>
										
										<button onclick="gameWords(selectedVocabularyId, 'vdt', subjectId, this);" class="btn v_game btn-success">Game 2</button>
												
										<button onclick="gameWords(selectedVocabularyId, 'vmt', subjectId, this);" class="btn v_game btn-info">Game 3</button>
										<button onclick="gameWords(selectedVocabularyId, 'sortword', subjectId, this);" class="btn v_game btn-primary">Game 4</button>
										<button style="opacity: 0.3;" onclick="gameWords(selectedVocabularyId, 'vdragimg', subjectId, this);" class="btn v_game btn-danger">Game 5</button>
										<button style="opacity: 0.3;" onclick="gameWords(selectedVocabularyId, 'dragToPart', subjectId, this);" class="btn v_game btn-danger">Game 6</button>
										<div class="item" id="resGame">
											<img class="item" src="http://s1.nextnobels.com/default/skin/nobel/test/themes/default/media/bg_game.jpg">
										</div>
									</div>

									<script type="text/javascript">
										var gameScoreByPage = [];
										var trueWordByPages = [];
										function gameWords(documentId, gameType, cateId, that) {
											jQuery('#pageGame').val(1);
											jQuery('.v_game').removeClass('active_v_game');
											jQuery(that).addClass('active_v_game');
											if(documentId && gameType) {
												if(gameType == 'vdrag'){
													if (typeof timer != 'undefined') {
														timer.stopCount();
													}
													jQuery.ajax({
														type: 'get',
														url: FL_API_URL +'/games?gamecode='+gameType+'&documentId='+documentId+'&software=1&status=1&limit=1', 
														dataType: 'json',
														success: function(data){
															var page = 1;
															var dataCells = [{"type":"Result","name":" K\u1ebft qu\u1ea3"},{"type":"Fraction","name":" Ph\u00e2n s\u1ed1"},{"type":"Divide","name":" Chia"},{"type":"Quotient","name":" Th\u01b0\u01a1ng"},{"type":"Natural number","name":" S\u1ed1 t\u1ef1 nhi\u00ean"},{"type":"Division","name":" Ph\u00e9p chia"}];
															var dataTopics = [{"type":"Fraction","name":"Fraction"},{"type":"Result","name":"Result"},{"type":"Divide","name":"Divide"},{"type":"Division","name":"Division"},{"type":"Natural number","name":"Natural number"},{"type":"Quotient","name":"Quotient"}];
															jQuery.ajax({
																type: "Post",
																data: {documentId:documentId, gameType:gameType, cateId:cateId, dataCells:dataCells, dataTopics:dataTopics, page: page},
																url:'/document/game/vdrag.php',
																success: function(data){

																	jQuery('#resGame').html(data);
																	
																}
															});
														}
													});
													
												}
												
											}
											

										}
									</script>

								</div>
							  
							</div>

							
						</div>
					</div>
					
					<img class="img-fluid full" src="/assets/images/bg-huongdan.png" />
				</div>
			</div>
		</div>
	</div>
</div>

<!--show result-->
<div class="modal" role="dialog" id="resultModal" aria-labelledby="gridSystemModalLabel" aria-hidden="false">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button style="right: 15px;" type="button" class="close absolute" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
				<h3 class="modal-title text-center title-blue" id="gridSystemModalLabel"><b>Kết quả làm bài</b></h3>
			</div>
			
			<div class="modal-body">
				<div class="row">
						<div class="col-md-8 question_true control-label">Số câu trả lời đúng </div> 
						<div class="col-md-4 num_true title-blue">{{totalRights}}</div>
				</div>	
				<div class="row">	
					<div class="col-md-8 question_false control-label">Số câu trả lời sai </div> 
					<div class="col-md-4 num_false title-red">{{totalWrongs}}</div>
				</div>
				<div class="row">
					<div class="col-md-8 question_total control-label">Tổng số câu </div> 
					<div class="col-md-4 num_total">{{totalQuestions}}</div>
				</div>
			</div>
			<div class="modal-footer">
				<div class=" full text-center">
					<button class="btn btn-sm btn-danger top10" onclick="window.location='/#practice'"> 
						<span >Chọn môn khác</span> 
						<span class="glyphicon glyphicon-arrow-left"></span>
					</button>
					<button id="show-answers-on-dialog" class="btn btn-sm btn-danger top10 " name="show-answers"  ng-click="showAnswers();" ng-show="practiceStep=='finishPractice'" ng-disabled="showAnswersStep=='showAnswers'" type="button" onclick="jQuery('#resultModal').modal('hide');">
						<span class="glyphicon glyphicon-check"></span>
						Xem đáp án							
					</button>
					<button type="button" class="btn btn-sm btn-success top10" onclick="jQuery('#resultModal').modal('hide'); jQuery(window).scrollTop(0)">
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
.text-white {
	color: white !important;
}
</style>