<style>
	.fix-menu{margin-bottom: 15px;}
</style>
<div class="full pt-3">
	<div class="container">
		<div class="card bg-light mb-3">
		    <div class="card-block p-3">
		    	<div class="row">

		            <div class="col-md-4 col-12">
		                <label for="">Game</label>
		                <select ng-change="selectGameType();" ng-model="selectedGameType" class="form-control input-sm" name="gameType" id="gameType">
		                 	<option value="">Choose game</option>
                            <option ng-repeat="gameType in gameTypes" value="{{gameType.gamecode}}">{{gameType.game_type}}</option>
                        </select>
		            </div>

					<div id="resbytype" class="col-md-4 col-12">
						<div class="form-group">
							<label for="">Topic</label>
							<select class="form-control input-sm" name="gameTopic" id="gameTopic">
								<option value="">-- Choose topic </option>
								<option value="{{$index}}" ng-repeat="gameTopic in gameTopics">
									--{{gameTopic.level}} {{gameTopic.game_topic}}							
								</option>
							</select>
						</div>
					</div>
					
		            <div class="col-md-4 col-12">
		                <div class="form-group">

		                    <div id="playgame" style="margin-top: 30px;" class="btn btn-primary">
		                        <span class="glyphicon fefe glyphicon glyphicon-play" aria-hidden="true"></span> Play game
		                    </div>
		                </div>
		            </div>

		        </div>
		    </div>
		</div>
	</div>
</div>	