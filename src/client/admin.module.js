(function() {
    'use strict';

    angular.module('admin', [
            'ngMaterial',
            'admin.route',
            'admin.global',
            'core.headers',
            'app.data',
            'app.user'
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