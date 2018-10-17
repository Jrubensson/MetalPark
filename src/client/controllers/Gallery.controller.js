(function() {
'use strict';

	angular
		.module('app.gallery', [])
		.controller('Gallery', Gallery);

	Gallery.$inject = ['$routeParams'];
	function Gallery($routeParams) {
		var vm = this;
		vm.gallery = [];

    vm.year = $routeParams.year;
    vm.gallery = [];

		activate();

		////////////////

		function activate() {
			//getNews();
			getGallery();
		}

		function getGallery() {
      if(vm.year === "2016") {
  			for(var i = 1; i < 46; i++) {
  				vm.gallery.push(i);
  			}
      } else {
        for(var i = 1; i < 83; i++) {
  				vm.gallery.push(i);
  			}
      }
		}


	}
})();
