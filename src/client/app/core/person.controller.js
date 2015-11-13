(function () {
	'use strict'

	var moduleID = 'app.core';
	var ctrlID = 'personCtrl';
	var injectParams = ['fPerson', 'somePerson', '$stateParams', 'toastServ', '$state', '$scope', '$mdDialog'];

	angular.module(moduleID)
		.controller(ctrlID, personCtrl);

	personCtrl.$inject = injectParams;
	function personCtrl(fPerson, somePerson, $stateParams, toastServ, $state, $scope, $mdDialog) {
		var vm = this;
		vm.cardView = false;
		vm.id;

		//modal dialog header
		if (angular.isDefined($scope.setHeader))
			$scope.setHeader('Add New Contact');

		vm.somePerson = somePerson;
		if (angular.isDefined($stateParams.id)) {
			vm.id = $stateParams.id;
		}
		init();


		function init() {
			fPerson.query(function (data) {
				vm.contacts = data;
			});

		}

		vm.saveData = function (form) {

			if (angular.isDefined(vm.id)) {
				//edit
				fPerson.update({ id: vm.id }, vm.somePerson, function () {
					toastServ.success('Saved! You are good');
					$state.go('contacts.view', { id: vm.id });
				})
			}
			else {
				//add
				fPerson.save(vm.somePerson, function () {
					toastServ.success('Saved! You are good');
					if (angular.isDefined($scope.setHeader)) {
						$mdDialog.hide();
					}
					else {
						$state.go('contacts.all');
					}
				})
			}
			
			// dataserv.postPerson(id, vm.somePerson).success(function (data) {
			// 	toastServ.success('Saved! You are good');
			// }).error(function (e) {
			// 	alert(e);
			// })
		};

	};

})();