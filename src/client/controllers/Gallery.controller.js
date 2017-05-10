(function() {
'use strict';

	angular
		.module('app.gallery', [])
		.controller('Gallery', Gallery);

	Gallery.$inject = [];
	function Gallery() {
		var vm = this;
		vm.gallery = [];

		activate();
		
		////////////////

		function activate() {
			//getNews();
			getGallery();
		}

		function getGallery() {
			for(var i = 1; i < 46; i++) {
				vm.gallery.push(i);
			}
		}
		

	}
})();