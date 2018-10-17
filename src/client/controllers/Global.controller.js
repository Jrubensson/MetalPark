(function() {
'use strict';

	angular
		.module('app.global', [])
		.controller('Global', Global);

	Global.$inject = ['$interval', '$scope', '$mdSidenav', 'newsData', '$mdMenu'];
	function Global($interval, $scope, $mdSidenav, newsData, $mdMenu) {
		var vm = this;
		var flip, showing = 0;

		vm.toggleSidebar = toggleSidebar;

		var availableBackgrounds = [
			'/src/client/images/carousel/bg.jpg',
			'/src/client/images/carousel/lillasyster_2.jpg',
			'/src/client/images/carousel/mustasch_2.jpg',
			'/src/client/images/carousel/lillasyster.jpg'
			];

		vm.background = {background: "url(" + availableBackgrounds[0] + ")"};

		activate();

		////////////////

		function activate() {
			flipBackground();
			getNews();
		}

		function getNews() {
			newsData.getNews()
				.success(function(data) {
					vm.news = data;
				});
		}


		function flipBackground() {
			/*flip = $interval(function() {

				if(showing + 2 > availableBackgrounds.length) {
					showing = 0;
				} else {
					showing ++;
				}
				vm.background = {background: "url(" + availableBackgrounds[showing] + ")"};
			}, 5000);*/

			/*$scope.$on('$destroy', function() {
				$interval.cancel(flip);
			});*/
		}

		function toggleSidebar() {
			$mdSidenav('main-menu').toggle();
		}
	}
})();
