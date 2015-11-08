(function () {
	'use strict'

	var moduleID = 'app.core';
	var ctrlID = 'personCtrl';
	var injectParams = ['dataserv','somePerson'];

	angular.module(moduleID)
		.controller(ctrlID, personCtrl);

	personCtrl.$inject = injectParams;
	function personCtrl(dataserv,somePerson) {
		var vm = this;

		vm.somePerson = somePerson.data;

		dataserv.getPersons().success(function (data) {
			vm.contacts = data;
		}).error(function (e) {
			alert(e);
		});

	};

})();