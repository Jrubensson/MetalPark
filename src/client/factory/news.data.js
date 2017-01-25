(function() {
    'use strict';

    angular
        .module('app.data', [])
        .factory('newsData', News);

    News.$inject = ['$http'];

    /* @ngInject */
    function News($http) {
        var url = "/api/api.php/news/";

        activate();

        return {
            getNews: getNews,
            updateNews: updateNews,
            deleteNews: deleteNews,
            addNews: addNews
        };

        function activate() {

        }

        ///////////////////////////////
        function getNews() {
            return $http.get(url + "getnews");
        }

        function updateNews(text, ID) {
            return $http.post(url + "updatenews", {text: text, ID: ID});
        }

        function deleteNews(ID) {
            return $http.get(url + "deletenews/" + ID);
        }

        function addNews(text) {
            return $http.post(url + "addNews", {text: text});
        }
    }

})();