(function () {
	'use strict'

	var moduleID = 'app.core';
	var ctrlID = 'shellCtrl';
	var injectParams = ['$mdSidenav'];

	angular.module(moduleID)
		.controller(ctrlID, shellCtrl);

	shellCtrl.$inject = injectParams;
	function shellCtrl($mdSidenav) {

		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

	};

})()