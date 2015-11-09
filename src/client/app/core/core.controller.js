(function () {
	'use strict'

	var moduleID = 'app.core';
	var ctrlID = 'shellCtrl';
	var injectParams = ['$mdSidenav', '$mdToast','toastServ'];

	angular.module(moduleID)
		.controller(ctrlID, shellCtrl);

	shellCtrl.$inject = injectParams;
	function shellCtrl($mdSidenav, $mdToast, toastServ) {

		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.showToast = function(){
			toastServ.show('Something!');
		}
	// 	vm.showToast = function () {
	// 		$mdToast.show({
	// 			controller: 'ToastCtrl',
	// 			templateUrl: 'app/core/toast-template.html',
	// 			hideDelay: 6000,
	// 			position: 'top right',
	// 			locals: { toastColor: 'red' }
	// 		});
	// 	};

	// };

	// ToastCtrl.$inject = injectParamsToast;
	// function ToastCtrl($scope, $mdToast, toastColor) {
	// 	$scope.color = { 'background-color': toastColor };
	// 	$scope.closeToast = function () {
	// 		$mdToast.hide();
	// 	};
	};


})();