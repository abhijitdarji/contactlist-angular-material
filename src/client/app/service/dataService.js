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
			getPerson: getPerson,
			getPersons: getPersons
		}
		return service;

		function getPerson(id) {
			return $http.get('/person/' + id);
		}

		function getPersons() {
			return $http.get('/persons');
		}

	};

})();