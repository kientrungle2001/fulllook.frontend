$langMap = {
	en: {
		'Class': 'Class'
	},
	vn: {
		'Class': 'Lớp'
	}
};
flApp = angular.module('flApp', ['ngSanitize']);

flApp.filter('sanitizer', ['$sce', function($sce) {
        return function(url) {
            return $sce.trustAsHtml(url);
        };
}]);