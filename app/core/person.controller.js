(function () {
	'use strict'

	var moduleID = 'app.core';
	var ctrlID = 'personCtrl';
	var injectParams = ['dataserv'];

	angular.module(moduleID)
		.controller(ctrlID, personCtrl);

	personCtrl.$inject = injectParams;
	function personCtrl(dataserv) {
		var vm = this;

		dataserv.getPerson().success(function (data) {
			vm.contacts = data;
		}).error(function (e) {
			alert(e);
		});

	};

})()