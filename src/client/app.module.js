(function() {
	'use strict';

	angular.module('app', [
		'ngMaterial',
		'app.route',
		'app.global',
		'ngAnimate',
		'app.data'
	])
	.filter('strLimit', ['$filter', function($filter) {
            return function(input, limit) {
                if (! input) return;
                if (input.length <= limit) {
                    return input;
                }

                return $filter('limitTo')(input, limit) + '...';
            };
	}]);

})();