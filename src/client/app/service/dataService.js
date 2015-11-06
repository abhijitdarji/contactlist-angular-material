(function () {
	'use strict'

	var moduleID = 'app.service';
	var factID = 'dataserv'
	var injectParams = ['$http'];

	angular.module(moduleID)
		.factory(factID, dataserv);

	dataserv.$inject = injectParams;
	function dataserv($http) {

		var service = {
			getPerson: getPerson
		}
		return service;

		function getPerson() {
			return $http.get('/persons');
		}

	};

})();