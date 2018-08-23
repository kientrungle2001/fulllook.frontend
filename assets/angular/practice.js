flApp.controller('PracticeController', ['$scope', function($scope) {
	$scope.title = 'Công ty cổ phần giáo dục và phát triển trí tuệ sáng tạo Next Nobels';
	$scope.subject_id = subject_id;
	$scope.language = window.localStorage.getItem('language') || 'en';
	$scope.changeLanguage = function() {
		window.localStorage.setItem('language', $scope.language);
	}
	
	$scope.grade = window.localStorage.getItem('grade') || '5';
	$scope.changeGrade = function() {
		window.localStorage.setItem('grade', $scope.grade);
	}
	$scope.translate = function(val) {
		return $langMap[$scope.language][val] || val;
	}
	
	$scope.parseTranslate = function(str) {
		if(str) {
			str = str.replace(/\[start\](.*)\[end\]/g, `<button class="btn btn-primary" data-toggle="collapse" onclick="jQuery(this).next().collapse('toggle')">Dịch</button><div class="collapse"><div class="card card-body">$1</div></div>`);
			str = str.replace(/\[fix\](.*)\[endfix\]/g, `<span class="btn btn-default fa fa-volume-up" onclick="read_question(this,'/3rdparty/Filemanager/source/audiovocabulary/$1.mp3');"></span>`);
			str = str.replace(/\[audio\](.*)\[endaudio\]/g, `$1<span class="btn btn-default fa fa-volume-up" onclick="read_question(this,'/3rdparty/Filemanager/source/audiovocabulary/$1.mp3');"></span>`);			
			return str;
		};
		return '';
	};
	
	$scope.topics = [];
	$scope.subject = {};
	
	$scope.loadSubject = function() {
		jQuery.ajax({
			type: 'get',
			url: FL_API_URL +'/corecategories/' + subject_id, 
			dataType: 'json',
			success: function(resp) {
				$scope.subject = resp;
				subjectId = resp.id;
				$scope.$apply();
			}
		});	
	};
	
	$scope.loadTopics = function() {
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/subject/getTopics', 
			data: {
				subject_id: subject_id
			},
			dataType: 'json',
			success: function(resp) {
				$scope.topics = buildBottomTree(resp);
				$scope.$apply();
			}
		});	
	};
	
	$scope.loadVocabularies = function() {
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/subject/getVocabularies', 
			data: {
				subject_id: subject_id
			},
			dataType: 'json',
			success: function(resp) {
				$scope.vocabularies = buildBottomTree(resp);
				$scope.$apply();
			}
		});	
	};
	
	$scope.loadSubject();
	$scope.loadTopics();
	$scope.loadVocabularies();
	
	$scope.selectTopic = function(topic, parentTopic) {
		if(typeof $scope.practiceIntervalId !== 'undefined') {
			clearInterval($scope.practiceIntervalId);
		}
		$scope.action = 'practice';
		$scope.step = 'selectTopic';
		$scope.selectedExerciseNum = null;
		$scope.selectedTopic = topic;
		$scope.selectedParentTopic = parentTopic;
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/subject/getExercises', 
			dataType: 'json',
			data: {
				subject_id: subject_id,
				topic_id: topic.id
			},
			success: function(resp) {
				$scope.exerciseNums = [];
				for(var i = 0; i < resp; i++) {
					$scope.exerciseNums.push(i);
				}
				$scope.$apply();
			}
		});
	};
	$scope.selectedExerciseNum = null;
	$scope.selectExercise = function(exerciseNum) {
		if(typeof $scope.practiceIntervalId !== 'undefined') {
			clearInterval($scope.practiceIntervalId);
		}
		$scope.step = 'selectExercise';
		$scope.selectedExerciseNum = exerciseNum;
		$scope.remaining = {
			minutes: 15,
			seconds: 0
		};
	};
	$scope.startPractice = function() {
		
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL +'/subject/getExerciseQuestions', 
			dataType: 'json',
			data: {
				subject_id: subject_id,
				topic_id: $scope.selectedTopic.id,
				exercise_number: $scope.selectedExerciseNum + 1
			},
			success: function(resp) {
				$scope.step = 'startPractice';
				$scope.practiceStep = 'startPractice';
				$scope.showAnswersStep = 'startPractice';
				$scope.questions = resp;
				$scope.user_question_answers = {};
				$scope.$apply();
				$scope.practiceIntervalId = setInterval(function() {
					if($scope.remaining.seconds == 0) {
						if($scope.remaining.minutes == 0) {
							$scope.finishPractice();
						} else {
							$scope.remaining.minutes--;
							$scope.remaining.seconds = 59;
						}
					} else {
						$scope.remaining.seconds--;
					}
					$scope.$apply();
				}, 1000);
			}
		});
	};
	$scope.user_question_answers = {};
	$scope.selectAnswer = function(question, answer) {
		$scope.user_question_answers[question.id] = answer.id;
		console.log($scope.user_question_answers);
	};
	
	$scope.shuffle = function (array) {
		let counter = array.length;
		// While there are elements in the array
		while (counter > 0) {
			// Pick a random index
			let index = Math.floor(Math.random() * counter);
			// Decrease counter by 1
			counter--;
			// And swap the last element with it
			let temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}
		return array;
	} 
	$scope.gameEnables = {};
	$scope.gameTypes = ['vdrag', 'vdt', 'vmt', 'sortword', 'vdragimg', 'dragToPart'];
	$scope.checkGame = function(gameType, documentId) {
		jQuery.ajax({
			type: 'get',
			url: FL_API_URL+'/games/?gamecode='+gameType+'&documentId='+documentId+'&software=1&status=1&limit=1',
			dataType: 'json',
			success: function(rep){
				if(rep[0] && rep[0].question != ''){
					$scope.gameEnables[gameType] = true;
				}else{
					$scope.gameEnables[gameType] = false;
				}
				$scope.$apply();
			}
		});
	}
	$scope.setGameVocabulary = function(documentId){
		$scope.gameVocabularys = [];
		var gameTypes = $scope.gameTypes;
		for(let i = 0; i < gameTypes.length; i++){
			$scope.checkGame(gameTypes[i], documentId);
			
		}
	}
	$scope.strip_tags = function (str) {
		str = str.toString();
		return str.replace(/<\/?[^>]+>/gi, '');
	}
	
	//game
	gameScoreByPage = [];
	trueWordByPages = [];
	$scope.gameScoreByPage = [];
	$scope.trueWordByPages = [];
	$scope.dataCells = [];
	$scope.dataTopics = [];
	$scope.gamePage = 1;
	$scope.gameType = '';
	$scope.gameWords = function (gameType) {
			var documentId = $scope.selectedVocabulary.id;
			var cateId = $scope.subject.id;
			$scope.gameType = gameType;
			if(documentId && gameType) {
				if (typeof timer != 'undefined') {
					timer.stopCount();
				}
				if(gameType == 'vdrag'){
					jQuery.ajax({
						type: 'get',
						url: FL_API_URL +'/games?gamecode='+gameType+'&documentId='+documentId+'&software=1&status=1&limit=1', 
						dataType: 'json',
						success: function(data){
							var question = data[0].question;
							var wordByPage = question.split('*****');
							var dataCells = [];
							var dataTopics = [];
							var allTrueWord = [];
							for(var i = 0; i < wordByPage.length; i++){
								var words = wordByPage[i].split(/\r\n|\r|\n|\<br \/\>|\<br\/\>/);
								var objcells = [];
								var objTopics = []; 
								for(var j=0; j < words.length; j++){
									if(words[j] && words[j] != ''){
										var ex_cell = words[j].split(':');
										var cell = {type: ex_cell[0], name: ex_cell[1]};
										var topic = {type: ex_cell[0], name: ex_cell[0]};
										objcells.push(cell);
										objTopics.push(topic);
										allTrueWord.push(ex_cell[0]);
									}
									
								}
								dataCells.push(objcells);
								dataTopics.push(objTopics);
							}
							$scope.dataCells = dataCells;
							$scope.dataTopics = dataTopics;

							jQuery.ajax({
								type: "Post",
								data: {documentId:documentId, gameType:gameType, cateId:cateId, dataCells: dataCells, dataTopics: dataTopics, allTrueWord: allTrueWord, page: $scope.gamePage},
								url:'/document/game/vdrag.php',
								success: function(data){

									jQuery('#resGame').html(data);
									
								}
							});
						}
					});
					
				}else if(gameType == 'vmt'){
					jQuery.ajax({
						type: 'get',
						url: FL_API_URL +'/games?gamecode='+gameType+'&documentId='+documentId+'&software=1&status=1&limit=1', 
						dataType: 'json',
						success: function(data){
							var question = data[0].question;
							var wordByPage = question.split('*****');
							var dataWords = [];
							for(var i = 0; i < wordByPage.length; i++){
								var words = wordByPage[i].split('-----');
								for(var j = 0; j < words.length; j++){
									var trueWord = $scope.strip_tags(words[2]);
									trueWord.trim();
									var strWords = $scope.strip_tags(words[1]);
									strWords.trim();
									var allWords = strWords.split(',').map(function(item) {
										return item.trim();
									});;
									var img = (/src=[\'"]([^\'"]*)[\'"]/gi).exec(words[0]);
									var objWord = {allWords: allWords, trueWord: trueWord, img: img[1]};
								}
								dataWords.push(objWord);
							}
							//console.log(dataWords);

							jQuery.ajax({
								type: "Post",
								data: {documentId:documentId, gameType:gameType, cateId:cateId, dataWords: dataWords, page: $scope.gamePage},
								url:'/document/game/vmt.php',
								success: function(data){

									jQuery('#resGame').html(data);
									
								}
							});
						}
					});
				}else if(gameType =='vdragimg'){

				}else if(gameType =='vdt'){

				}else if(gameType == 'sortword'){
					jQuery.ajax({
						type: 'get',
						url: FL_API_URL +'/games?gamecode='+gameType+'&documentId='+documentId+'&software=1&status=1&limit=1', 
						dataType: 'json',
						success: function(data){
							var question = data[0].question;
							var arrWrods = question.split('-----');
							var dataWords = [];
							for(var i=0; i < arrWrods.length; i++){
								dataWord = [];
								arrWord = arrWrods[i].split('===');
								for(var j=0; j < arrWord.length; j++){
									var img = arrWord[0].replace(/<br \/>/gi, '');
									var word = $scope.strip_tags(arrWord[1])
									word.trim();
									dataWord.push(word);
									dataWord.push(img);
									
								}
								dataWords.push(dataWord);
							}
							jQuery.ajax({
								type: "Post",
								data: {documentId:documentId, gameType:gameType, cateId:cateId, dataWords: dataWords},
								url:'/document/game/sortword.php',
								success: function(data){

									jQuery('#resGame').html(data);
									
								}
							});
						}
					});	
				}else if(gameType == 'dragToPart'){

				}
				
			}
			

		}
	//select vocabulary
	$scope.selectVocabulary = function(vocabulary) {
		if(typeof $scope.practiceIntervalId !== 'undefined') {
			clearInterval($scope.practiceIntervalId);
		}
		jQuery("#resGame").html('');
		$scope.action = 'vocabulary';
		$scope.selectedVocabulary = vocabulary;
		selectedVocabularyId = vocabulary.id;
		$scope.setGameVocabulary(vocabulary.id);
	};
	$scope.finishPractice = function() {
		if(typeof $scope.practiceIntervalId !== 'undefined') {
			clearInterval($scope.practiceIntervalId);
		}
		console.log($scope.user_question_answers);
		$scope.practiceStep = 'finishPractice';
		$scope.totalQuestions = $scope.questions.length;
		$scope.totalRights = 0;
		$scope.questions.forEach(function(question) {
			if($scope.isRightAnswer(question)) {
				$scope.totalRights++;
			}
		});
		$scope.totalWrongs = $scope.totalQuestions - $scope.totalRights;
		jQuery('#resultModal').modal('show');
		var userId = 8;
		var startTime = serverTime;
		var duringTime = 15 * 60 - ($scope.remaining.minutes * 60 + $scope.remaining.seconds);
		var stopTime = serverTime + duringTime;
		var questions = [];
		$scope.questions.forEach(function(question){
			var answerId = 0;
			if(typeof $scope.user_question_answers[question.id] !== 'undefined') {
				answerId = $scope.user_question_answers[question.id];
			}
			questions.push({
				questionId: question.id,
				answerId: answerId,
				status: $scope.isRightAnswer(question) ? 1: 0
			});
		});
		jQuery.ajax({
			type: 'post',
			url: FL_API_URL + '/subject/updateUserBooks',
			data: {
				userId:  userId,
				subject_id: $scope.subject.id,
				topic_id: $scope.selectedTopic.id,
				exercise_number: $scope.selectedExerciseNum+1,
				questions: questions,
				quantity_question: $scope.totalQuestions,
				mark: $scope.totalRights,
				startTime: startTime,
				duringTime: duringTime,
				stopTime: stopTime
			},
			success: function(resp) {
				
			}
		});
	};

	$scope.getQuestion = function(questionId) {
		var question = null;
		$scope.questions.forEach(function(q) {
			if(q.id == questionId || parseInt(q.id) == parseInt(questionId)) {
				question = q;
			}
		});
		return question;
	};
	
	$scope.showAnswers = function() {
		$scope.showAnswersStep = 'showAnswers';
	};
	
	$scope.getExplaination = function(question) {
		var explaination = null;
		question.ref_question_answers.forEach(function(answer) {
			if(answer.status == 1 || answer.status == '1' ) {
				explaination = answer.recommend;
			}
		});
		if(!explaination || explaination == '') {
			explaination = question.explaination;
		}
		return explaination;
	};
	$scope.report = {};
	$scope.reportError = function(question) {
		console.log($scope.report.content);
		console.log(question);
	};
	$scope.isRightAnswer = function(question) {
		var rightId = null;
		question.ref_question_answers.forEach(function(answer) {
			if(answer.status == 1 || answer.status == '1' ) {
				rightId = answer.id;
			}
		});
		if(typeof $scope.user_question_answers[question.id] != 'undefined') {
			if(rightId == $scope.user_question_answers[question.id]) {
				return true;
			}
		}
		return false;
	};
	
}]);