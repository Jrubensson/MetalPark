(function() {
    'use strict';

    angular
        .module('app.user', [])
        .factory('userData', User);

    User.$inject = ['$http'];

    /* @ngInject */
    function User($http) {
        var url = "/api/api.php/user/";

        activate();

        return {
            login: login,
            logout: logout,
            authorize: authorize
        };

        function activate() {

        }

        ///////////////////////////////
        function login(usr, pass) {
            return $http.post(url + "login", {email: usr, pass: pass});
        }

        function authorize() {
            return $http.get(url + "authorize");
        }

        function logout() {
            return $http.get(url + "logout");
        }
    }

})();