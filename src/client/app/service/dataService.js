(function () {
	'use strict'

	var moduleID = 'app.service';
	var factID = 'fPerson'
	var injectParams = ['$q', '$resource'];

	angular.module(moduleID)
		.factory(factID, dataserv);

	dataserv.$inject = injectParams;
	function dataserv($q, $resource) {

		return $resource('/person/:id', { id: '@id' },
			{
				get: {
					method: 'GET',
					interceptor: {
						responseError: resourceErrorHandler
					}
				},
				save: {
					method: 'POST'
				},
				query: {
					method: 'GET',
					isArray: true,
					interceptor: {
						responseError: resourceErrorHandler
					}
				},
				remove: {
					method: 'DELETE'
				},
				update: {
					method: 'PUT'
				}

			});

		function resourceErrorHandler(rejection) {
			alert('Error on the server!!!');
			return $q.reject(rejection);
		}
		// var service = {
		// 	getPerson: getPerson,
		// 	getPersons: getPersons,
		// 	postPerson: postPerson
		// }
		// return service;

		// function getPerson(id) {
		// 	return $http.get('/person/' + id);
		// }

		// function getPersons() {
		// 	return $http.get('/persons');
		// }

		// function postPerson(id, per) {
		// 	if (angular.isDefined(id)) {
		// 		return $http.post('/person/' + id, per);
		// 	}
		// 	else {
		// 		return $http.post('/person', per);
		// 	}
		// }

	};

})();