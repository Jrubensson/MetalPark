(function() {
    'use strict';

    angular
        .module('admin.route', ['ngRoute'])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/admin/', {
                templateUrl: '/partials/adminhome.html'
                //controller: 'Admin as vm'
            })
            .when('/admin/edit/:news', {
                templateUrl: '/partials/edit-news.html'
            }).
            otherwise({
               redirectTo: '/admin'
            });

        $locationProvider.html5Mode({enabled: true, requireBase: true});
    }

})();