<?php  ?>
<div class="full practice pb-5">
	<div class="container mt-4 mb-3">
		<div class="main-shadow full p-3">
			<div class="full  p-3 mb-3">
				<h4 class="text-center t-weight ">CHI TIẾT VỞ BÀI TẬP</h4>
				<p class="text-center t-weight"><a href="/profile.php">Quay lại</a></p>
			</div>
			<!-- Hiển thị số lượng câu hỏi -->
			<div class="full  p-3 mb-3">
				<table class="table table-sm table-dark">
					<tr class="bg-success">
				      <th scope="row">Số câu đúng</th>
				      <th scope="row">{{lessons.mark}}</th>
				      
				    </tr>
				    <tr class="bg-primary">
				      <th scope="row">Tổng số câu</th>
				      <th scope="row">{{lessons.quantity_question}}</th>
				      
				    </tr>
				</table>
			</div>
			<!-- chi tiết về bài làm của hs -->
			<div class="full  p-3 mb-3">
				<div ng-repeat="question in questions">
					<div class="question full">
						<div class="item cau">
							<div id="{{question.questionId}}" class="stt">Câu:  {{$index+1}}</div>
							<span ng-if="question.hasAudio" class="btn volume fa fa-volume-up" onclick="read_question(this, '/3rdparty/Filemanager/source/practice/all/474.mp3');"
							></span>
							<span ng-if="question.hasImage"><img src="" alt=""></span>
						</div>
						<div class="nobel-list-md choice">
							<div ng-if="lessons.lang != 'vn'" class="ptnn-title full" mathjax-bind="question.name"></div>
							<div ng-if="lessons.lang == 'vn'" class="ptnn-title full" mathjax-bind="question.name_vn"></div>
							<table class="full">
							<tbody>
								<tr ng-repeat="answer in question.ref_question_answers" ng-class="{'font-weight-bold text-success': answer.status==1, 'font-weight-bold text-danger': answer.id == userAnswers[question.id]&& answer.status !=1 }">
									<td style="padding: 10px;" ng-if="lessons.lang != 'vn'">
										<input  type="radio" name="{{question.id}}" id="{{answer.id}}"  value="{{answer.id}}"  />
										<span class="answers_474_38915 pl10" mathjax-bind="answer.content"></span>										

									</td>
									<td style="padding: 10px;" ng-if="lessons.lang == 'vn'">
										<input  type="radio" name="{{question.id}}" id="{{answer.id}}"  value="{{answer.id}}"  />
										<span class="answers_474_38915 pl10" mathjax-bind="answer.content_vn"></span>
									</td>
								</tr>
								<tr  class="bg-success text-white" ng-show="trueAnswers[question.id]== userAnswers[question.id]">
									<td style="padding: 10px;">
										Bạn đã trả lời đúng
									</td>
									<td colspan="2"></td>
								</tr>
								<tr class="bg-warning text-white" ng-show="userAnswers[question.id] != 0 && trueAnswers[question.id] != userAnswers[question.id]">
									<td style="padding: 10px;">
										Bạn đã trả lời sai
									</td>
								</tr>
								<tr class="bg-warning text-white" ng-show="userAnswers[question.id]== 0">
									<td style="padding: 10px;">
										Bạn chưa trả lời
									</td>
								</tr>
							</tbody>
						</table>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>

</div>

