(function() {
    'use strict';

    angular
        .module('admin.global', [])
        .controller("Admin", Admin);

    Admin.$inject = ['newsData', 'userData', '$scope', '$mdToast'];

    /* @ngInject */
    function Admin(newsData, userData, $scope, $mdToast) {
        var vm = this;
        vm.title = "Admin";

        vm.login = login;
        vm.logout = logout;
        vm.addNews = addNews;
        vm.deleteNews = deleteNews;
        vm.updateNews = updateNews;


        activate();

        ///////////////////////

        function activate() {
            authorize();
            getNews();
        }
        
        function authorize() {
            userData.authorize()
                .success(function() {
                    $scope.admin = true;
                    console.log("Logged in!");
                })
                .error(function() {
                    $scope.admin = false;
                    console.log("Not logged in!");
                });
        }

        function getNews() {
            newsData.getNews()
                .success(function(data) {
                    vm.news = data;
                });
        }
        
        function deleteNews(ID) {
            newsData.deleteNews(ID)
                .success(function() {
                    getNews();
                    showToast("Nyheten raderad!");
                });
        }

        function addNews(text) {
            newsData.addNews(text)
                .success(function() {
                    getNews();
                    vm.new.text = "";
                    showToast("Nyheten tillagd!");
                });
        }

        function updateNews(ID, text) {
            newsData.updateNews(text, ID)
                .success(function() {
                    getNews();
                    showToast("Nyheten uppdaterad!");
                });
        }

        function login() {
            userData.login(vm.username, vm.password)
                .success(function() {
                    location.reload();
                })
                .error(function() {
                   vm.error = "Fel användarnamn eller lösenord!";
                });
        }

        function logout() {
            userData.logout()
                .success(function() {
                    location.reload();
                });
        }

        function showToast(text) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(text)
                    .position('bottom left')
                    .hideDelay(3000)
            );
        }

    }
})();