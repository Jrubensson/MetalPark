(function() {
    'use strict';
    
    angular
        .module('app.route', ['ngRoute'])
        .config(config);
        
   config.$inject = ['$routeProvider', '$locationProvider'];
   
   function config($routeProvider, $locationProvider) {
       $routeProvider
            .when('/', {
                templateUrl: '/partials/home.html',
                controller: 'Global as vm'
            })
            .when('/biljetter', {
                templateUrl: '/partials/biljetter.html'
            })
            .when('/boende', {
                templateUrl: '/partials/boende.html'
            });
            
       $locationProvider.html5Mode({enabled: true, requireBase: true});
   }
    
})();