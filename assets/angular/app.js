$langMap = {
	en: {
		'Class': 'Class'
	},
	vn: {
		'Class': 'Lớp'
	}
};
flApp = angular.module('flApp', ["ngSanitize", "ngJaxBind"]);

flApp.filter('sanitizer', ['$sce', function($sce) {
        return function(url) {
            return $sce.trustAsHtml(url);
        };
}]);
flApp.filter('translate', ['$sce', function($sce) {
        return function(str) {
			if(str) {
				return $sce.trustAsHtml(str.replace(/\[start\](.*)\[end\]/g, `<button class="btn btn-primary" data-toggle="collapse" onclick="jQuery(this).next().collapse('toggle')">Dịch</button><div class="collapse"><div class="card card-body">$1</div></div>`))
			};
			return '';
        };
}]);

flApp.filter('repeat', ['$sce', function($sce) {
    return function(number, str) {
		return number ? str.repeat(number) : '';
	};
}]);